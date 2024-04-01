const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/token', authController.refreshToken)
router.post('/login', authController.login)
router.post('/register', authController.register)

module.exports = router