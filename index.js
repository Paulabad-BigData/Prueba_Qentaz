const express = require('express')
const PORT = 8080
const app = express()
const axios = require('axios').default
const { filter } = require('lodash')
const Joi = require('joi')
const { number, string } = require('joi')
const characterRouters = require('./app/routes/character')
const itemsRouters = require('./app/routes/items')
const { json } = require('express/lib/response')


app.use(characterRouters)
app.use(itemsRouters)


app.listen(PORT, () => {
    console.log(`Running this application on the Port ${PORT}`);
})




/*axios.get(url)
.then((result) => {
    console.log(result.data);
}).catch((err) => {
    console.log(err);
});*/