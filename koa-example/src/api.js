const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.response.set('content-type', "text/json; charset=utf-8;");
    ctx.body = {
        code: 0,
        data: {
            a: 2
        }
    };
});

app.listen(3001, () => {
    console.log('The Server is listening at 3001!');
});