const { Hero } = require('../../models/heros');
const path = require('path');
const fs = require('fs/promises');

const addHero = async (req, res, next) => {
    const { path: tempUpload, originalname } = req.files[0];

    const resultUpload = path.join(
        __dirname,
        '../../',
        'public',
        'heros',
        originalname
    );

    // const heros = [];

    try {
        const newHero = {
            ...req.body,
            Images: req.files,
        };

        fs.rename(tempUpload, resultUpload);

        const result = await Hero.create(newHero);

        res.status(201).json(result);
    } catch (error) {
        await fs.unlink(tempUpload);
    }
};

module.exports = addHero;
