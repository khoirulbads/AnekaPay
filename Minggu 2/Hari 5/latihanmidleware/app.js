var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
app.use(requestTime)
app.use(myLogger)

app.get('/myLogger', function (req, res) {
  res.send('Hello World!')
})

/*app.get('/user/:id', function (req, res, next) {
  res.send('USER ')
})*/

app.get('/requestTime', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

/*app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})*/

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  
  next()
}, function (req, res, next) {
	var x = req.params.id;
  res.send('User Info '+x)
})

app.get('/karakter/:karakter', function (req, res, next) {
  next()
}, function (req, res, next) {
	var x = req.params.karakter;
  /*res.send('Karakter yang diterima adalah  '+x);
*/
	var split = x.split("");
	var d = x.length;
	var hasil1 = "";
	var hasil2 = "";
  	for (var i = 0; i <= d-1; i++) {
  		if (split[i].match(/[a-z]/i)) {
  				hasil1 = split[i];
  		  }else{
  		 			hasil1 = "";
  		   		  }
  		
  		hasil2 = hasil2+hasil1;
  	}
  	 

  	res.send(hasil2);
 })

app.get('/userselection/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id < 7) next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/userselection/:id', function (req, res, next) {
  res.send('special')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
