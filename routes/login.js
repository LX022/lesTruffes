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


router.get('/', function(req,res,next){
    res.render('about');
});

router.post('/', async function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;


    res.send(username);


    var results = await models.personne.findAll(
        {where: {username:username, password:password},
            attributes: ['idPersonne', 'username', 'password', 'privilege']});

    if (username && password) {

        if (results != null) {
            req.session.loggedin = true;
            req.session.username = results[0].username;
            req.session.privilege = results[0].privilege;
            req.session.idPersonne = results[0].idPersonne;


            handlebars.registerHelper('username', function() {

                return 'hey';
            });

            //log in successful!
            res.redirect('about');

        } else {
            res.send('Incorrect Username and/or Password!');
        }
        res.end();

    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

router.delete('/', (req,res,next) =>{

    req.session.destroy();
    res.redirect('about');
    res.end();
});

module.exports = router;




