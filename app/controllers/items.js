const axios = require('axios')
const _ = require('lodash')
const Joi = require('joi')

const URL = ('https://rickandmortyapi.com/api/character')

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

// Esta es la forma correcta de utilizar los esquemas de joi
const schema = Joi.string().valid('Alive').required()

// GET by ID
exports.getData = async (req, res) => {
    const { req: { params: { id } } } = res

    try {
        /**
         * El API de R&M indica claramentes que los caracteres se buscan por ID en ruta y no por parametros
         * El codigo que tenias en esta seccion no funcionaba, ya que la variable id no existia
         */
        const response = await axios.get(`${URL}/${id}`)

        // La prueba requeria una validacion del status
        const { error } = schema.validate(response.data.status)
        if (!error) return res.json(parse(response.data))

        // La prueba requeria que mostraras una alerta si el personaje no tenia status "Alive"
        res.status(400)
        res.json({ message: "Character must be [Alive]" })
    }
    catch (err) {
        console.log(err)
    }
}
