const express = require('express')
const controller = require('../controllers')

const router = express.Router()

router.post('/user', controller.usersController.createUser)
router.get('/users', controller.usersController.getAllUsers)
router.get('/user/:dni', controller.usersController.getUser)
router.put('/user/:dni', controller.usersController.updateUser)
router.delete('/user/:dni', controller.usersController.deleteUser)

module.exports= router