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