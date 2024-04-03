const mongoose = require('mongoose');
const async = require('express-async-handler');

module.exports = {
  connect: async(async (app) => {
    await mongoose.connect(`${process.env.MONGO_DB_URI}`);
    console.log('connect DB successfully')
    app.listen(process.env.PORT, () => console.log(`app running on address ${process.env.URL}${process.env.PORT}`));
  })
}