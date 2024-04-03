// module
const express = require('express');
const async = require('express-async-handler');
const router = express.Router();

const postController = require('../app/controllers/postController');
const { authenUser } = require('../middleware/auth');

// GET
router.get('/:id', async(postController.postDetail))
router.get('/', async(postController.getListPosts))
// POST
router.post('/active', postController.getPostCurrent)
router.post('/create', authenUser, async(postController.createPost))
// PATCH
router.patch('/:id', authenUser, async(postController.patchPost))
// DELETE
router.delete('/delete', authenUser, async(postController.deletePost))

module.exports = router