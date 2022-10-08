const express = require('express');
const router = express.Router();
const controll = require('../../controllers/contacts');
const { controllerWrapper } = require('../../helpers');
const { validateBody } = require('../../middleware');

const { schemas } = require('../../models/heros');

router.get('/', controllerWrapper(controll.getAllHeros));

router.get('/:id', controllerWrapper(controll.getHeroById));

router.post(
    '/',
    validateBody(schemas.addSchema),
    controllerWrapper(controll.addHero)
);

router.delete('/:id', controllerWrapper(controll.deleteHeroById));

router.put(
    '/:id',
    validateBody(schemas.updateHeroInformationSchema),
    controllerWrapper(controll.updateHeroById)
);

// Оставлять ли это поле нужно узнаподумать не забывай
// там после id надо фейворит добалять

router.patch(
    '/:id/favorite',
    validateBody(schemas.updateFavoriteSchema),
    controllerWrapper(controll.updateFavorite)
);

module.exports = router;
