const express = require('express');
const route = express.Router();
const homeController = require('../controllers/siteController');
const user = require('./userRoute')
const User = require('../models/userModel')
// route.get('/', isUser, async(homeController.home))
route.get('/', async (req, res) => {
  const data = await User.aggregate([{ $sample: { size: 2 } }]);
  res.json({ data })
})
route.get('*', homeController.error)

module.exports = route