const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Nama: {
        type: String,
        required: 'This field is required.'
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    Level: {
        type: Number
    },
});

// Custom validation for email

mongoose.model('user', userSchema);