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

// connect DB
const DB = require('./api/db/mongoose');
DB();

// config route
const router = require('./api/routes/routes')
app.use('/api', router)

// start server
app.listen(process.env.PORT, () => console.log(`app running on address ${process.env.URL}${process.env.PORT}`));