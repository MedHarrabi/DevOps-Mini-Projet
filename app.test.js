// app.test.js
const app = require('./app');
const request = require('supertest');

describe('GET /', () => {
    it('should return Hello World from index.html', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);  // Check for successful response
        expect(res.text).toContain('Hello World!');  // Check for "Hello World!" in the response body
    });
});