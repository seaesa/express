const Article = require('../models/ArticleModel')
module.exports = new class articleController {
  // @GET /article
  async showArticle(req, res) {
    const article = await Article.find({});
    res.json({ data: article })
  }
  // @POST /article
  async postArticle(req, res) {
    const { title, description } = req.body;
    const article = await Article.create({ title, description })
    res.json({ data: article })
  }
  // @PATCH /article
  async putArticle(req, res) {
    const { slug } = req.params;
    const { title, description } = req.body;
    const article = await Article.findOneAndUpdate({ slug }, { title, description });
    res.json({ data: article })
  }
  // @GET /article/:slug
  async detailArticle(req, res) {
    const { slug } = req.params;
    const article = await Article.findOne({ slug });
    res.json({ data: article });
  }
}