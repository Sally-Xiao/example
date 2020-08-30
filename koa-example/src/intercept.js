const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('请求前', new Date().getTime()); // 请求前
    await next();
    console.log('响应后', new Date().getTime()); // 响应后
});

const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time);
    })
};

app.use(async (ctx) => {
    await sleep(2000);
    ctx.body = 'Hello World!';
})

app.listen(3003, () => {
    console.log('The Server is listening at 3003!');
});