const { RequestError } = require('../../helpers');
const { isValidObjectId } = require('mongoose');
const { Hero } = require('../../models/heros');
const getHeroById = async (req, res, next) => {
    const { id } = req.params;

    const isValidId = isValidObjectId(id);
    if (!isValidId) {
        throw RequestError(400, `${id} id is not correct`);
    }

    const result = await Hero.findById(id);

    if (!result) {
        throw RequestError(404, 'Not found');
    }
    res.json(result);
};

module.exports = getHeroById;
