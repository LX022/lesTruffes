var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogs page. */
router.get('/', async function(req, res, next) {

    let dogs = await models.Animal.findAll({order: [['NomAnimal', 'ASC']]});

    res.render('dogs', { title: 'Nos truffes à adopter', dogs : dogs });        //Page title
});

module.exports = router;