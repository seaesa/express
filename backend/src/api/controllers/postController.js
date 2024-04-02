const response = require('../../config/response')
const postModel = require('../models/postModel');
const userModel = require('../models/userModel');

class postController {
  // @GET : /posts
  async getListPosts(req, res) {
    const data = await postModel.find({}).populate('author');
    res.json({ data })
    //   const data = await post.aggregate([{ $sample: { size: 10 } }]);
    // res.json({ data })
  }
  // @GET : /posts/active
  async getPostCurrent(req, res) {
    const { id } = req.body
    const data = await postModel.find({}).populate({
      path: 'author',
      match: { _id: id }
    });
    res.json({ data })
  }

  // @GET /posts/:id
  async postDetail(req, res) {
    const { id, type = 'author' } = req.params;
    const data = await postModel.findOne({ slug: id }).populate(type);
    res.json({ data });
  }
  // @POST /posts/create
  async createPost(req, res) {
    const { title, url, author } = req.body;
    const data = await postModel.create({ title, image: url, author })
    response(res, { data })
  }
  // @PATCH /posts/:id
  async patchPost(req, res) {
    const { id } = req.params;
    const { title, url } = req.body;
    const data = await postModel.findOneAndUpdate({ _id: id }, { title, image: url });
    res.json({ data })
  }
  // @DELETE : /posts/delete
  async deletePost(req, res) {
    const { id } = req.body;
    const data = await postModel.deleteOne({ _id: id })
    response(res, { deleted: data })
  }
}
module.exports = new postController()