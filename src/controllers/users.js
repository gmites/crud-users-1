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

const getUser = async(req, res)=>{
    const dni = req.params.dni
    const data = await userModel.findOne({ dni: dni })
    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response) 
}

const updateUser = async(req,res)=>{
   const dni = req.params.dni
    const newData = req.body
    const user = await userModel.findOne({ dni: dni })
    console.log('userdelFind', user)
    user.name = newData.name
    user.age = newData.age
    user.dni = newData.dni
    const data = await user.save()
    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response)
    
    /*const id = req.params.dni
    const newData = req.body
    const user = await userModel.findById(id)
    console.log('userdelFind', user)
    user.name = newData.name
    user.age = newData.age
    user.dni = newData.dni
    console.log('luegoMod', user)
    const data = await user.save()
    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response) */
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
