const express = require('express')
const router = express.Router()
const controller = require('../controllers/character')

const path = 'character'

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router