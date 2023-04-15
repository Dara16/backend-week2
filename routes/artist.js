const express = require('express');
const router = express.Router();
const {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    putArtist,
    deleteArtist,
    postArtistImage

} = require('../controllers/artistController');
const protectedRoute = require('../middlewares/auth')

router.route('/')
    .get(getArtists)
    .post(protectedRoute, postArtist)
    .delete(protectedRoute, deleteArtists)

router.route('/:artistId')
    .get(getArtist)
    .put(protectedRoute, putArtist)
    .delete(protectedRoute, deleteArtist)

router.route('/:artistId/image')
    .post(protectedRoute, postArtistImage)

module.exports = router;