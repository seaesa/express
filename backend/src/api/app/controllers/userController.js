const response = require("../../../config/response");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken')
class userController {

  // @POST: /users/current
  async currentUser(req, res) {
    const { token } = req.body;
    const userToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
    const user = await User.findOne({ _id: userToken.id })
    response(req, res, { user });
  }
  // @GET: /users/suggest
  async suggestUser(req, res) {
    const users = await User.find({}).limit(10)
    response(req, res, { suggestUser: users.sort(() => Math.random() - 0.5) });
  }
  // @GET /users/:id
  async getUser(req, res) {
    const { id } = req.params;
    const user = await User.findOne({ idUser: id.slice(1) });
    response(req, res, { user })
  }

  getListUser(req, res) {
    response(req, res, { message: 'hello worlds' })
  }
}
module.exports = new userController()
