var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsFA page. */
router.get('/', async function (req, res, next) {

    //liste des personnes
    let personnes = await models.personne.findAll();

    //liste des chiens
    let dogs = await models.Animal.findAll();

    //Liste liens dogsFA
    let dogsFA = await models.animalAskedAdoptant.findAll();


    res.render('dogsFA', {title: "Gestion des chiens en famille d'accueil", dogs:dogs, personnes:personnes, dogsFA:dogsFA});        //Page title
});

/* POST dogsFA page. */
router.post('/', async function (req, res, next) {


    //DESTROY
    if(req.body.idAnimalFA!==undefined && req.body.idPersonneFA!==undefined && req.body.dateDebutFA!==undefined){
        await models.animalHasFa.destroy({where:{idAnimal:req.body.idAnimalFA, idPersonne:req.body.idPersonneFA, dateDebut:req.body.dateDebutFA}});
    }

    //INSERT lien dog/fa
    if(req.body.InsertidFA!==undefined && req.body.InsertidAnimal!==undefined && req.body.InsertdateDebut!==undefined){
        let existe= await models.animalHasFa.findAll({where:{idAnimal:req.body.InsertidAnimalFA, idPersonne: req.body.InsertidFA, dateDebut:req.body.InsertdateDebut
            }});
        if(existe.length<1){
            if(req.body.dateFin!==undefined){
                await models.animalHasFa.create({idAnimal: req.body.InsertidAnimal, idPersonne:req.body.InsertidFA, dateDebut: req.body.InsertdateDebut, dateFin:req.body.insertDateFin, commentaires:insertCommentaires});
            }}
    }

    //Liste des chiens
    let dogs = await models.Animal.findAll();

    //Liste des personnes
    let personnes = await models.personne.findAll();

    //Liste des chiens dans des FA
    let dogsFA = await models.animalHasFa.findAll();
    let info;

    //Si c'est depuis la page chien
    if( req.body.idAnimal!==undefined){
        dogsFA = await models.animalHasVeterinaire.findAll({where:{idAnimal:req.body.idAnimal}});
        if(soins.length<1){info="Famille(s) d'accueil de ce chien";}
    }
    //TODO Si c'est depuis la page FA






    res.render('dogsFA', {title: "Gestion des chiens en famille d'accueil", dogsFA:dogsFA, info:info, dogs:dogs, personnes:personnes});        //Page title
});




module.exports = router;