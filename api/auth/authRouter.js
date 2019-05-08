const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./../../users/userModel')
const secret = require('./../../config/dontLookAtMaSecrets')

module.exports=router