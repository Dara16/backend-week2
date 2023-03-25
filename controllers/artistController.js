const Artist = require("../models/Artist");

// For '/artist' endpoints

const getArtists = async (req, res, next) => {
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

    try {
        const artists = await Artist.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artists)
    } catch (err) {
        next(err)
    }        
}

const postArtist = async (req, res, next) => {
    try {
        const artist = await Artist.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }
}

const deleteArtists = async (req, res, next) => {
    try {
        const artists = await Artist.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artists)
    } catch (err) {
        next(err)
    }

}

// For '/artist/:artistId

const getArtist = async (req, res, next) => {
    try {
        const artist = await Artist.findById(req.params.artistId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(artist)
    } catch (err) {
        next(err)
    }

}

const putArtist = async (req, res, next) => {
    try {
        const updatedArtist = await Artist.findByIdAndUpdate(req.params.artistId, req.body, {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedArtist)
    } catch (err) {
        next(err)
    }

}

const deleteArtist = async (req, res, next) => {
    try {
        const deletedArtist = await Artist.findByIdAndDelete(req.params.artistId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedArtist)
    } catch (err) {
        next(err)
    }

}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist
}