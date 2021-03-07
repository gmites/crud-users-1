const express = require('express')
const controller = require('../controllers')

const router = express.Router()

router.post('/user', controller.usersController.createUser)
router.get('/users', controller.usersController.getAllUsers)
router.get('/user', controller.usersController.getUser)
router.put('/user', controller.usersController.updateUser)
router.delete('/user', controller.usersController.deleteUser)

module.exports= router