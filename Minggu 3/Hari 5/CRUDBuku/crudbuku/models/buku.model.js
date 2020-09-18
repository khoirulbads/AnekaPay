const mongoose = require('mongoose');

var bukuSchema = new mongoose.Schema({
    Judul: {
        type: String,
        required: 'This field is required.'
    },
    Penerbit: {
        type: String
    },
    Pengarang: {
        type: String
    },
    Tahun: {
        type: Number
    },
    Halaman: {
        type: Number
    }
});

// Custom validation for email

mongoose.model('buku', bukuSchema);