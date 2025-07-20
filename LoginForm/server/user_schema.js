const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String
});

const user_table = mongoose.model('User', userSchema);

module.exports = user_table;

