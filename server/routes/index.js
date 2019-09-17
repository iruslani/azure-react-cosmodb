var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');

dotenv.config();
const apiKey = process.env.SPOONACULAR_API_KEY;
console.log(apiKey);

router.get('/message', function(req, res, next) {
  res.json('Welcome To Azure React CosmoDB');
});

module.exports = router;
