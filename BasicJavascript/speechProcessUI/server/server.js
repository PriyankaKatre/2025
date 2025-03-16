const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for React frontend
app.use(cors());

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Save uploaded files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add unique timestamp to filenames
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

// Ensure the uploads directory exists
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// API endpoint to handle file uploads
app.post('/api/upload', upload.array('ces1tInputs', 2), (req, res) => {
  // Check if files are uploaded
  if (!req.files || req.files.length === 0) {
    return res
      .status(400)
      .json({ status: 'error', message: 'No files uploaded' });
  }

  const files = req.files;
  let jsonFile = null;
  let audioFile = null;
console.log('req.files', req.files);
  // Separate audio and JSON files from uploaded files
  files.forEach((file) => {
    if (file.mimetype === 'application/json') {
      jsonFile = file;
    } else if (file.mimetype.startsWith('audio')) {
      audioFile = file;
    }
  });

  if (!jsonFile || !audioFile) {
    return res
      .status(400)
      .json({
        status: 'error',
        message: 'Both audio and JSON files are required',
      });
  }

  // Handle the audio and JSON files
  // Example: Read the JSON file and process the text/audio

  const jsonFilePath = path.join(__dirname, 'uploads', jsonFile.filename);
    const audioFilePath = path.join(__dirname, 'uploads', audioFile.filename);
    console.log('jsonFilePath, audioFilePath', jsonFilePath, audioFilePath);

  // Example processing logic:
  // 1. Read and process the JSON file (for now, just logging it)
  fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ status: 'error', message: 'Error reading JSON file' });
    }

    const jsonData = JSON.parse(data);
    console.log('JSON File Contents:', jsonData);

    // 2. Return the file paths or success message
    return res.status(200).json({
      status: 'success',
      message: 'Files uploaded and processed successfully',
      audioFile: audioFilePath,
      jsonFile: jsonFilePath,
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
