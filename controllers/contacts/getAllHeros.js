const { Hero } = require('../../models/heros');

const getAllHeros = async (req, res, next) => {
    const result = await Hero.find({});
    res.json(result);
};

module.exports = getAllHeros;
