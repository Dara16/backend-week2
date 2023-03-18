const express = require('express');
const router = express.Router();
const {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist

} = require('../controllers/artistController');

router.route('/')
    .get(getArtists)
    .post(postArtist)
    .delete(deleteArtists)

router.route('/:artistId')
    .get(getArtist)
    .put(putArtist)
    .delete(deleteArtist)

module.exports = router;