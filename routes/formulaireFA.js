var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET fa page. */
router.get('/', function(req, res, next) {
    res.render('formulaireFA', { title: "Devenir famille d'accueil"});
});

module.exports = router;