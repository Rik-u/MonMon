require('dotenv').config();
console.log('Loaded PORT:', process.env.PORT);
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT;

const accountsRoutes = require('./src/routes/accountsRoutes'); 

server.use(cors({
    origin: 'http://localhost:3000', // Only allows requests from frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type'] // Allowed headers
}));

server.use(bodyParser.json());

server.use('/api/accounts', accountsRoutes);

server.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});