const jwt = require('jsonwebtoken');

const secrets = require('./../../config/dontLookAtMaSecrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ you: 'are not a winner' });
    } 
    
    else {
      req.decodedToken = decodedToken;

      next();
    }
  });
};