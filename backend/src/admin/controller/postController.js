const postModel = require('../../api/app/models/postModel');

class postController {
  // @GET : /admin/posts
  async showPosts(req, res) {
    const posts = await postModel.find({}).populate('author');
    if (req.user.role === 'user') {
      const postUser = posts.filter(post => post.author.id === req.user.id)
      res.json({ data: postUser })
    } else if (req.user.role === 'admin') {
      res.json({ data: posts })
    } else {
      res.sendStatus(404)
    }
  }
  // @POST : /admin/posts/delete
  async deletePosts(req, res) {
    const { id } = req.body
    await postModel.deleteOne({ _id: id })
    res.json({ deleted: true })
  }
}
module.exports = new postController()
