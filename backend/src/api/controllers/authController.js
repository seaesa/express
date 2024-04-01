// module
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// middleware
const { generateToken } = require('../helpers/token');
const response = require('../../config/response');

// model
const userModel = require('../models/userModel');

class authController {
  // @POST : /auth/token
  refreshToken(req, res) {
    const { token } = req.body;
    jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) res.sendStatus(403)
      const { token: newToken, refreshToken: newRefeshToken } = generateToken(user.id)
      response(res, { token: newToken, refreshToken: newRefeshToken })
    })
  }
  // @POST : /auth/login
  async login(req, res) {
    const { password, ...info } = req.body;
    const user = await userModel.findOne({ ...info });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const { token, refeshToken } = generateToken(user.id)
        response(res, { user, token, refeshToken })
      }
      else response(res, { message: 'mật khẩu không chính xác' })
    } else response(res, { message: 'tên đăng nhập không tồn tại' })
  }
  // @POST : /auth/register
  async register(req, res) {
    const { username, email, password } = req.body;
    let user = await userModel.findOne({ username });
    if (user) response(res, { message: 'tên đăng nhập đã tồn tại' });
    else {
      const hash = await bcrypt.hash(password, 10);
      user = await userModel.create({ username, email, password: hash });
      const { token, refeshToken } = generateToken(user.id)
      response(res, { user, token, refeshToken })
    }
  }
}

module.exports = new authController()