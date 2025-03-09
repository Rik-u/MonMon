require('dotenv').config();
console.log('Loaded PORT:', process.env.PORT);

const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT;

const accountsRoutes = require('./src/routes/accountsRoutes'); 

server.use(bodyParser.json());

server.use('/api/accounts', accountsRoutes);

server.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});