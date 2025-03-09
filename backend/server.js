const express = require('express');
const server = express();
const port = 3001;

server.get('/', (req, res) => {
    res.send('Hello from Backend');
});

server.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});