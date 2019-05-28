var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET persons page. */
router.get('/', async function(req, res, next) {

    let persons = await models.Personne.findAll({});
    res.render('persons', { title: 'Membres', persons : persons });        //Page title

});

module.exports = router;