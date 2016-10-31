var express = require('express');
var router = express.Router();
var fs = require('fs');
//var sessionManager = require('./sessionManager.js');
/* GET pokemon users listing. */
var nameDictionary = {};

router.get('/getPokeList', function(req, res, next) {
  //step 1. check user is login online, but we have not implement it now.
  //step 2. cache data when first load.
  if(Object.keys(nameDictionary).length === 0){
    fs.readFile('./public/pokeData/pokemonName.json', 'utf8', (err, data) =>{
      if(err) throw err;
      nameDictionary = JSON.parse(data);
      res.json(nameDictionary);
    })
  }else{
    res.json(nameDictionary);
  }
});

module.exports = router;