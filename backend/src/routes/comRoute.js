const express = require('express');
const route = express.Router();
const homeController = require('../controllers/comController');
const async = require('express-async-handler');
const { isUser } = require('../middleware/auth');

route.get('/', isUser, async(homeController.home))
route.get('*', homeController.error)

module.exports = route