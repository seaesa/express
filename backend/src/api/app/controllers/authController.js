// module
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const unidecode = require('unidecode');
// middleware
const { generateToken } = require('../../helpers/token');
const response = require('../../../config/response');

// model
const userModel = require('../models/userModel');

class authController {
  // @POST : /auth/token
  refreshToken(req, res) {
    const { token } = req.body;
    jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) res.sendStatus(403)
      const { token: newToken, refreshToken: newRefeshToken } = generateToken(user.id)
      response(req, res, { token: newToken, refreshToken: newRefeshToken })
    })
  }
  // @POST : /auth/login
  async login(req, res) {
    const { password, username } = req.body;
    const user = await userModel.findOne({ username });
    if (user) {
      const compare = bcrypt.compareSync(password, user.password);
      if (compare) {
        req.user = user;
        const { token, refreshToken } = generateToken(user.id)
        response(req, res, { user, token, refreshToken })
      }
      else response(req, res, { message: 'mật khẩu không chính xác' })
    } else response(req, res, { message: 'tên đăng nhập không tồn tại' })
  }
  // @POST : /auth/register
  async register(req, res) {
    const { username, email, password, image } = req.body;
    let user = await userModel.findOne({ username });
    if (user) response(req, res, { message: 'tên đăng nhập đã tồn tại' });
    else {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt);
      user = await userModel.create({ username, email, password: hash, avatar: image });
      req.user = user;
      const { token, refreshToken } = generateToken(user.id)
      response(req, res, { user, token, refreshToken })
    }
  }
  // @POST : /auth/google
  async google(req, res) {
    const { username, displayName, email, image, phone } = req.body;
    const newUsername = unidecode(username).toLocaleLowerCase().split(' ').join('');
    const user = await userModel.findOne({ username: newUsername, email })
    if (user) {
      const { token, refreshToken } = generateToken(user.id)
      req.user = user;
      response(req, res, { user, token, refreshToken })
    } else {
      const user = await userModel.create({ username: newUsername, displayName, email, avatar: image, phone })
      req.user = user;
      const { token, refreshToken } = generateToken(user.id)
      response(req, res, { user, token, refreshToken })
    }
  }
  // @POST : /auth/facebook
  async facebook(req, res) {
    const { username, displayName, email, image, phone } = req.body;
    const newUsername = unidecode(username).toLocaleLowerCase().split(' ').join('');
    const user = await userModel.findOne({ username: newUsername, email })
    if (user) {
      const { token, refreshToken } = generateToken(user.id)
      req.user = user;
      response(req, res, { user, token, refreshToken })
    } else {
      const user = await userModel.create({ username: newUsername, displayName, email, avatar: image, phone })
      req.user = user;
      const { token, refreshToken } = generateToken(user.id)
      response(req, res, { user, token, refreshToken })
    }
  }
  // @POST: /auth/logout
  async logOut(req, res) {
    req.user = null;
    response(req, res, { user: null })
  }
}

module.exports = new authController()
