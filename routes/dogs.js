var models = require('../models');
var express = require('express');
var router = express.Router();
// var handerBars = require('handlebars-intl');

/* GET dogs page. */
router.get('/', async function (req, res, next) {

    let dogsToAdopt =  await models.animal.findAll({order: [['NomAnimal', 'ASC']]});

    let adoptedDogs = await models.animalAskedAdoptant.findAll();
    let dogs = [];
    let isAdopted;


    // On envoie que les truffes non adoptées
    for (let i = 0; i < dogsToAdopt.length; i++) {
        isAdopted = false;
        for (let j = 0; j < adoptedDogs.length; j++) {
            if (dogsToAdopt[i].idAnimal === adoptedDogs[j].idAnimal) {
                if (adoptedDogs[j].adoptionValidee === null || adoptedDogs[j].adoptionValidee === undefined) {
                    dogs[i]=(dogsToAdopt[i]);
                }
                isAdopted=true;
            }

        }
        if(isAdopted===false){
            dogs[i]=(dogsToAdopt[i]);

        }
    }



    res.render('dogs', {title: 'Nos truffes à adopter', dogs: dogs,user:req.session});        //Page title
});


/* GET dogs page. */
router.post('/', async function (req, res, next) {

    let tri = req.body.tri;

    let dogsToAdopt =[];
    if(tri ==1){
        console.log("1");
        dogsToAdopt = await models.animal.findAll({order: [['NomAnimal', 'ASC']]});
    }
    if(tri==2){
        console.log("2");
        dogsToAdopt = await models.animal.findAll({order: [['NomAnimal', 'DESC']]});
    }
    if(tri==3){
        console.log("3");
        dogsToAdopt = await models.animal.findAll({order: [['dateNaissAnimal', 'ASC']]});
    }
    if(tri==4){
        console.log("4");
        dogsToAdopt = await models.animal.findAll({order: [['dateNaissAnimal', 'DESC']]});
    }

    let adoptedDogs = await models.animalAskedAdoptant.findAll();
    let dogs = [];
    let isAdopted;


    // On envoie que les truffes non adoptées
    for (let i = 0; i < dogsToAdopt.length; i++) {
        isAdopted = false;
        for (let j = 0; j < adoptedDogs.length; j++) {
            if (dogsToAdopt[i].idAnimal === adoptedDogs[j].idAnimal) {
                if (adoptedDogs[j].adoptionValidee === null || adoptedDogs[j].adoptionValidee === undefined) {
                    dogs[i]=(dogsToAdopt[i]);
                }
                isAdopted=true;
            }

        }
        if(isAdopted===false){
            dogs[i]=(dogsToAdopt[i]);

        }
    }



    res.render('dogs', {title: 'Nos truffes à adopter', dogs: dogs,user:req.session});        //Page title
});





module.exports = router;