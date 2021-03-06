var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET about page. */
router.get('/', async function (req, res, next) {

    if(req.session.privilege === 3)
    {
        //Liste des animauxAdoptants
        let animalAskedAdoptant = await models.animalAskedAdoptant.findAll();

        let persons = await models.personne.findAll();
        let animals = await models.animal.findAll();

        let personsAnimals = {nomPeronne:null, prenomPersonne:null, nomAnimal:null};

        for (let i = 0; i < animalAskedAdoptant.length; i++) {
            for (let j = 0; j < persons.length; j++) {
                if(animalAskedAdoptant.idPersonne===persons.idPersonne){

                }
            }
        }

        res.render('adoptantsAdmin', {title: 'Liste des adoptants et de leur animal', animalAskedAdoptant:animalAskedAdoptant,user:req.session});        //Page title
    }
    else
    {
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});
    }

});

module.exports = router;