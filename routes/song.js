const express = require('express');
const router = express.Router();
const {
    getSongs,
    postSong,
    deleteSongs,
    getSong,
    putSong,
    deleteSong
} = require('../controllers/songController');

router.route('/')
    .get(getSongs)
    .post(postSong)
    .delete(deleteSongs)

router.route('/:songId')
    .get(getSong)
    .put(putSong)
    .delete(deleteSong)

module.exports = router;