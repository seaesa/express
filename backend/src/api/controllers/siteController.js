module.exports = new class siteController {
  home(req, res) {
    res.send('sucess')
  }
  error(req, res) {
    res.json({ error: true, message: 'route not match' })
  }
}