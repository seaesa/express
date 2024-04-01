const express = require('express');
const route = express.Router();
const postController = require('../controllers/postController');
const async = require('express-async-handler');
const { authenUser } = require('../middleware/auth');

route.patch('/', async(postController.putArticle))
route.post('/active', postController.getPostCurrent)

route.delete('/delete', authenUser, async(postController.deletePost))
route.post('/create', authenUser, async(postController.createPost))
route.get('/:id', postController.postDetail)
route.get('/', async(postController.getListPosts))

module.exports = route