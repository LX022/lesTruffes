var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET fa page. */
router.get('/', async function (req, res, next) {
    let id = req.query.idAnimal;
    let dog = await models.Animal.findByPk(id);
    res.render('formulaireAdoption', {title: "Adopter une truffe", dog:dog});
});

module.exports = router;