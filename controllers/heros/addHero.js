const { Hero } = require('../../models/heros');
// const path = require('path');
// const fs = require('fs/promises');

// const imagesDir = path.join(__dirname, '../../', 'public', 'heros');

const addHero = async (req, res, next) => {
    // const {
    //     path: tempUpload,
    //     originalname,
    //     // filename
    // } = req.file;
    console.log('req.file', req.file);

    const {
        nickName,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        favorite,
        // file,
        // data,
    } = req.body;

    try {
        // const resultUpload = path.join(imagesDir, originalname);
        // await fs.rename(tempUpload, resultUpload);
        // const imageUrl = path.join('public', 'heros', originalname);

        const result = await Hero.create({
            // imageUrl,
            nickName,
            realName,
            originDescription,
            superpowers,
            catchPhrase,
            favorite,
            // file,
            // data,
        });
        res.status(201).json({
            status: 'success',
            code: 201,
            result,
        });
    } catch (error) {
        // await fs.unlink(tempUpload);
        // throw error;
    }
};

module.exports = addHero;
