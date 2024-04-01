// module
const express = require('express');
const router = express.Router();
const async = require('express-async-handler');

const postController = require('../controllers/postController');
const { authenUser } = require('../middleware/auth');

// router.post('/active', postController.getPostCurrent)
router.patch('/:id', authenUser, async(postController.patchPost))
router.delete('/delete', authenUser, async(postController.deletePost))
router.post('/create', authenUser, async(postController.createPost))
router.get('/:id', async(postController.postDetail))
router.get('/', async(postController.getListPosts))

module.exports = router