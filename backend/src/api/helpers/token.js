const jwt = require('jsonwebtoken');

module.exports = {
  generateToken(user) {
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_TOKEN_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_REFRESH_TOKEN_SECRET);
    return { token, refreshToken }
  }
}