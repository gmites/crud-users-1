const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    age: Number,
    dni: String
})

const user = mongoose.model('users', userSchema)

module.exports = user