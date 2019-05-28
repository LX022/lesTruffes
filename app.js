// Require .env file
var dotenv = require('dotenv');
var dotenvExpand = require('dotenv-expand');

var myEnv = dotenv.config();
dotenvExpand(myEnv);

// Libraries
var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

//Routers
var routes = require('./routes/index');
var about  = require('./routes/about');
var adoption = require('./routes/adoption');
var contact = require('./routes/contact');
var contactSend = require('./routes/contactSend');
var dog  = require('./routes/dog');
var dogAdmin  = require('./routes/dogAdmin');
var dogs  = require('./routes/dogs');
var dogsAdmin  = require('./routes/dogsAdmin');
var fa  = require('./routes/fa');
var formulaireAdoption  = require('./routes/formulaireAdoption');
var formulaireFA  = require('./routes/formulaireFA');
var login = require('./routes/login');
var persons  = require('./routes/persons');
var reserveddogs  = require('./routes/reserveddogs');
var vet  = require('./routes/vet');
var vets  = require('./routes/vets');


// View engine
var hbs = require('hbs');
var HandlebarsIntl = require('handlebars-intl');
HandlebarsIntl.registerWith(hbs);

// Express app
var app = express();

// session variables
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    username: 'empty'
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/about', about);
app.use('/adoption', adoption);
app.use('/contact', contact);
app.use('/contactSend', contactSend);
app.use('/dog', dog);
app.use('/dogAdmin', dogAdmin);
app.use('/dogs', dogs);
app.use('/dogsAdmin', dogsAdmin);
app.use('/fa', fa);
app.use('/formulaireAdoption', formulaireAdoption);
app.use('/formulaireFA', formulaireFA);
app.use('/login', login);
app.use('/persons', persons);
app.use('/reserveddogs', reserveddogs);
app.use('/vet', vet);
app.use('/vets', vets);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

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