const express = require('express')
const app = express()
const URL = ('https://rickandmortyapi.com/api/character')
const _ = require('lodash')
const { filter } = require('lodash')
const axios = require('axios').default
const Joi = require('joi')
const { number, string } = require('joi')

// GET ALL

exports.getData = async (req, res) => {
    try {
        const response = await axios.get(URL)
        res.json(response.data.results)
    }
    catch (err) {
        console.log(err)
    }
}




