const getAllUsers = (req, res)=>{
    res.send('All Users') 
}

const getUser = (req, res)=>{
    res.send('Get User') 
}

const createUser = (req, res)=>{
    res.send('Create User') 
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
