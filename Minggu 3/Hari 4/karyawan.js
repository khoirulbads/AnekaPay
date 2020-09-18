const mongoose = require('mongoose');

const karyawanSchema = mongoose.Schema({
  nama: { type: String },
  usia: { type: Number },
  alamat: { type: String }
});

module.exports = mongoose.model('Karyawan', karyawanSchema);