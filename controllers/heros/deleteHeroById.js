const { RequestError } = require('../../helpers');
const { isValidObjectId } = require('mongoose');
const { Hero } = require('../../models/heros');
const deleteHeroById = async (req, res, next) => {
    const { id } = req.params;
    const isValidId = isValidObjectId(id);
    if (!isValidId) {
        throw RequestError(400, `${id} id is not correct`);
    }
    const result = await Hero.findByIdAndRemove(id);
    if (!result) {
        throw RequestError(404, 'Not found');
    }
    res.json({ message: `hero deleted` });
};

module.exports = deleteHeroById;
