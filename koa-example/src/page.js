const path = require('path');
const Koa = require('koa');
const views = require('koa-views');

const app = new Koa();

const render = views(path.resolve(__dirname, './views'), {
    map: {
        html: 'nunjucks'
    }
});

app.use(render);

app.use(async ctx => {
    ctx.response.status = 200;
    ctx.response.set('Content-Type', 'text/html; charset=utf-8');
    await ctx.render('index.html', {
        data: '测试2222'
    })
});

app.listen(3000, () => {
    console.log('The Server is listening at 3000!');
});
