const URL = ('https://rickandmortyapi.com/api/character')
const _ = require('lodash')
const axios = require('axios').default
const Joi = require('joi')

// Seleccionar unicamente los campos requeridos en la prueba
const parse = (result) => ({
    id: _.get(result, 'id'),
    name: _.get(result, 'name'),
    status: _.get(result, 'status'),
    species: _.get(result, 'species'),
    gender: _.get(result, 'gender'),
    origin: _.get(result, 'origin'),
    image: _.get(result, 'image'),
    episodeSize: _.size(_.get(result, 'episode')),
})

// GET ALL
exports.getData = async (req, res) => {
    try {
        const response = await axios.get(URL)
        const { data: { results } } = response

        // La prueba indica que solo algunos campos son requeridos en la respuesta, no el objeto original
        const obj = _.map(results, result => parse(result))
        res.json(obj)
    }
    catch (err) {
        console.log(err)
    }
}




