var express = require('express');
var path = require('path');
var router = express.Router();
var view = __dirname ;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});
router.get('/kalender', function(req, res, next) {
  res.render('kalender');
});

router.get('/kalkulator', function(req, res, next) {
  res.sendFile(path.join(view + "/kalkulator.html"));
});

module.exports = router;
