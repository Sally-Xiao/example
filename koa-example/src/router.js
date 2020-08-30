const Koa = require('koa');
const Router = require('koa-better-router');
const router = Router().loadMethods();

router.get('/', (ctx, next) => {
    ctx.body = '首页！';
});

const apiRouter = Router({
    prefix: '/api'
});

apiRouter.get('/list', (ctx, next) => {
    ctx.response.set('Context-Type', 'text/json; charset=utf-8;');
    ctx.body = {
        retcode: 0,
        data: {}
    };
});

const app = new Koa();
app.use(router.middleware());
app.use(apiRouter.middleware());

app.listen(3002, () => {
    console.log('The Server is listening at 3002!');
});