const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const async = require('express-async-handler')
router.post('/token', authController.refreshToken)
router.post('/login', async(authController.login))
router.post('/register', async(authController.register))

module.exports = router