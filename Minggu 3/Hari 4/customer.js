const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  nama: { type: String },
  usia: { type: Number },
  alamat: { type: String }
});

module.exports = mongoose.model('User', customerSchema);