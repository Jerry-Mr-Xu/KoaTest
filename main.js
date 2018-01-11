'use strict';

let Koa = require('koa');

let app = new Koa();

app.use(async function (context, next) {
    await next();

    context.response.type = 'text/html';
    context.response.body = '<h1>Hello Koa2.0.0!</h1>';
});

app.listen(3000);