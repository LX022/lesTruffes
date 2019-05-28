var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsAdmin page. */
router.get('/', async function (req, res, next) {

    //Si on est sûr que le lien existe, on le destroy
    if(req.query.idmydogfa!==undefined && req.query.idmydogfa !==null){
        await models.animalHasFa.destroy({where:{idAnimal:req.query.idmydogfa, idPersonne:req.body.idPersonne}});
    }

    //Liste des liens avec le nom des chiens et des personnes (include)

    //Calcule le plus grand id de la table


    res.render('dogsAdmin', {title: 'Gestion des chiens'});        //Page title
});



/* POST dogsFA page. */
router.post('/', async function (req, res) {

    //créer une association dog/FA

    //récupérer la liste des liens à jour


    //id max de la table

    res.render('dogsAdmin', {title: 'Gestion des chiens'});        //Page title

});

module.exports = router;