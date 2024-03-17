const siteRoute = require('./siteRoute');
const userRoute = require('./userRoute');
const articleRoute = require('./articleRoute');
module.exports = (app) => {
  app.use('/user', userRoute);
  app.use('/article', articleRoute);
  app.use('/', siteRoute)
  app.use('*', siteRoute)
}