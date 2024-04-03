class siteController {
  // @GET /api
  home(req, res) {
    res.send('welcome to development enviroment')
  }
}
module.exports = new siteController()
