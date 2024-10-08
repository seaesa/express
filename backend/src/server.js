const express = require('express');
const path = require('path');

const app = express();

// config enviroment
const morgan = require('morgan');
const env = require('dotenv');
env.config({ path: path.join(__dirname, '../config/.env.development') });
app.use(morgan('dev'));
// cors
const cors = require('cors');
app.use(cors());

// config send request body to server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// config route
const router = require('./api/routes/routes')
app.use('/api', router);

const admin = require('./admin/routes/routes');
app.use('/admin', admin)


// connect DB and start server
const DB = require('./api/db/mongoose');
DB.connect(app);

// deploy server
module.exports = app;