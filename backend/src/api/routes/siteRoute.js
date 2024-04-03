// module
const express = require('express');
const router = express.Router();

// controller
const siteController = require('../app/controllers/siteController');

// GET
router.get('/', siteController.home)


module.exports = router