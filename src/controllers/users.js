const {userModel} = require('../models')

const createUser = async(req, res)=>{
    const newUser = new userModel(req.body)
    const data = await newUser.save()
    const response = {
        status: 'Success',
        data: {
            users:[data]
        }
    }
    res.json(response)
}

const getAllUsers = async(req, res)=>{
    const data = await userModel.find()
    const response = {
        status: 'Success',
        data: {
            users:[data]
        }
    }
    res.json(response)
}

const getUser = (req, res)=>{
    res.send('Get User') 
}

const updateUser = (req, res)=>{
    res.send('Update User') 
}

const deleteUser = (req, res)=>{
    res.send('Delete User') 
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
