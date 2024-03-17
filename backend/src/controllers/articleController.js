const Article = require('../models/ArticleModel')
module.exports = new class articleController {
  // @GET /article
  async showArticle(req, res) {
    const data = await Article.find({});
    res.json({ data })
  }
  // @POST /article
  async postArticle(req, res) {
    const { title, description } = req.body;
    const data = await Article.create({ title, description })
    res.json({ data })
  }
  // @PATCH /article
  async putArticle(req, res) {
    const { slug } = req.params;
    const { title, description } = req.body;
    const data = await Article.findOneAndUpdate({ slug }, { title, description });
    res.json({ data })
  }
  // @GET /article/:slug
  async detailArticle(req, res) {
    const { slug } = req.params;
    const data = await Article.findOne({ slug });
    res.json({ data });
  }
}