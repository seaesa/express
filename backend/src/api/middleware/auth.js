const jwt = require('jsonwebtoken');

module.exports = {
  authenUser(req, res, next) {
    const headers = req.headers.authorization
    const token = headers && headers.split(' ')[1];
    if (!token) res.sendStatus(401)
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, decoded) => {
      if (err) res.sendStatus(403)
      else {
        req.user = decoded
        next()
      }
    });
  }
}