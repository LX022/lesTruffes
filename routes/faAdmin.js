var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET faAdmin page. */
router.get('/', async function (req, res, next) {

    //Liste des fa
    let familles = await models.familleAccueil.findAll({order: [['idFamilleAccueil', 'ASC']]});
    res.render('faAdmin', {title: 'Liste des familles accueil', familles:familles, user:req.session});        //Page title

});

module.exports = router;