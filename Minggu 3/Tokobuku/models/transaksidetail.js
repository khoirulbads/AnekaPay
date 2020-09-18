

const mongoose = require('mongoose');

var transaksidetailSchema = new mongoose.Schema({
    Id_transaksi: {
        type: String
    },
    Id_buku: {
        type: String
    },
    Jumlah: {
        type: String
    },
    Subtotal: {
        type: Number
    },
  
});

// Custom validation for email
mongoose.model('transaksidetail', transaksidetailSchema);