// For '/user' endpoints

const getUsers = (req, res, next) => {
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

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'You Hit Me! Show me all the Users!'})
}

const postUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `User added: ${req.body.userName}`})
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Users removed, Delete action completed!'})
}

//For '/user/:userId

const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the user with user Id of ${req.params.userId}`})
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the user with user Id of ${req.params.userId}`})
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setheader('Content-Type', 'application/json')
    .json({ message: `Delete the user with user Id of ${req.params.userId}`})
}

module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}