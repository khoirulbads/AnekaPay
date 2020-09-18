var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("terserah");
  dbo.createCollection("mahasiswa", function(err, res) {
    if (err) throw err;
    console.log("Sukses Buat Collection");
    db.close();
  });
});