const jwt = require('jsonwebtoken')
module.exports = {
  generateToken(id) {
    const token = jwt.sign({ id }, process.env.JWT_TOKEN_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_TOKEN_SECRET);
    return { token, refreshToken }
  }
}