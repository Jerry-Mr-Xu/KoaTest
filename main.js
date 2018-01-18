'use strict';

let Koa = require('koa');

let app = new Koa();

app.use(async function (context, next) {
    console.log('First use before next()');
    await next();
    console.log('First use after next()');

    let name = context.request.query.name || 'world';
    context.response.type = 'text/html';
    context.response.body = `<h1>Hello, ${name}!</h1>`;
});

app.use(async function (context, next) {
    console.log('Second use before next()');
    await next();
    console.log('Second use after next()');
});

app.use(async context => {
    console.log('End');
});

module.exports = app;