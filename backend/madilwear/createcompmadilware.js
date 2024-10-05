const jwt = require('jsonwebtoken');
const secret = "abCdefGhijKlmNopQrsTuVwXyZ123456";


function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
      return res.status(401).json({ message: "You are unauthorized." });
  }

  jwt.verify(token, secret, (err, user) => {
      if (err) {
          return res.status(403).json({ message: "Your token is not valid." });
      }

      req.userId = user.user.id;// This should match the token payload
      next();
  });
}

module.exports = authenticateToken;
