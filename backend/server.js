const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 3001;

const accountsRoutes = require('./routes/accounts'); 

server.use(bodyParser.json());

server.use('/accounts', accountsRoutes);

server.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});