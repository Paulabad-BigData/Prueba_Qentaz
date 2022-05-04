const express = require('express')
const router = express.Router()
const controller = require('../controllers/items')

const path = 'items'

// Esta es la forma correcta de solicitar valores en ruta
router.get(
    `/${path}/:id`,
    controller.getData
)

module.exports = router