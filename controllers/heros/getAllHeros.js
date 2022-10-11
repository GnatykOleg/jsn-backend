const { Hero } = require('../../models/heros');

const getAllHeros = async (req, res, next) => {
    const result = await Hero.find({});
    // res.json({ status: 201, result });
    res.json(result);
};

module.exports = getAllHeros;
