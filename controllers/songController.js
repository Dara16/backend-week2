const Song = require('../models/Song')

// For '/song' endpoints

const getSongs = async (req, res, next) => {
    // query parameter

    const filter = {}
    const options = {}

    if (Object.keys(req.query).length) {
        const {
            songTitle,
            artist,
            genre,
            limit,
            sortByArtist          
        } = req.query
        
        if(songTitle) filter.songTitle = songTitle
        if(artist) filter.artist = artist
        if(genre) filter.genre = genre

        if(limit) options.limit = limit
        if(sortByArtist) options.sort = {artist: sortByArtist === 'asc' ? 1 : -1}

    }

    try {
        const songsPayload = await Song.find({}, filter, options)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songsPayload)
    } catch (err) {
        next(err)
    }

}

const postSong = async (req, res, next) => {
    try {
        const song = await Song.create(req.body)

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
        next(err)
    }

}

const deleteSongs = async (req, res, next) => {
    try {
        const songs = await Song.deleteMany()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(songs)
    } catch (err) {
        next(err)
    }

}


//For '/song/:songId

const getSong = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song)
    } catch (err) {
       next(err) 
    }

}

const putSong = async (req, res, next) => {
    try {
        const updatedSong = await Song.findByIdAndUpdate(req.params.songId, req.body, {new: true})

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedSong)
    } catch (err) {
        next(err)
    }

}

const deleteSong = async (req, res, next) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedSong)
    } catch (err) {
        next(err)
    }

}

const getSongRatings = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(song.ratings)
    } catch (err) {
        next(err)
    }
}

const postSongRating = async (req, res, next) => {
    try {
       const song = await Song.findById(req.params.songId)
       song.ratings.push(req.body)
       await song.save()

       res
       .status(201)
       .setHeader('Content-Type', 'application/json')
       .json(song.ratings)
    } catch (err) {
        next(err)    
    }
}

const deleteSongRatings = async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.songId)
        song.ratings = []
        await song.save()

        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            message: `Ratings deleted for song with id: ${req.params.songId}`
        })
    } catch (err) {
        next(err)
    }
}
module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong,
    getSongRatings,
    postSongRating,
    deleteSongRatings
}