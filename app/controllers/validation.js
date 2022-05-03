const Joi = require('joi')

function validate(data, schema) {
    const { error } = joi.validate(data, schema);
    return error;
}

module.exports = validate