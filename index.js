const express = require('express')

const characterRouters = require('./app/routes/character')
const itemsRouters = require('./app/routes/items')

const PORT = 8080
const app = express()

app.use(characterRouters)
app.use(itemsRouters)

app.listen(PORT, () => {
    console.log(`Running this application on the Port ${PORT}`);
})