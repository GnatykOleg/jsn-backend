const express = require('express');
const router = express.Router();
const controll = require('../../controllers/heros');

const { controllerWrapper } = require('../../helpers');
const {
    validateBody,
    upload,
    // upload,
} = require('../../middleware');

const { schemas } = require('../../models/heros');

router.get('/', controllerWrapper(controll.getAllHeros));

router.get('/:id', controllerWrapper(controll.getHeroById));

router.post(
    '/',
    // УКАЗАТЬ МАССИВ ИЛИ ОДНО
    // ОБЯЗАТЕЛЬНО УКАЗАТЬ ПРАВИЛЬНЫЙ ПУТЬ
    // upload.single('Images'),
    // 8 это количество файйлов
    upload.array('Images', 8),
    validateBody(schemas.addSchema),
    controllerWrapper(controll.addHero)
);

router.delete('/:id', controllerWrapper(controll.deleteHeroById));

router.put(
    '/:id',
    validateBody(schemas.addSchema),
    controllerWrapper(controll.updateHeroById)
);

// пОЛЕ FAVORITE
// router.patch(
//     '/:id/favorite',
//     // upload.single('images'),
//     validateBody(schemas.updateFavoriteSchema),
//     controllerWrapper(controll.updateFavorite)
// );

module.exports = router;
