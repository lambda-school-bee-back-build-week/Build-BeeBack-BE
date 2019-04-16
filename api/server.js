require('dotenv').config(); // load .env variables
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const loginRoute = require('../routers/login/login');
const registerRouter = require('../routers/register/register');
const userRouter = require('../routers/users/users');
const auth = require('../routers/middleware/auth')
const neonic2 = require('../routers/neonic2/neonic2');

const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => res.send("<h1>We'll Bee Back</h1>"));
server.use('/api/login', loginRoute);
server.use('/api/register', registerRouter);
server.use('/api/users', auth, userRouter);
server.use('/api/neonic2', neonic2);

module.exports = server;