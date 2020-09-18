const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Buku = mongoose.model('buku');
const User = mongoose.model('user');
const Transaksi = mongoose.model('transaksi');
const TransaksiDetail = mongoose.model('transaksidetail');
var sess 

router.get('/getUser', (req, res) => {

        User.find((err, docs) => {
        if (!err) {
            res.json({docs})
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
    
  });


router.get('/getTransaksi', (req, res) => {

        Transaksi.find((err, docs) => {
        if (!err) {
            res.json({docs})
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
    
  });

router.get('/getBuku', (req, res) => {

        Buku.find((err, docs) => {
        if (!err) {
            res.json({docs})
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
    
  });

module.exports = router;