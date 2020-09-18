const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Buku = mongoose.model('buku');
const User = mongoose.model('user');
const Transaksi = mongoose.model('transaksi');
const TransaksiDetail = mongoose.model('transaksidetail');
var sess 


//Admin
router.get('/admin_login', (req, res) => {
    res.render("Admin/login");

});
router.get('/admin_logout', (req, res) => {
    req.session.destroy();
    //
    res.redirect("admin_login");

});
router.get('/admin_dashboard', (req, res) => {
    sess = req.session;
    if (sess.Level<2) {
       
    Transaksi.count((err, docs) => {
        if (!err) {
                User.count({Level:2},(err, docss) => {
            if (!err) {
                 Buku.count((err, docsss) => {
                if (!err) {
                    res.render("Admin/Dashboard", {
                    list: docs, message : sess.Nama, x:docs, y:docss,z:docsss, date:Date.now()
                        });
                    }
    
            });
                }
    
            });
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
        }else{
        res.redirect('admin_logout');
    }
    
});

router.post('/actionloginadmin', (req, res) => {
    User.findOne({Email:`${req.body.Email}`,Password:`${req.body.Password}`},(err,doc) =>{
        if(!err){
        sess = req.session;    
            if(doc!=null){
                if (doc.Level < 2) {
                   
                    sess._id = doc._id;
                    sess.Email = doc.Email;
                    sess.Nama = doc.Nama;
                    sess.Password = doc.Password;
                    sess.Level = doc.Level;

                     res.redirect('admin_dashboard');

                   }else{
                    sess._id = doc._id;
                    sess.Email = doc.Email;
                    sess.Nama = doc.Nama;
                    sess.Password = doc.Password;
                    sess.Level = doc.Level;
                    res.redirect('/member_home');
                    
                   }
             }else{
                res.render('Admin/login',{ message:'Email / Password Salah'});
            }
        }else{
           res.send('G');
       }
    })
});



router.get('/formtambah', (req, res) => {
    res.render("buku/formtambah", {
        viewTitle: "Tambah Data Buku"
    });
});
router.get('/insertadmin', (req, res) => {
    insertAdmin(req,res)
});



/*
router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});*/

router.post('/admin_tambahbuku', (req, res) => {
            insertBuku(req, res);
    });

router.post('/admin_editbuku', (req, res) => {
            updateBuku(req, res);
    });

function insertBuku(req, res) {
    var buku = new Buku();
    buku.Judul = req.body.Judul;
    buku.Penerbit = req.body.Penerbit;
    buku.Pengarang = req.body.Pengarang;
    buku.Halaman = req.body.Halaman;
    buku.Tahun = req.body.Tahun;
    buku.Harga = req.body.Harga;
    buku.save((err, doc) => {
        if (!err)
            res.redirect('admin_databuku');
        else {
            console.log(err);
          res.redirect('admin_databuku');    
        }
    });
}

function insertAdmin(req, res) {
    var buku = new User();   
    buku.Nama = "Admin Utama";
    buku.Email = "admin@gmail.com";
    buku.Password = "admin";
    buku.Level = 1;
    buku.save((err, doc) => {
        if (!err)
            res.send("x");
        else {
            console.log(err);
              
        }
    });
}


function updateBuku(req, res) {
    Buku.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/admin_databuku'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("/admin_databuku", {
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


router.get('/admin_databuku', (req, res) => {
     sess = req.session;
    if (sess.Level<2) {
        Buku.find((err, docs) => {
        if (!err) {
            res.render("Admin/Data_Buku", {
                list: docs, message : sess.Nama
            });
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
    
     }else{
        res.redirect('admin_login');
    }
});


router.get('/admin_datatransaksi', (req, res) => {
     sess = req.session;
    if (sess.Level<2) {
        Transaksi.find((err, docs) => {
        if (!err) {
            res.render("Admin/Data_Transaksi", {
                list: docs, message : sess.Nama
            });
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
    
     }else{
        res.redirect('admin_login');
    }
});

router.get('/admin_datamember', (req, res) => {
     sess = req.session;
    if (sess.Level<2) {
        User.find({Level : 2},(err, docs) => {
        if (!err) {
            res.render("Admin/Data_Member", {
                list: docs, message : sess.Nama
            });
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
    
     }else{
        res.redirect('admin_login');
    }
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

router.get('/admin_hapusbuku/:id', (req, res) => {
    Buku.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/admin_databuku');
        }
        else { console.log('Gagal :' + err); 
        res.render('error');
    }
    });
});



// Member
router.get('/member_register', (req, res) => {
    res.render("Member/Register");

});

router.get('/member_home', (req, res) => {
    sess = req.session;
    if (sess.Level>=2) {
        res.render("Member/Home",{message: sess.Nama});    
    }else{
        res.redirect('admin_logout');
    }

});

router.get('/member_profil', (req, res) => {
    sess = req.session;
    if (sess.Level>=2) {
        res.render("Member/Profil"
        ,{Nama: sess.Nama, 
            _id: sess._id,
            Email: sess.Email,
            Password: sess.Password,
            Level: sess.Level})    
    }else{
        res.redirect('admin_logout');
    }

      
});

router.get('/member_belanja', (req, res) => {
    sess = req.session;
    if (sess.Level>=2) {
           Buku.find((err, docs) => {
        if (!err) {
            res.render("Member/Belanja", {
                list: docs, message : sess.Nama
            });
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
       }else{
        res.redirect('admin_logout');
    }

});

router.post('/actionregistermember', (req, res) => {
            insertMember(req, res);
    });

router.post('/member_tambahkeranjang', (req, res) => {            
if(!req.session.cart){
        req.session.cart = []; 
    }
    req.session.cart.push({id_keranjang:Math.random(),id_buku:req.body._id,
        Judul:req.body.Judul,
        Jumlah:req.body.Jumlah, 
        Harga:req.body.Harga, 
        Subtotal:req.body.Harga*req.body.Jumlah});
        console.log(req.session.cart)
    

    res.redirect('member_keranjang');
});

router.get('/member_keranjang', (req, res) => {
    sess = req.session;
    tharga = 0;
    fharga=0;
    if (sess.Level>=2) {
        var data = req.session.cart
        
    for (let i = 0; i < 4; i++) {
        var harga = req.session.cart[i].Harga;
        var jumlah = req.session.cart[i].Jumlah
        tharga = harga * jumlah
        fharga = fharga+tharga
    }
       res.render('Member/Keranjang',{list: req.session.cart, total : fharga});
       }else{
        res.redirect('admin_logout');
    }


});

router.get('/member_hapuskeranjang/:id',(req, res) => {
    if (!req.session.cart) {
        req.session.cart = []
    }
    var id = req.params.id
    var x = id.toString()
    var cart = req.session.cart.reduce((acc, c) => {
        if (c.Judul !== id) {
            acc.push(c)
        } else {

        }
        return acc;
    }, [])
    req.session.cart = cart
    res.redirect('/member_keranjang')
})



router.get('/member_riwayatbelanja', (req, res) => {
     sess = req.session;
    if (sess.Level>1) {
        Transaksi.find({Id_user: sess._id},(err, docs) => {
        if (!err) {
            res.render("Member/Riwayat_Belanja", {
                list: docs, message : sess._id
            });
        }
        else {
            console.log('Error in retrieving  :' + err);
            res.render('error');
        }
    });
    
     }else{
        res.redirect('admin_login');
    }
});


router.get('/member_checkout', (req, res) => {
    // id_user: { type: String },
    // id_barang: { type: String },
    // namaBarang: { type: String },
    // jumlah: {type: Number},
    // harga: {type: Number},
    // tgl_transaksi: { type: Date }
    var h1=0;
    var h2 = 0;
    var data = req.session.cart
    const id_user = req.session._id
    const tgl_transaksi = Date.now()
    var x = Math.random();

    if (data) {
        for (let i = 0; i < data.length; i++) {
          h1=  data[i].Jumlah*data[i].Harga;
          h2 = h2+h1;
    var user = new TransaksiDetail();
    user.Id_transaksi = x;
    user.Id_buku = data[i].id_buku;
    user.Jumlah = data[i].Jumlah;
    user.Subtotal = data[i].Jumlah*data[i].Harga;
    user.save((err, doc) => {
        if (!err){
            req.session.cart=[];
            console.log("ff");
        }else {
          
                console.log('Gagal : ' + err);
               console.log(Id_buku+"gagal"); 
        }
    });

        }
    var user = new Transaksi();
    user._id = x;
    user.Id_user = req.session._id;
    user.Tanggal = tgl_transaksi;
    user.Total = h2;
    user.save((err, doc) => {
        if (!err){
            req.session.cart=[];
            console.log(req.session._id);
            res.redirect("/member_keranjang");
        }else {
          
                console.log('Gagal : ' + err);
               console.log("gagal"); 
        }
    });            
    }else{
        res.send("gagal")
    }
})

router.post('/member_editprofil', (req, res) => {
            updateProfil(req, res);
    });


function updateProfil(req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { 
        sess = req.session;   
        sess.Nama = req.body.Nama;
        sess.Email = req.body.Email; 
        sess.Password = req.body.Password;
            res.redirect('/member_profil'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.sned(err);
            }
            else
                console.log('Gagal : ' + err);
            res.render('error');
        }
    });
}

function insertMember(req, res) {
    var user = new User();
    user.Nama = req.body.Nama;
    user.Email = req.body.Email;
    user.Password = req.body.Password;
    user.Level = 2;
    user.save((err, doc) => {
        if (!err)
            res.redirect('/admin_login');
        else {
          
                console.log('Gagal : ' + err);
                res.redirect('/member_register')
        }
    });
}




router.post('/member_editkeranjang/:id', (req, res) => {
    if (!req.session.cart) {
        req.session.cart = []
    }
    var id = req.params.id
    var cart = req.session.cart

    var indexcart = cart.findIndex((array => array.id_keranjang == id))
    console.log(cart[indexcart]);

    cart[indexcart].Jumlah = req.body.Jumlah
    cart[indexcart].Subtotal= cart[indexcart].Harga*req.body.Jumlah;

    res.redirect('/member_keranjang')
})


module.exports = router;