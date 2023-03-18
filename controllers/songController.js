// For '/song' endpoints

const getSongs = (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length) {
        const {
            songTitle,
            artist,
            genre            
        } = req.query
        
        const filter = [];
        if(songTitle) filter.push(songTitle)
        if(artist) filter.push(artist)
        if(genre) filter.push(genre)

        for(const query of filter) {
            console.log(`Searching song by ${query}`)
        }
    }

    
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


//For '/song/:songId

const getSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the song with song Id of ${req.params.songId}`})
}

const putSong = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the song with song Id of ${req.params.songId}`})
}

const deleteSong = (req, res, next) => {
    res
    .status(200)
    .setheader('Content-Type', 'application/json')
    .json({ message: `Delete the song with song Id of ${req.params.songId}`})
}

module.exports = {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong
}