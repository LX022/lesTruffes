var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET dog page. */
router.get('/', async function (req, res, next) {


   let id = req.query.idAnimal;

    let dog = await models.Animal.findByPk(id);
    let nom = dog.nomAnimal;

    res.render('dog', {title: nom,dog : dog});        //Page title

});

module.exports = router;