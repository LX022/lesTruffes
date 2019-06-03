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

            let test = await models.veterinaire.findAll({where: {idLieu: req.body.deleteLieu}});
            if (test.length > 0) {

                await models.veterinaire.update({idLieu: 0}, {where: {idLieu: req.body.deleteLieu}});
                await models.lieu.destroy({where: {idLieu: req.body.deleteLieu}});
                return res.render('lieu', {title: 'Lieu supprimé'});     //Page title
            } else {
                await models.lieu.destroy({where: {idLieu: req.body.deleteLieu}});
                return res.render('lieu', {title: 'Lieu supprimé'});   //Page title


        }
    }

    res.render('lieu', { title: 'Lieu bien supprimé'});        //Page title
});

module.exports = router;