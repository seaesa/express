const express = require('express');
const router = express.Router()
const async = require('express-async-handler');

const userController = require('../controllers/userController');

router.post('/current', async(userController.currentUser));
router.get('/:id', async(userController.getUser));
router.get('/', async(userController.getListUser));

module.exports = router;