const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const UserSchema = new mongoose.Schema({
  idUser: { type: String, slug: 'username', transform: v => `@${v}` },
  username: String,
  displayName: String,
  email: String,
  gender: ['male', 'female'],
  defaultAvatar: { type: String, default: 'https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg' },
  avatar: String,
  password: String,
  phone: Number,
}, { timestamps: true })
module.exports = mongoose.model('User', UserSchema)