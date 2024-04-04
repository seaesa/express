// module
const express = require('express');
const router = express.Router()
const postRoute = require('./postRoute')
const userRoute = require('./userRoute')
// express Router
router.use('/posts', postRoute);
router.use('/users', userRoute);

module.exports = router;