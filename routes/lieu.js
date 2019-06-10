var models  = require('../models');
var express = require('express');
var router = express.Router();

/* POST delete lieu confirmation page. */
router.post('/', async function(req, res, next) {

    //DELETE
    if (req.body.deleteLieu <1) {
        return res.render('lieu', {title: 'Lieu par défaut non supprimable'});        //Page title
    }

    if(req.body.deleteLieu!==undefined && req.body.deleteLieu>0) {

    if(req.body.deleteLieu!==undefined ) {
                await models.veterinaire.update({idLieu: null}, {where: {idLieu: req.body.deleteLieu}});
                await models.lieu.destroy({where: {idLieu: req.body.deleteLieu}});
                return res.render('lieu', {title: 'Lieu supprimé'});     //Page title
    }


    res.render('lieu', { title: 'Lieu bien supprimé', user:req.session});        //Page title
});

module.exports = router;