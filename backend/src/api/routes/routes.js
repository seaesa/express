const express = require('express');
const router = express.Router()

const siteRoute = require('./siteRoute');
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');
const authRoute = require('./authRoute');
router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/auth', authRoute);
router.use('/', siteRoute);
module.exports = router;