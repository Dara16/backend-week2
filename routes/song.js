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
const protectedRoute = require('../middlewares/auth')

router.route('/')
    .get(getSongs)
    .post(protectedRoute, postSong)
    .delete(protectedRoute, deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(protectedRoute, putSong)
    .delete(protectedRoute, deleteSong)

router.route('/:songId/ratings')
    .get(getSongRatings)
    .post(protectedRoute, postSongRating)
    .delete(protectedRoute, deleteSongRatings)

router.route('/:songId/ratings/:ratingId')
    .get(getSongRating)
    .put(protectedRoute, updateSongRating)
    .delete(protectedRoute, deleteSongRating)

module.exports = router;