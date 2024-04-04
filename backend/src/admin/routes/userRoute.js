// module
const express = require('express');
const async = require('express-async-handler');
const router = express.Router();

const userController = require('../controller/userController');
const { authenUser } = require('../../api/middleware/auth');

router.get('/', authenUser, async(userController.showUsers))
module.exports = router