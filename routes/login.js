// All code used from https://codeshack.io/basic-login-system-nodejs-express-mysql/


var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var models = require('../models');
var handlebars = require('handlebars');
var app = express();
var router = express.Router();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'IbanezXiphos7',
    database : 'truffes'
});


router.get('/', function(req,res,next){
    res.render('/');
});

router.post('/', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if (username && password) {
        connection.query('SELECT privilege FROM personne WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                req.session.privilege = JSON.stringify(results[0]).replace(/\D/g,'');

                handlebars.registerHelper('username', function() {
                    return 'hey';
                });

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

module.exports = router;




