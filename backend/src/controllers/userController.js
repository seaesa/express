const User = require("../models/UserModel");
const jwt = require('jsonwebtoken')
module.exports = new class userController {
  // @POST : /user/login
  async verifyLogin(req, res) {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username, email, password });
    if (!user) res.json({ user: null });
    const token = jwt.sign({ username: user.username }, process.env.JWT_TOKEN_SECRET);
    res.json({ token, user });
  }
  // @POST : /user/signup
  async verifySignup(req, res) {
    const { username, email, password } = req.body;
    let user = await User.findOne({ username, email });
    if (user) res.json({ user: null, message: 'tên đăng nhập hoặc mật khẩu đã tồn tại' });
    user = await User.create({ username, email, password });
    const token = jwt.sign({ username: user.username }, process.env.JWT_TOKEN_SECRET);
    res.json({ token, user });
  }
}