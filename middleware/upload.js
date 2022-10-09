const multer = require('multer');
const path = require('path');

const tempDir = path.join(__dirname, '../', 'temp');

const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },

    // УКАЗАТЬ РАЗМЕР ФАЙЛА
    limits: {
        fileSize: 20480000,
    },
});

const upload = multer({
    storage: multerConfig,
});

module.exports = upload;
