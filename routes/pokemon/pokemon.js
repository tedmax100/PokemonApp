<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var fs = require('fs');
//var sessionManager = require('./sessionManager.js');
/* GET pokemon users listing. */
var nameDictionary = {};
var moveList = {};
router.post('/getPokeList' , function (req, res, next) {
  //step 1. check user is login online, but we have not implement it now.
  //step 2. cache data when first load.
  var mid="";
  if(req.body != null || !req.body){
   //console.log(req.body);
     mid = req.body;
  }

  var lang = 'eng';
  
  if (Object.keys(nameDictionary).length === 0) {
    fs.readFile('./public/pokeData/pokemonName.json', 'utf8', (err, data) => {
      if (err) throw err;
      nameDictionary = JSON.parse(data);
      res.json(nameDictionary);
    })
  } else {
    res.json(nameDictionary);
  }
});

router.get('/getMoveList', function (req, res, next) {
  //step 1. check user is login online, but we have not implement it now.
  //step 2. cache data when first load.
  if (Object.keys(moveList).length === 0) {
    fs.readFile('./public/pokeData/moveList.json', 'utf8', (err, data) => {
      if (err) throw err;
      moveList = JSON.parse(data);
      res.json(moveList);
    })
  } else {
    res.json(moveList);
  }
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();
var fs = require('fs');
//var sessionManager = require('./sessionManager.js');
/* GET pokemon users listing. */
var nameDictionary = {};
var moveList = {};
router.post('/getPokeList' , function (req, res, next) {
  //step 1. check user is login online, but we have not implement it now.
  //step 2. cache data when first load.
  console.log(req.body);
  var mid = 12345;
  var lang = 'eng';

  if (Object.keys(nameDictionary).length === 0) {
    fs.readFile('./public/pokeData/pokemonName.json', 'utf8', (err, data) => {
      if (err) throw err;
      nameDictionary = JSON.parse(data);
      res.json(nameDictionary);
    })
  } else {
    res.json(nameDictionary);
  }
});

router.get('/getMoveList', function (req, res, next) {
  //step 1. check user is login online, but we have not implement it now.
  //step 2. cache data when first load.
  if (Object.keys(moveList).length === 0) {
    fs.readFile('./public/pokeData/moveList.json', 'utf8', (err, data) => {
      if (err) throw err;
      moveList = JSON.parse(data);
      res.json(moveList);
    })
  } else {
    res.json(moveList);
  }
});

module.exports = router;
>>>>>>> 3a36394663353e83472748cbb738151114215c03
