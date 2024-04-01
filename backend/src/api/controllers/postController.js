const response = require('../../config/response')
const Post = require('../models/postModel')
module.exports = new class postController {
  // @GET /post
  async getListPosts(req, res) {
    const data = await Post.find({}).populate('author');
    res.json({ data })
  }
  async getPostCurrent(req, res) {
    const { id } = req.body
    const data = await Post.find({}).populate({
      path: 'author',
      match: { _id: id }
    });
    res.json({ data })
  }
  // @POST /Post
  async createPost(req, res) {
    const { title, url, author } = req.body;
    const data = await Post.create({ title, image: url, author })
    response(res, { data })
  }
  async deletePost(req, res) {
    const { id } = req.body;
    const data = await Post.deleteOne({ _id: id })
    response(res, { deleted: data })
  }
  // @PATCH /Post
  async putArticle(req, res) {
    const { slug } = req.params;
    const { title, description } = req.body;
    const data = await Post.findOneAndUpdate({ slug }, { title, description });
    res.json({ data })
  }
  // @GET /Post/:slug
  async postDetail(req, res) {
    const { id } = req.params;
    const data = await Post.findOne({ slug: id }).populate('author');
    res.json({ data });
  }
}