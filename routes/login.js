// All code used from https://codeshack.io/basic-login-system-nodejs-express-mysql/


var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var models = require('../models');
var handlebars = require('handlebars');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'IbanezXiphos7',
    database : 'truffes'
});

var app = express.Router();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Une truffe et des pattes'});
});

app.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {
        connection.query('SELECT * FROM personne WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;

                handlebars.registerHelper("username", function(input) {
                    return req.session.username;
                })

                //log in successful!

                res.redirect('about');

            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

/* GET home page. */
app = app.post('/', function(req, res, next) {
    res.render('index', { title: 'Une truffe et des pattes'});
});
module.exports = app;



