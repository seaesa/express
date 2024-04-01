const express = require('express');
const app = express();
const path = require('path');

// config enviroment
const morgan = require('morgan');
const env = require('dotenv');
if (process.env.NODE_ENV === "development") {
  env.config({ path: path.join(__dirname, '../config/.env.development') });
  app.use(morgan('dev'));
} else env.config({ path: path.join(__dirname, '../config/.env.production') });

// config static folder
app.use(express.static(path.join(__dirname, '../public')));

//cors
const cors = require('cors');
app.use(cors());

// config send request body to server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// config route
const router = require('./api/routes/routes')
app.use('/api', router)

// connect DB and start server
const DB = require('./api/db/mongoose');
DB(app);