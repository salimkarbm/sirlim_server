const { Router } = require('express');

const spotifyRoute = require('./Spotify/spotify.routes');

const router = Router();



//spotify routes
router.use(spotifyRoute);

module.exports = router;