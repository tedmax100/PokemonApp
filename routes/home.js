var koaRouter = require('koa-router');

var router = koaRouter({prefix:'/'});
router.post('about', (ctx, next) => {
    ctx.req.on('data', function(data){

        console.log(data);
    })
});

module.exports = router;