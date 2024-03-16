const mongoose = require('mongoose');
const async = require('express-async-handler')
module.exports = async(async () => {
  await mongoose.connect(`${process.env.MONGO_DB_URI}`);
  console.log('connect DB successfully')
})