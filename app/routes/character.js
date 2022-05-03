const express = require('express')
const controller = require('../controllers/character')
const router = express.Router()
const path = 'character'

router.get(
    `/${path}`,
    controller.getData
)

module.exports = router