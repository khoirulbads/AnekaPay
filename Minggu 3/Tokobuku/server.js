require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
var session = require('express-session')

const Controller = require('./controllers/Controller');
const ApiController = require('./controllers/ApiController');

var app = express();


app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('ejs', exphbs({ extname: 'ejs' }));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});


app.use('/', Controller);
app.use('/api', ApiController);

