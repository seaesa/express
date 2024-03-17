const express = require('express');
const route = express.Router()
const userController = require('../controllers/userController');
const async = require('express-async-handler');

route.post('/login', async(userController.verifyLogin))

route.post('/signup', async(userController.verifySignup))

module.exports = route