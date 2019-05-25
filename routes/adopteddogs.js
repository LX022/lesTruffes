var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET adopteddogs page. */
router.get('/', async function(req, res, next) {

    let adopteddogs = await models.Animal_asked_Adoptant.findAll({where:{adotionValidee:1}});


    res.render('dogs', { title: 'Nos truffes à adopter', dogs : dogs },{adopteddogs:adopteddogs});        //Page title
});

module.exports = router;