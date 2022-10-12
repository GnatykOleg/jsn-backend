const cloudinary = require('cloudinary').v2;

require('dotenv').config();

// const { DB_HOST, PORT = 4000 } = process.env;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// exports.default = (file, folder) => {
//     return new Promise(resolve => {
//         cloudinary.uploader.upload(
//             file,
//             result => {
//                 resolve({
//                     url: result.url,
//                     id: result.public_id,
//                 });
//             },
//             { resource_type: 'auto', folder: folder }
//         );
//     });
// };

module.exports = cloudinary;
