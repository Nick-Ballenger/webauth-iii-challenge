const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const AuthRouter =require('./auth/authRouter')
const UserRouter = require ('./../users/userRouter')

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api/auth', AuthRouter)
server.use('/api/user', UserRouter)


server.get('/', (req, res) => {
    res.send("Server Test");
  });

module.exports = server;
