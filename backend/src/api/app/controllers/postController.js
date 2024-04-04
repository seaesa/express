const response = require('../../../config/response')
const postModel = require('../models/postModel');

class postController {
  // @GET : /posts
  async getListPosts(req, res) {
    const data = await postModel.find({}).populate('author');
    response(req, res, { data })
  }
  // @GET : /posts/active
  async getPostCurrent(req, res) {
    const { id } = req.body
    const post = await postModel.find({}).populate('author')
    const data = post.filter(post => post.author.id === id)
    response(req, res, { data })
  }

  // @GET /posts/:id
  async postDetail(req, res) {
    const { id, type = 'author' } = req.params;
    const data = await postModel.findOne({ slug: id }).populate(type);
    response(req, res, { data });
  }
  // @POST /posts/create
  async createPost(req, res) {
    const { title, url, author } = req.body;
    const data = await postModel.create({ title, image: url, author })
    response(req, res, { data })
  }
  // @PATCH /posts/:id
  async patchPost(req, res) {
    const { id } = req.params;
    const { title, url } = req.body;
    const data = await postModel.findOneAndUpdate({ _id: id }, { title, image: url });
    response(req, res, { data })
  }
  // @DELETE : /posts/delete
  async deletePost(req, res) {
    const { id } = req.body;
    const post = await postModel.findOne({ _id: id }).populate('author')
    if (req.user.id === post.author.id) {
      await postModel.deleteOne({ _id: id });
      response(req, res, { deleted: true })
    } else {
      res.sendStatus(401)
    }
  }
}
module.exports = new postController()
