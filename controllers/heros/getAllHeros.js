const { Hero } = require('../../models/heros');

const getAllHeros = async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = await Hero.find({});

    const results = {};

    results.current = {
        page,
        limit,
    };

    // проверь условие на массив
    if (endIndex < result.length) {
        results.next = {
            page: page + 1,
            limit,
        };
    }

    if (startIndex > 0) {
        results.previoust = {
            page: page - 1,
            limit,
        };
    }

    results.results = result.slice(startIndex, endIndex);
    res.json(results);
    //
    //
    //
    //
    // const result = await Hero.find({});
    // res.json(result);
};

module.exports = getAllHeros;

// localhost:4000/api/heros?page=1&limit=5

// function paginatedResults(model) {
//     return (req, res, next) => {};
// }
