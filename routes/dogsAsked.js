var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsAdmin page. */
router.get('/', async function (req, res, next) {

    //Si on est sûr que le lien existe, on le destroy
    if(req.query.idmydogasked!==undefined && req.query.idmydogasked !==null && req.query.idPersonne!==undefined && req.query.idPersonne !==null){
        await models.animalAskedAdoptant.destroy({where:{idAnimal:req.query.idmydogasked, idPersonne:req.body.idPersonne}});
    }

    //Liste des liens avec le nom des chiens et des personnes (include)

    //Calcule le plus grand id de la table


    res.render('dogsAsked', {title: 'Gestion des adoptions'});        //Page title
});



/* POST dogsFA page. */
router.post('/', async function (req, res) {

    //créer une association dog/adoptant

    //récupérer la liste des liens à jour


    //id max de la table

    res.render('dogsAsked', {title: 'Gestion des adoptions'});        //Page title

});

module.exports = router;