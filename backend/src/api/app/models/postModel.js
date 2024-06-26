const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

// port flugin
mongoose.plugin(slug)

// Schema
const PostSchema = new mongoose.Schema({
  title: String,
  image: String,
  slug: { type: String, slug: 'title', slugPaddingSize: 1, unique: true },
  author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  likes: Number,
  comments: { type: String, ref: 'Comment' },
  share: Number,
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)