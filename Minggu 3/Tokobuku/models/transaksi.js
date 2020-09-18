

const mongoose = require('mongoose');

var transaksiSchema = new mongoose.Schema({
    
    _id: {
        type: String,
        required: 'This field is required.'
    },
    Id_user: {
        type: String
    },
    Tanggal: {
        type: Date
    },
    Total: {
        type: Number
    },
  
});

// Custom validation for email

mongoose.model('transaksi', transaksiSchema);