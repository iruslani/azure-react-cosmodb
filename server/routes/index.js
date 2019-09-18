var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
const fetch = require('node-fetch');

// Get spoonacular apiKey
dotenv.config();
const apiKey = process.env.SPOONACULAR_API_KEY;
console.log(apiKey);

router.get('/meatball', (req, res) => {
  const keyword = 'meatball';
  const url = `https://api.spoonacular.com/recipes/search?query=${keyword}&apiKey=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      res.send({ data });
    })
    .catch(err => {
      res.redirect('/error');
    });
});

router.get('/message', (req, res, next) => {
  res.json('Welcome To Azure React CosmoDB');
});

module.exports = router;
