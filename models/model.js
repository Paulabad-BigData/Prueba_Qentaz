/**
 * Nunca utilizaste este codigo
 * Mongose es un controlador de base de datos en mongo
 * Este codigo no tiene funcion ya que no se lee ni se almacena informacion en ninguna base de datos
 */
const mongose = require('mongose')
const Schema = mongose.Schema

const ModelSchema = Schema({
    id: number,
    name: String,
    status: String,
    species: String,
    gender: String,
    origin: {
        name: String,
        url: String
    },
    image: String,
    episodeSize: string
})

module.exports = ModelSchema