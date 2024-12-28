// app.test.js
const app = require('./app');
const request = require('supertest');

describe('GET /', () => {
    it('should return Hello World!', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello World!');
    });
});