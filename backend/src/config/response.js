module.exports = (req, res, data) => {
  return res.json({
    error: false,
    message: '',
    user: req.user || null,
    data: [],
    ...data
  })
}