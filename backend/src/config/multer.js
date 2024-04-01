const multer = require('multer');

const diskStorage = multer.diskStorage({
  destination(req, res, callback) {
    callback(null, '')
  },
  filename(req, file, callback) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const memoryStorage = multer.memoryStorage();

module.exports = {
  diskUpload: multer({ storage: diskStorage }),
  memoryUpload: multer({ storage: memoryStorage })
} 