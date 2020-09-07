var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testmongo");
  var myobj = [
    { nama: 'Rama Indra', alamat: 'Pare Plemahan'},
    { nama: 'Rimba Agung', alamat: 'Kediri Kota'},
    { nama: 'Maemunah', alamat: 'Probolinggo'},
    ];
  dbo.collection("mahasiswa").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Berhasil menambahkan: " + res.insertedCount+ " Mahasiswa");
    db.close();
  });
});