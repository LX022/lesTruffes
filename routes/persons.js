var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET persons page. */
router.get('/', async function (req, res, next) {
    let personnes = await models.Personne.findAll();
    res.render('persons', {title: 'Persons'});        //Page title
});

module.exports = router;