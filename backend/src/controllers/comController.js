module.exports = new class homeController {
  home(req, res) {
    res.send('sucess')
  }
  error(req, res) {
    res.send('error')
  }
}