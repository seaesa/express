class Auth {
  permisstion(req, res, next) {
    const headers = req.headers.authorization
    const token = headers && headers.split(' ')[1];
    if (!token) res.sendStatus(401)
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
      if (err) res.sendStatus(403)
      else {
        if (user.role === 'admin') next()
        else res.sendStatus(401)
      }
    });
  }
}
module.exports = new Auth()