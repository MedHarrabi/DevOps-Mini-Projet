const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server and export it for use in the test
const startServer = (_port) => {
    return app.listen(_port, '0.0.0.0', () => {
        console.log('Server is running on http://localhost:3000');
    });
};
startServer(3000)
module.exports = { app, startServer };
