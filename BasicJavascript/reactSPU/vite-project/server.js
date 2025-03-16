const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const wpHotMiddleware = require('webpack-hot-middleware');
const formidable = require('formidable');
const fs = require('fs-extra');
const path = require('path');
const wpConfig = require('./webpack.config');

const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;
const AUDIO_FORMATS = ['audio/mp3'];
const AUDIO_EXTNS = ['.mp3'];
const STORAGE_FOLDER = 'storage';

const compiler = webpack(wpConfig);
const app = express();

// Middleware for Webpack
app.use(
  middleware(compiler, {
    publicPath: wpConfig.output.publicPath,
    stats: 'minimal',
  })
);
app.use(wpHotMiddleware(compiler));
app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(express.static(path.resolve(__dirname, STORAGE_FOLDER)));

// Ensure storage folder exists
if (!fs.existsSync(STORAGE_FOLDER)) {
  fs.mkdirSync(STORAGE_FOLDER);
}

// Utility function to rename files
const renameFile = (file) => {
  const oldPath = file.filepath;
  const newPath = path.join(STORAGE_FOLDER, file.originalFilename);
  fs.renameSync(oldPath, newPath);
};

// Utility function to delete existing audio files
const deleteExistingAudio = (newFilename) => {
  const regex = /\.mp3$/;
  fs.readdirSync(STORAGE_FOLDER)
    .filter((file) => regex.test(file) && file !== newFilename)
    .forEach((file) => fs.unlinkSync(path.join(STORAGE_FOLDER, file)));
};

// Get data from storage folder
const getData = () => {
  const data = { transcripts: [], audioURL: '' };

  try {
    const filenames = fs.readdirSync(STORAGE_FOLDER).sort();
    filenames.forEach((file) => {
      const ext = path.extname(file);

      if (AUDIO_EXTNS.includes(ext)) {
        data.audioURL = `/${file}`;
      } else if (ext === '.json') {
        const content = fs.readFileSync(
          path.join(STORAGE_FOLDER, file),
          'utf-8'
        );
        data.transcripts.push({
          filename: file,
          content: JSON.parse(content),
        });
      }
    });
  } catch (err) {
    console.error('Error reading files:', err);
  }

  return data;
};

// Refresh session: Clear all files
app.get('/api/clearAll', (req, res) => {
  try {
    fs.readdirSync(STORAGE_FOLDER).forEach((file) => {
      fs.unlinkSync(path.join(STORAGE_FOLDER, file));
    });
    res.json({ status: 'success' });
  } catch (err) {
    console.error('Error clearing files:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// File upload service
app.post('/api/upload', (req, res) => {
  const form = formidable({ multiples: true, keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: err.message });
    }

    const uploadedFiles = Array.isArray(files.inputs)
      ? files.inputs
      : [files.inputs];

    const audioFile = uploadedFiles.find((file) =>
      AUDIO_FORMATS.includes(file.mimetype)
    );

    if (audioFile) {
      deleteExistingAudio(audioFile.newFilename);
      uploadedFiles.forEach(renameFile);
      res.json({ status: 'success' });
    } else {
      res.status(400).json({ status: 'error', message: 'No audio file found' });
    }
  });
});

// Read files from storage
app.get('/api/read', (req, res) => {
  const data = getData();
  res.json(data);
});

// Delete specific file
app.get('/api/delete', (req, res) => {
  const { filename } = req.query;

  try {
    const filePath = path.join(STORAGE_FOLDER, filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.json({ status: 'success' });
    } else {
      res.status(404).json({ status: 'error', message: 'File not found' });
    }
  } catch (err) {
    console.error('Error deleting file:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// Check if storage folder is empty
app.get('/api/isEmpty', (req, res) => {
  try {
    const files = fs.readdirSync(STORAGE_FOLDER);
    const isEmpty = files.length === 0;
    res.json({ status: 'success', isEmpty });
  } catch (err) {
    console.error('Error checking folder:', err);
    res.status(500).json({ status: 'error', message: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
