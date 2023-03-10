// For '/artist' endpoints

const getArtists = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'You Hit Me! Show me all the Artists!'})
}

const postArtist = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Artist added: ${req.body.artistName}`})
}

const deleteArtists = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Artists removed, Delete action completed!'})
}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists
}