var koaRouter = require('koa-router');
var koaBody  = require('koa-body');//require('koa-better-body')();
var fs = require('fs');

var nameDictionary = {};
var moveList = {};

var router = koaRouter({ prefix: '/pokemon' });

router.post('/getPokeList', koaBody , (ctx, next) => {
    //ctx.body = 'about page';
    console.log(this);
    console.log(this.request.body);
    if (Object.keys(nameDictionary).length === 0) {
        fs.readFile('./public/pokeData/pokemonName.json', 'utf8', (err, data) => {
            if (err) throw err;
            nameDictionary = JSON.parse(data);
            ctx.body = (nameDictionary);
            ctx.status=200;
        })
    } else {
        ctx.body = (nameDictionary);
        ctx.status=200;
    }

});
/*
router.post('/getPokeList', koaBody , (ctx, next) => {
    //ctx.body = 'about page';

    console.log(this.request.body);
    if (Object.keys(nameDictionary).length === 0) {
        fs.readFile('./public/pokeData/pokemonName.json', 'utf8', (err, data) => {
            if (err) throw err;
            nameDictionary = JSON.parse(data);
            ctx.body = (nameDictionary);
            ctx.status=200;
        })
    } else {
        ctx.body = (nameDictionary);
        ctx.status=200;
    }

});
*/
module.exports = router;