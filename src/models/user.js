const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:String,
    age: Number,
    dni: String,
    deleted: Boolean
})

const user = mongoose.model('users', userSchema)

module.exports = user