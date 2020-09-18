var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("terserah");
  var myquery = { nama: "Imam Mahdi" };
  var newvalues = { $set: {alamat: "Arab Saudi " } };
  dbo.collection("mahasiswa").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("Update SUkses");
    db.close();
  });
});