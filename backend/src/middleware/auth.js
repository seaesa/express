const jwt = require('jsonwebtoken')
module.exports = {
  isUser: (req, res, next) => {
    console.log(req.cookies)
    const token = req.cookies?.jwt || req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token', user: null });
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = decoded;
      next();
    })
  }
}