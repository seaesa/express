module.exports = (res, data) => {
  return res.json({
    error: false,
    message: '',
    user: null,
    ...data
  })
}