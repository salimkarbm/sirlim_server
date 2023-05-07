const axios = require('axios');
const {req,res, next} = require('express')
const appPath = require('app-root-path');
const dotenv = require('dotenv');

dotenv.config({ path: `${appPath}/.env` });


exports.playlist = async (req, res, next) => {
    try{

      const authResponse = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET_ID}`).toString('base64')}`
            },
          });

          const accessToken = authResponse.data.access_token;

          const playlistResponse = await axios.get('https://api.spotify.com/v1/playlists/75p1JnFC5TYE0puFPJWu4C', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
          
          res.status(200).json({
            name:playlistResponse.data.name,
            description:playlistResponse.data.description,
            url:playlistResponse.data.href,
            id:playlistResponse.data.id
          });

    }catch(err){
       console.error(err);
    }
  
  };

