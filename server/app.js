const express = require('express');
const { upload } = require('./storage');

const app = express();
const port = 8800;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello world'
  });
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

// Error handling middleware
app.use((err, req, res, next) => {
  if (err) {
    res.status(400).json({
      error: err.message
    });
  } else {
    next();
  }
});

app.listen(port, () => console.log(`running on local http://127.0.0.1:${port}`));
