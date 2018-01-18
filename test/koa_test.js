'use strict';

const
    request = require('supertest'),
    main = require('../main');

describe('#main.js', () => {
    let server = main.listen(9900);

    describe('#server', () => {
        it('#GET /', async () => {
            let result = await request(server).get('/').expect('Content-Type', /text\/html/).expect(200, '<h1>Hello, world!</h1>');
        });

        it('#GET ?name=Jerry', async () => {
            let result = await request(server).get('?name=Jerry').expect('Content-Type', /text\/html/).expect(200, '<h1>Hello, Jerry!</h1>');
        });
    });
});