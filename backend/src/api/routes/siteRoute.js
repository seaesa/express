// module
const express = require('express');
const router = express.Router();

// controller
const siteController = require('../controllers/siteController');

// router
router.get('/', siteController.home)


module.exports = router