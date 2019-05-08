const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const AuthRouter =require('./auth/authRouter.js')

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api/auth', AuthRouter)


server.get('/', (req, res) => {
    res.send("Server Test");
  });

module.exports = server;
