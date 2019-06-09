var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET about page. */
router.get('/', async function (req, res, next) {

    //Liste des animauxAdoptants
    let animalAskedAdoptant = await models.animalAskedAdoptant.findAll();

    res.render('adoptantsAdmin', {title: 'Liste des adoptants et de leur animal', animalAskedAdoptant:animalAskedAdoptant});        //Page title
});

module.exports = router;