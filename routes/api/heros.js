const express = require('express');
const router = express.Router();
const controll = require('../../controllers/heros');

const { controllerWrapper } = require('../../helpers');
const { validateBody, upload } = require('../../middleware');

const { schemas } = require('../../models/heros');

router.get('/', controllerWrapper(controll.getAllHeros));
router.get('/offset=0&limit=5', controllerWrapper(controll.getAllHeros));

// НЕ ЗАНЮ НУЖНО ЛИ МНЕ БУДЕТЬ ПОЛУЧАТЬ ГЕРОЯ ПО ID
router.get('/:id', controllerWrapper(controll.getHeroById));

router.post(
    '/',
    // Я УКАЗЫВАЮ 1 ФАЙЛ РАЗОБРАТСЯ С ЭТИМ ПОТОМ ОБЯЗАТЕЛЬНО0
    // ОПРЕДЕЛИТСЯ БУДЕТ ОДНА КАРТИНКА ИЛИ МНОГО
    upload.single('image'),

    // upload.array('images'),

    // upload.array('images'),
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
    // upload.single('images'),
    validateBody(schemas.updateFavoriteSchema),
    controllerWrapper(controll.updateFavorite)
);

module.exports = router;
