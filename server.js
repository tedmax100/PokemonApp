const Koa = require('koa');
const app = new Koa();
var co = require('co');

var router = require('koa-router')();
//var koaBody  = require('koa-body');
var koaBody = require('koa-multer');
//var home = require('./routes/home');

//app.use(home.routes());

var poke = require('./routes/pokemon/pokemon');

app.use(poke.routes());

app.use(co.wrap(function* (ctx, next) {
  const start = new Date();
  yield next();
  const ms = new Date() - start;
  console.log(`time : ${ctx.method} ${ctx.url} - ${ms}ms`);
}));
app.use(co.wrap(function* (ctx) {
  console.log('hi');
}));


app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(koaBody());

app.listen(3000);
