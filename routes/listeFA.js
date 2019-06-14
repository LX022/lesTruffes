var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogs page. */
router.get('/', async function(req, res, next) {
    if(req.session.privilege >= 1) {
    let animals_has_FA = await models.Animal_has_FA.findAll();

    res.render('dogs', { title: 'Nos truffes à adopter', dogs : dogs , animals_has_FA:animals_has_FA, user:req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});
});

module.exports = router;