var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET fa page. */
router.get('/', async function (req, res, next) {
    let id = req.query.idAnimalAdoption;
    let dog = await models.Animal.findByPk(id);

    res.render('formulaireAdoption', {title: "Adopter cette belle truffe", dog:dog});
});

module.exports = router;