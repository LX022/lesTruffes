var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsFA page. */
router.get('/', async function (req, res, next) {


    //Si on est sûr que le lien existe, on le destroy
    if(req.query.idAnimal!==undefined && req.query.idAnimal !==null){
        await models.animalHasFa.destroy({where:{idAnimal:req.query.idAnimal}});
    }

    //Liste des chiens par ordre alphabétique
    let dogs = await models.animalHasFa.findAll({order: [['idAnimal', 'DESC']]});

    //Calcule le plus grand id de la table
    let max = 0;
    for(let i =0;i<dogs.length;i++){
        if(dogs[i].idAnimal > max){
            max = dogs[i].idAnimal;
        }
    }
    max = max +1;

    res.render('dogsFA', {title: "Gestion des chiens en famille d'accueil", dogs:dogs, max:max});        //Page title
});



/* POST dogsFA page. */
router.post('/', async function (req, res) {

    //récupérer la liste des chiens à jour
    let dogs = await models.animalHasFa.findAll({order: [['idAnimal', 'DESC']]});

    //id max de la table
    let max = 0;
    for(let i =0;i<dogs.length;i++){
        if(dogs[i].idAnimal > max){
            max = dogs[i].idAnimal;
        }
    }
    max = max +1;
    res.render('dogsFA', {title: "Gestion des chiens en famille d'accueil", dogs:dogs, max:max});        //Page title

});

module.exports = router;