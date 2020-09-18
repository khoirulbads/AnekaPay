const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Buku = mongoose.model('buku');

router.get('/formtambah', (req, res) => {
    res.render("buku/formtambah", {
        viewTitle: "Tambah Data Buku"
    });
});
/*
router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});*/

router.post('/actiontambah', (req, res) => {
            insertRecord(req, res);
    });

router.post('/actionedit/:id', (req, res) => {
            updateRecord(req, res);
    });

function insertRecord(req, res) {
    var buku = new Buku();
    buku.Judul = req.body.Judul;
    buku.Penerbit = req.body.Penerbit;
    buku.Pengarang = req.body.Pengarang;
    buku.Tahun= req.body.Tahun;
    buku.Halaman = req.body.Halaman;
    buku.save((err, doc) => {
        if (!err)
            res.redirect('/buku');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("buku/formtambah", {
                    viewTitle: "Tambah Data Buku",
                 buku: req.body
                });
            }
            else
                console.log('Gagal : ' + err);
                res.render('error');
        }
    });
}

function updateRecord(req, res) {
    Buku.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/buku'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("buku/formedit", {
                    viewTitle: 'Edit Data Buku',
                    buku: req.body
                });
            }
            else
                console.log('Gagal : ' + err);
            res.render('error');
        }
    });
}


router.get('/', (req, res) => {
    Buku.find((err, docs) => {
        if (!err) {
            res.render("buku/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
});



router.get('/edit/:id', (req, res) => {
    Buku.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("buku/formedit", {
                viewTitle: "Edit Data Buku",
                buku: doc
            });
        }else{
            res.render('error');
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Buku.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/buku');
        }
        else { console.log('Gagal :' + err); 
        res.render('error');
    }
    });
});


module.exports = router;