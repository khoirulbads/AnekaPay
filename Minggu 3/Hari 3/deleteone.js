var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testmongo");
  var myquery = { alamat: 'Probolinggo' };
  dbo.collection("mahasiswa").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("Berhasil Dihapus");
    db.close();
  });
});