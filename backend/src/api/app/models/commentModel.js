const mongoose = require('mongoose');
// Schema
const CommentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  post: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Post' },
  title: String,
  image: String,
  likes: Number,
}, { timestamps: true })

module.exports = mongoose.model('Comment', CommentSchema)