const response = require("../../config/response");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
class userController {

  // @GET: /users/current
  async currentUser(req, res) {
    const { token } = req.body;
    const userToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
    let suggestUser = [];
    const users = await User.find({}).limit(10);
    const currentUsers = users.map(user => {
      if (user.id !== userToken.id) suggestUser.push(user);
      return user;
    }).find(user => user.id === userToken.id);
    response(res, { user: currentUsers, suggestUser: suggestUser.sort(() => Math.random() - 0.5) });
  }
  // @GET: /users/suggest
  async suggestUser(req, res) {
    const users = await User.find({}).limit(10)
    response(res, { suggestUser: users.sort(() => Math.random() - 0.5) });
  }
  // @GET /users/:id
  async getUser(req, res) {
    const { id } = req.params;
    const data = await User.findOne({ idUser: id.slice(1) });
    response(res, { user: data })
  }

}
module.exports = new userController