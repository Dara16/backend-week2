const express = require('express');
const router = express.Router();
const {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong,
    getSongRatings,
    postSongRating,
    deleteSongRatings,
    getSongRating,
    updateSongRating,
    deleteSongRating
} = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(postSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(putSong)
    .delete(deleteSong)

router.route('/:songId/ratings')
    .get(getSongRatings)
    .post(postSongRating)
    .delete(deleteSongRatings)

router.route('/:songId/ratings/:ratingId')
    .get(getSongRating)
    .put(updateSongRating)
    .delete(deleteSongRating)

module.exports = router;