const { startServer } = require('./app');
const request = require('supertest');
let server;
let port;

beforeAll(async () => {
    port = 3001;  // Assign a different port or dynamically allocate a free port
    server = await startServer(port);  // Wait for the server to start before running tests
});

afterAll(async () => {
    await new Promise((resolve) => {
        server.close(resolve);  // Ensure that the server is fully closed before Jest exits
    });
});

describe('GET /', () => {
    it('should return a 200 status code', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);  // Check if status code is 200
    });

    it('should respond within 500ms', async () => {
        const start = Date.now();  // Record the start time
        const res = await request(server).get('/');
        const duration = Date.now() - start;  // Calculate the duration
        expect(duration).toBeLessThan(500);  // Check if response time is less than 500ms
    });
});

describe('GET /unknown', () => {
    it('should return a 404 status code for unknown route', async () => {
        const res = await request(server).get('/unknown');
        expect(res.statusCode).toBe(404);  // Expect 404 for unknown route
    });
});