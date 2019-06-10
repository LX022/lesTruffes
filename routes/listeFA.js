var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogs page. */
router.get('/', async function(req, res, next) {

    let animals_has_FA = await models.Animal_has_FA.findAll();

    res.render('dogs', { title: 'Nos truffes à adopter', dogs : dogs , animals_has_FA:animals_has_FA, user:req.session});        //Page title
});

module.exports = router;