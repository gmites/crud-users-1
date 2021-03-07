const express = require('express')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/crud-users-1')
.then((db)=>{
    console.log("Connected")
})
.catch((error)=>{
    console.log("Error")
})

const app = express()
const routes = require('./routes')

//Settings
app.set('port', 3500)

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use('/', routes.usersRoutes)


app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
})
