const comRoute = require('./comRoute');
const userRoute = require('./userRoute');
const articleRoute = require('./articleRoute');
module.exports = (app) => {
  app.use('/user', userRoute);
  app.use('/article', articleRoute);
  app.use('/', comRoute)
  app.use('*', comRoute)
}