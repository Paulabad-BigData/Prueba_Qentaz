/**
 * Nunca utilizaste este codigo
 */
const Joi = require('joi')

const characterIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const nameSchema =  joi.string().max(80);
const statusSchema =  joi.string().max(80);
const speciesSchema =  joi.string().max(80);
const genderSchema =  joi.string().max(80);
const originSchema =  joi.string().max(80);
const imageSchema =  joi.string().max(80);
const episodeSizeSchema =  joi.string().max(80);

module.exports = charactersIdShema