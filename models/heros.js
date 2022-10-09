const { Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');

const Joi = require('joi');

const herosSchema = new Schema(
    {
        nickName: {
            type: String,
            required: [true, 'Set nickname for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        realName: {
            type: String,
            required: [true, 'Set real name for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        originDescription: {
            type: String,
            required: [true, 'Set description for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        superpowers: {
            type: String,
            required: [true, 'Set superpowers for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        catchPhrase: {
            type: String,
            required: [true, 'Set phrase for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        // images: {
        //     fieldname: String,
        //     // РАЗОБРАТСЯ КАК СДЕЛАТЬ КАРТИНКИ
        //     // type: Object,
        //     // type: String,
        //     // required: [true, 'Set image for hero'],
        //     // required: true,
        //     // minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        // },
        imageUrl: {
            type: String,
        },
        file: {},
        data: {},

        // images: {
        //     // type: Object,
        //     // type: Array,
        // },
        // path: {
        //     type: String,
        // },
        // Оставлять ли это поле нужно подумать
        // ВЕРНУТЬ БУЛЬ СЕЙЧАС СТРОКА
        favorite: {
            // type: Boolean,
            type: String,

            required: [true, 'Set FAVORITE for hero'],

            default: false,
        },
    },

    { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
    nickName: Joi.string().required(),
    realName: Joi.string().required(),
    originDescription: Joi.string().required(),
    superpowers: Joi.string().required(),
    catchPhrase: Joi.string().required(),
    // ОПЯТЬ ТАКИ РАЗОБРАТСЯ С КАРТИНКАМИ ПОКА ТЕКСТ
    // images: Joi.string().required(),
    // вернуть буль сейчас строка
    favorite: Joi.string().required(),
    // favorite: Joi.boolean(),
});

const updateHeroInformationSchema = Joi.object({
    nickname: Joi.string(),
    real_name: Joi.string(),
    origin_description: Joi.string(),
    superpowers: Joi.string(),
    catch_phrase: Joi.string(),
    // ОПЯТЬ ТАКИ РАЗОБРАТСЯ С КАРТИНКАМИ ПОКА ТЕКСТ
    // images: Joi.string(),
    favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

// const imgSchema = Joi.object({
//     images: {
//         // РАЗОБРАТСЯ КАК СДЕЛАТЬ КАРТИНКИ
//         type: String,
//         // required: [true, 'Set image for hero'],
//         // required: true,
//         // minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
//     },
//     // favorite: Joi.boolean().required(),
// });

const schemas = {
    addSchema,
    updateFavoriteSchema,
    updateHeroInformationSchema,
    // imgSchema,
};

// Миддлавара котоаря срабатывает на ошибке
herosSchema.post('save', handleSaveErrors);

const Hero = model('hero', herosSchema);

// const HeroImg = model('hero', imgSchema);

module.exports = { Hero, schemas };
