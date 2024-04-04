// module
const express = require('express');
const async = require('express-async-handler');
const router = express.Router();

const postController = require('../controller/postController');
const { authenUser, roleUser } = require('../../api/middleware/auth');

router.get('/', authenUser, async(postController.showPosts))
router.delete('/delete', roleUser, async(postController.deletePosts))

module.exports = router