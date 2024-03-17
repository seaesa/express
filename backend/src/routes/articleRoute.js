const express = require('express');
const route = express.Router();
const articleController = require('../controllers/articleController');
const async = require('express-async-handler')

route.route('/')
  .get(async(articleController.showArticle))
  .post(async(articleController.postArticle))
  .patch(async(articleController.putArticle))

route.get('/:slug', articleController.detailArticle)

module.exports = route