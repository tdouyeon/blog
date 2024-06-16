const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  nickName: String,
  id: String,
  password: String,
  email: String,
  phone: Number,
})

module.exports = mongoose.model('User', userSchema)
