var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: "Contacter l'association" });        //Page title
});

/* POST contact page. */
router.post('/', function(req, res, next) {
   res.send('working');
});

module.exports = router;