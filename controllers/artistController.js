// For '/artist' endpoints

const getArtists = (req, res, next) => {
        // query parameter
        if (Object.keys(req.query).length) {
            const {
                firstName,
                lastName,
                genre            
            } = req.query
            
            const filter = [];
            if(firstName) filter.push(firstName)
            if(lastName) filter.push(lastName)
            if(genre) filter.push(genre)
    
            for(const query of filter) {
                console.log(`Searching artist by ${query}`)
            }
        }
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

// For '/artist/:artistId

const getArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me artist with artist Id of ${req.params.artistId}`})
}

const putArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated artist with artist Id of ${req.params.artistId}`})
}

const deleteArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted artist with artist Id of ${req.params.artistId}`})
}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist
}