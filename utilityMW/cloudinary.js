require('dotenv').config();
const cloudinary = require('cloudinary').v2;
          
cloudinary.config({ 
  CLOUD_NAME: 'dehaqjte4', 
  API_KEY: '157841353577215', 
  API_SECRET: 'KXrqoq6cuLEeix5Wmizu-Af_-BQ' 
});

module.exports = cloudinary