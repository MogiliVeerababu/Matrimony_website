const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  dob: Date,
  gender: String,
  religion: String,
  caste: String,
  profession: String,
  preferences: Object,
  photos: [String],
  isPremium: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
  resetToken: String,
  resetTokenExpiry: Date
});
module.exports = model('User', userSchema);