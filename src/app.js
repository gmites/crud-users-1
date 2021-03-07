const express = require('express')
const mongoose = require('mongoose')

const app = express()
const routes = require('./routes')

//Settings
app.set('port', 3500)

//Middlewares


//Routes
app.use('/', routes.usersRoutes)


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})
