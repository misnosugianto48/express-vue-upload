const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const fileFilter = function (req, file, cb) { 
  const allowedTypes = ['image/jpg', 'image/png', 'image/jpeg'];

  if (!allowedTypes.includes(file.mimetype)) {
    const err = new Error('Wrong file type');
    return cb(err, false);
  }
  cb(null, true);
};

const upload = multer({ 
  storage: storage, 
  fileFilter: fileFilter, 
  limits: { fileSize: 250 * 1024 } 
});

module.exports = { upload };
