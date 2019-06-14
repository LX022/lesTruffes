var express = require('express');
var models = require('../models');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('logout', {user: req.session});
});

router.post('/', async function (req, res, next) {

    req.session.loggedin = false;
    req.session.username = "";
    req.session.privilege = 0;
    res.render('about', {title: 'Vous vous êtes déconnecté.', user:req.session});

});


module.exports = router;




