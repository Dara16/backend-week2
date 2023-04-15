const User = require('../models/User')

// For '/user' endpoints

const getUsers = async (req, res, next) => {
    // query parameter

    const filter = {}
    const options = {}

    if (Object.keys(req.query).length) {
        const {
            userName,
            gender,
            limit,
            sortByAge,
            age           
        } = req.query
        
        if(userName) filter.userName = userName
        if(gender) filter.gender = gender
        if(age) filter.age = age

        if(limit) options.limit = limit
        if(sortByAge) options.sort = {age: sortByAge === 'asc' ? 1 : -1}
 
    }
    try {
        const usersPayload = await User.find({}, filter, options)

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
        sendTokenResponse(user, 201, res)

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

const sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken()

    const options = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    
    res
    .status(statusCode)
    .cookie('token', token, options)
    .json(token)
}

const login = async (req, res, next) => {
    const{
        email,
        password
    } = req.body

    if(!email || !password) throw new Error("Please provide an email and password")

    const user = await User.findOne({ email }).select('+password')

    if(!user) throw new Error("Invalid credentials")

    const isMatch = await user.matchPassword(password)

    if(!isMatch) throw new Error("Invalid credentials")

    sendTokenResponse(user, 200, res)

}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser,
    login
}