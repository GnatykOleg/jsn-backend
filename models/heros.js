const { Schema, model } = require('mongoose');
const { handleSaveErrors } = require('../helpers');

const Joi = require('joi');

const mongoosePaginate = require('mongoose-paginate-v2');

const herosSchema = new Schema(
    {
        nickname: {
            type: String,
            required: [true, 'Set nickname for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        real_name: {
            type: String,
            required: [true, 'Set real name for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        origin_description: {
            type: String,
            required: [true, 'Set description for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        superpowers: {
            type: String,
            required: [true, 'Set superpowers for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        catch_phrase: {
            type: String,
            required: [true, 'Set phrase for hero'],
            minLength: [3, 'Must be at least 3 letters, your value: {VALUE}'],
        },
        Images: {
            // type: Array,
            // required: true,
        },
    },

    { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
    nickname: Joi.string().required(),
    real_name: Joi.string().required(),
    origin_description: Joi.string().required(),
    superpowers: Joi.string().required(),
    catch_phrase: Joi.string().required(),
});

const updateHeroInformationSchema = Joi.object({
    nickname: Joi.string(),
    real_name: Joi.string(),
    origin_description: Joi.string(),
    superpowers: Joi.string(),
    catch_phrase: Joi.string(),
});

// const updateFavoriteSchema = Joi.object({
//     favorite: Joi.string().required(),
// });

const schemas = {
    addSchema,
    // updateFavoriteSchema,
    updateHeroInformationSchema,
};

// Миддлавара котоаря срабатывает на ошибке
herosSchema.post('save', handleSaveErrors);

herosSchema.plugin(mongoosePaginate);

const Hero = model('hero', herosSchema);

module.exports = { Hero, schemas };
