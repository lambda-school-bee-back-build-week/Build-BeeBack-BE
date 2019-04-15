require('dotenv').config(); // load .env variables
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const loginRoute = require('../routers/login/login');

const server = express();

const registerRouter = require('../routers/register/register');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/register', registerRouter);

server.get('/', (req, res) => res.send("<h1>We'll Bee Back</h1>"));
server.use('/api/login', loginRoute);

module.exports = server;