var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vets page. */
router.get('/', async function (req, res, next) {
    let veterinaires = await models.Veterinaire.findAll();
    res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires});        //Page title
});

module.exports = router;