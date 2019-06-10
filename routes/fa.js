var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET fa page. */
router.get('/', function(req, res, next) {
    res.render('fa', { title: "Famille d'accueil? FA? Qu'est-ce que c'est?", user:req.session});
});

module.exports = router;