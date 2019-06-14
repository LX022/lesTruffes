var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET faAdmin page. */
router.get('/', async function (req, res, next) {

    //Liste des fa
    if(req.session.privilege === 3) {
        let familles = await models.familleAccueil.findAll({order: [['idFamilleAccueil', 'ASC']]});
        res.render('faAdmin', {title: 'Liste des familles accueil', familles: familles, user: req.session});        //Page title
    }
    else
    {
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});
    }
});

module.exports = router;