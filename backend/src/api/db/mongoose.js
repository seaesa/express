const mongoose = require('mongoose');
const async = require('express-async-handler')
module.exports = async(async (app) => {
  try {
    // connect mongo DB
    await mongoose.connect(`${process.env.MONGO_DB_URI}`);
    console.log('connect DB successfully')
    // start server
    app.listen(process.env.PORT, () => console.log(`app running on address ${process.env.URL}${process.env.PORT}`));
  } catch (error) {
    console.log(error.messaage)
  }
})