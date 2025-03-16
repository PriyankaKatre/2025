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
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

// Ensure the uploads directory exists
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// API endpoint to handle file uploads
app.post('/api/upload', upload.array('ces1tInputs'), (req, res) => {
    // Check if files are uploaded
    console.log('Number of files uploaded:', req.files.length);
  if (!req.files || req.files.length === 0) {
    return res
      .status(400)
      .json({ status: 'error', message: 'No files uploaded' });
  }
  return res.status(200).json({
    status: 'success',
    message: 'Files uploaded and processed successfully',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
