const express = require('express')
const PORT = 8080
const app = express()
const userRouters = require('./app/routes/user')
const itemsRouters = require('./app/routes/items')

app.use(userRouters)
app.use(itemsRouters)

app.listen(PORT, ()=>{
    console.log('Running this application on the Port ${PORT}');
})


