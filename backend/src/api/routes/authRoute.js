const express = require('express');
const async = require('express-async-handler')
const router = express.Router();

const authController = require('../app/controllers/authController');

router.post('/token', authController.refreshToken)
router.post('/login', async(authController.login))
router.post('/register', async(authController.register))
router.post('/google', async(authController.google))
router.post('/facebook', async(authController.facebook))
router.delete('/logout', async(authController.logOut))

module.exports = router