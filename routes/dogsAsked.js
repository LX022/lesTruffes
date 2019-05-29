var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsAdmin page. */
router.get('/', async function (req, res, next) {


    //Si on est sûr que le lien existe, on le destroy
    if(req.query.idAnimal!==undefined && req.query.idAnimal !==null){
        await models.animalAskedAdoptant.destroy({where:{idAnimal:req.query.idAnimal}});
    }

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

    res.render('dogsAsked', {title: 'Gestion des adoptions', dogs:dogs, max:max});        //Page title
});



/* POST dogsAdmin page. */
router.post('/', async function (req, res) {

    let dogs ;
    //depuis la vue dogAdmin ?
    if(req.body.idAnimalAsked!==undefined){
        dogs = await models.animalAskedAdoptant.findAll({where:{idAnimal:req.body.idAnimalAsked}});
    }
    else{
        //récupérer la liste des chiens à jour
         dogs = await models.animalAskedAdoptant.findAll();
    }

    let info;
    if(dogs.length<1 ){
        info ="Il n'y a pas d'adoption en cours"
    }
    else{
        info = "Adoption(s) en cours"
    }

    //id max de la table
    let max = 0;
    for(let i =0;i<dogs.length;i++){
        if(dogs[i].idAnimal > max){
            max = dogs[i].idAnimal;
        }
    }
    max = max +1;
    res.render('dogsAsked', {title: 'Gestion des adoptions', dogs:dogs, max:max, info:info});        //Page title

});

module.exports = router;