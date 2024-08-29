const mongoose = require('mongoose');
const async = require('express-async-handler');
const PORT = 5000 | 3000 | 8080 | 9000
module.exports = {
  connect: async(async (app) => {
    await mongoose.connect(`${process.env.MONGO_DB_URI}`);
    console.log('connect DB successfully')
    app.listen(PORT, () => console.log(`app running on http://localhost:${PORT}`));
  })
}