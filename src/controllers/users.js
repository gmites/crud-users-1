const {userModel} = require('../models')

const createUser = async(req, res)=>{
    const newUser = new userModel(req.body)
    const regexDni = /^[A-Z]{3}[0-9]{2}[a-z]{1}[0-9]{1}$/
    const dni = req.body.dni
    const isValidDni = regexDni.test(dni)
    if(isValidDni){
        const data = await newUser.save()
        const response = {
            status: 'Success',
            data: {
                user:[data]
            }
        }
        res.json(response)
    }else{
        res.send('Ingrese un dni válido.')
    }  
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
    const regexDni = /^[A-Z]{3}[0-9]{2}[a-z]{1}[0-9]{1}$/
    const isValidDni = regexDni.test(req.body.dni)
    if(isValidDni){
        const user = await userModel.findOne({ dni: dni })
        user.name = newData.name
        user.age = newData.age
        user.dni = newData.dni
        user.deleted = newData.deleted
        const data = await user.save()
        const response = {
            status: 'Success',
            data: {
                user:[data]
            }
        }
        res.json(response)
    }else{
        res.send('Ingrese un dni válido.')
    }
}

const deleteUser = async(req, res)=>{
    const dni = req.params.dni
    const user = await userModel.findOne({ dni: dni })
    user.deleted = true
    const data = await user.save()
    const response = {
        status: 'Success',
        data: {
            user:[]
        }
    }
    res.json(response) 
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
