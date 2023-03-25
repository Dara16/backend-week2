const User = require('../models/User')

// For '/user' endpoints

const getUsers = async (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length) {
        const {
            userName,
            gender            
        } = req.query
        
        const filter = [];
        if(userName) filter.push(userName)
        if(gender) filter.push(gender)

        for(const query of filter) {
            console.log(`Searching user by ${query}`)
        }
    }
    try {
        const usersPayload = await User.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(usersPayload) 
    } catch (err) {
        next(err)
    }

}

const postUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }

}

const deleteUsers = async (req, res, next) => {
    try {
        const users = await User.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(users)
    } catch (err) {
        next(err)
    }

}

//For '/user/:userId

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }

}

const putUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedUser)
    } catch (err) {
        next(err)
    }

}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUser)
    } catch (err) {
        next(err)
    }

}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}