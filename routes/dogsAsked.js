var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsAdmin page. */
router.get('/', async function (req, res, next) {

    //liste des personnes
    let personnes = await models.personne.findAll();

    //liste des chiens
    let myDogs = await models.Animal.findAll();

    //Destroy


    //Liste des chiens par ordre alphabétique
    let dogs = await models.animalAskedAdoptant.findAll({order: [['idAnimal', 'DESC']]});

    //Calcule le plus grand id de la table
    let max = 0;
    for(let i =0;i<dogs.length;i++){
        if(dogs[i].idAnimal > max){
            max = dogs[i].idAnimal;
        }
    }
    max = max +1;

    res.render('dogsAsked', {title: 'Gestion des adoptions', dogs:dogs, max:max, personnes:personnes, myDogs:myDogs});        //Page title
});



/* POST dogsAdmin page. */
router.post('/', async function (req, res) {

    //INSERT adoption
    if(req.body.InsertidAnimal!==undefined && req.body.InsertidPerson!==undefined){
        await models.animalAskedAdoptant.create({idAnimal: req.body.InsertidAnimal, idPersonne:req.body.InsertidPerson});
    }

    let idAnimalAsked = req.body.idAnimalAsked;

    //liste des personnes
    let personnes = await models.personne.findAll();

    //liste des chiens
    let myDogs = await models.Animal.findAll();

    let dogs ;
    //depuis la vue dogAdmin ?
    if(req.body.idAnimalAsked!==undefined){
        dogs = await models.animalAskedAdoptant.findAll({where:{idAnimal:req.body.idAnimalAsked}});
    }
    else{
        //récupérer la liste des chiens à jour
         dogs = await models.animalAskedAdoptant.findAll();
    }

    //Afficher une info s'il n'y a pas d'adoption en cours pour le chien sélectionné
    let info;
    if(dogs.length<1 ){
        info ="Il n'y a pas d'adoption en cours"
    }

    //id max de la table
    let max = 0;
    for(let i =0;i<dogs.length;i++){
        if(dogs[i].idAnimal > max){
            max = dogs[i].idAnimal;
        }
    }
    max = max +1;


    res.render('dogsAsked', {title: 'Gestion des adoptions', dogs:dogs, max:max, info:info, personnes:personnes, myDogs:myDogs, idAnimalAsked:idAnimalAsked});        //Page title

});

module.exports = router;