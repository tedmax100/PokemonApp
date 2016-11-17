var express = require('express');
var router = express.Router();
var fs = require('fs');
var log = require('../../Debugger.js');
//var sessionManager = require('./sessionManager.js');
/* GET pokemon users listing. */
var nameDictionary = {};
var moveList = {};
router.post('/getPokeList' , function (req, res, next) {
  //step 1. check user is login online, but we have not implement it now.
  //step 2. cache data when first load.
  var mid=""; var lang="CHT";
  if(req.body != null || !req.body){
     log.getLogger().info('req body : '+ JSON.stringify(req.body));
     var tempBody = req.body.replace(/"/gi, '').split('&');
     if(tempBody.length > 1){
       mid = tempBody[0];
       lang = tempBody[1];
     }else{
       mid = tempBody[0];
     }
  }
  log.getLogger().info('mid : '+ mid + ', lang : ' + lang);
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

router.get('/getLogs', function(req,res, next){
  fs.readdir('./', (err, data) =>{
    if(err) throw err;
      res.send(data);
  })
});
router.get('/readLog', function(req,res, next){
  var filename = req.query.filename;
  fs.readFile('./'+filename,'utf8', (err, data) =>{
    if(err) throw err;
      res.send(data);
  })
});
module.exports = router;