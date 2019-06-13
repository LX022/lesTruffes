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


//router.get('/', function(req,res,next){
  //  console.log("--------------------------------------------------------------------------------------------------------------")
   // res.render('about');
//});
router('/login').post(function(req, res, next) {

    console.log("--------------------------------------------------------------------------------------------------------------")

    var insertedUsername = req.body.username;
    var insertedPassword = req.body.password;

    var results =  models.personne.findAll(
        {where: {username:insertedUsername, password:insertedPassword},
            attributes: ['username', 'password', 'privilege']});

    if (insertedUsername && insertedPassword) {

        if (results != null) {
            req.session.loggedin = true;
            req.session.username = results[0].username;
            req.session.privilege = results[0].privilege;


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




