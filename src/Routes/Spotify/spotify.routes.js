const{ Router } = require('express');

const router = Router();

const spotifyController = require('../../Controllers/spotify.controller');


router.get('/spotify/playlist',  spotifyController.playlist);


module.exports = router;