const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./../../users/userModel')
const secret = require('./../../config/dontLookAtMaSecrets')

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 8); 
    user.password = hash;
  
    Users.add(user)
      
    .then(saved => {
        res.status(201).json(saved);
      })
      
      .catch(error => {
        res.status(500).json(error);
      });
  });


  router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user); 
          res.status(200).json({
            message: `Hello ${user.username}!`,
            token,
          });
        } else {
          res.status(401).json({ message: 'Incorrect login information, please try your username and password again.' });
        }
      })
      .catch(error => {
        console.log(error)
        res.status(500).json(error);
      });
  });
  
  function generateToken(user) {
    const payload = {
      subject: user.id, 
      username: user.username,
    };
    const options = {
      expiresIn: '22h',
    };
  
    return jwt.sign(payload, secret.jwtSecret, options);
  }




module.exports=router