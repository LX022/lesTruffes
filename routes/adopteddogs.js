var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET adopteddogs page. */
router.get('/', async function(req, res, next) {

    if(req.session.privilege == 3)
    {
        let adopteddogs = await models.Animal_asked_Adoptant.findAll({where:{adotionValidee:1}});


        res.render('dogs', { title: 'Nos truffes à adopter', dogs : dogs, adopteddogs:adopteddogs,user:req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});


});

module.exports = router;