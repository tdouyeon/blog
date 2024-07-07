const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: String,
  password: String,
  nickName: String,
  email: String,
  phone: Number,
})

module.exports = mongoose.model('User', userSchema)
