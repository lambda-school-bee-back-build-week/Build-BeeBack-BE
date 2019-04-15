const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const registerRouter = require('../routers/register/register');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/register', registerRouter);

server.get('/', (req, res) => res.send("<h1>We'll Bee Back</h1>"));

module.exports = server;