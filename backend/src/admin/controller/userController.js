const userModel = require('../../api/app/models/userModel');

class postController {
  // @GET : /admin/users
  async showUsers(req, res) {
    const users = await userModel.find({})
    if (req.user.role === 'user') {
      const user = users.filter(user => user.id === req.user.id)
      res.json({ data: user })
    } else if (req.user.role === 'admin') {
      res.json({ data: users })
    } else {
      res.sendStatus(404)
    }
  }
}
module.exports = new postController()
