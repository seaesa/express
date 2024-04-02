const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const crypto = require('crypto');
const bcrypt = require('bcrypt')
mongoose.plugin(slug);

const UserSchema = new mongoose.Schema({
  idUser: { type: String, slug: 'username', transform: v => `@${v}` },
  username: { type: String },
  displayName: String,
  email: String,
  gender: ['male', 'female'],
  defaultAvatar: { type: String, default: 'https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg' },
  avatar: String,
  password: String,
  phone: Number,
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
  const user = await mongoose.model('User', UserSchema).findOne({ username: this.username })
  if (user) {
    this.username = `${this.username}${crypto.randomBytes(2).toLocaleString('hex')}`
  }
  next()
})
module.exports = mongoose.model('User', UserSchema)