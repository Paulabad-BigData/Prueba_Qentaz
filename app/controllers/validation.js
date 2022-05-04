/**
 * Nunca utilizaste este codigo
 */
const Joi = require('joi')

function validate(data, schema) {
    /**
     * En caso lo utilices, tienes que contemplar que la validacion no solo falla
     * Es decir, debes evaluar si tiene una respuesta exitosa
     * en el caso de JOI la forma seria la siguiente { value, error }
     * si existe error retornar error
     * si NO existe error retonar value
     */
    const { error } = joi.validate(data, schema);
    return error;
}

module.exports = validate