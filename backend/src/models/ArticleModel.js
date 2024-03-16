const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

// port flugin
mongoose.plugin(slug)

// Schema
const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  slug: { type: String, slug: 'title', slugPaddingSize: 1, unique: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema)