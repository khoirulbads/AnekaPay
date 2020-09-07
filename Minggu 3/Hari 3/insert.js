var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testmongo");
  var myobj = { nama: "Imam Mahdi", alamat: "Pare Bendo" };
  dbo.collection("mahasiswa").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("Sukses Insert 1 Mhasiswa");
    db.close();
  });
});