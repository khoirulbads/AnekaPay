var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/terserah";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Sukses Create Database ");
  db.close();
});