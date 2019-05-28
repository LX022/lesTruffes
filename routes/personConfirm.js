var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET persons page. */
router.get('/', async function(req, res, next) {

    let persons = await models.Personne.findAll({});
    res.render('personConfirm', { title: 'Confirmation', person : person });        //Page title
});

module.exports = router;