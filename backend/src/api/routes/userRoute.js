const express = require('express');
const router = express.Router()
const async = require('express-async-handler');

const userController = require('../app/controllers/userController');

router.post('/current', async(userController.currentUser));
router.get('/suggest', async(userController.suggestUser));
router.get('/:id', async(userController.getUser));
router.get('/', async(userController.getListUser));

module.exports = router;