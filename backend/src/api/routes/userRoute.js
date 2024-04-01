const express = require('express');
const route = express.Router()
const userController = require('../controllers/userController');
const async = require('express-async-handler');

route.post('/current', async(userController.currentUser));
route.get('/:id', async(userController.getUser));
route.get('/', async(userController.getListUser));
module.exports = route;