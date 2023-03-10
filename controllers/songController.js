// For '/song' endpoints

const getSongs = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'You Hit Me! Show me all the Songs!'})
}

const postSong = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Song added: ${req.body.songName}`})
}

const deleteSongs = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Songs removed, Delete action completed!'})
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs
}