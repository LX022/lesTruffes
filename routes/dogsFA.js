var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsFA page. */
router.get('/', async function (req, res, next) {

    //liste des personnes
    let personnes = await models.Personne.findAll();

    //liste des chiens
    let dogs = await models.animal.findAll();

    //Liste liens dogsFA
    let dogsFA = await models.animalHasFa.findAll();


    res.render('dogsFA', {title: "Gestion des chiens en famille d'accueil", dogs:dogs, personnes:personnes, dogsFA:dogsFA});        //Page title
});

/* POST dogsFA page. */
router.post('/', async function (req, res, next) {

    //UPDATE
    if(req.body.updateidAnimal!==undefined && req.body.updateidPersonne!==undefined && req.body.updatedateDebut!==undefined){
        if(req.body.updatedateFin!==undefined && req.body.updatedateFin!=='' && req.body.updatedateFin!==null){
            await models.animalHasFa.update({dateFin:req.body.updatedateFin, commentaire:req.body.updatecommentaire}, {where:{idAnimal:req.body.updateidAnimal, idPersonne:req.body.updateidPersonne, dateDebut:req.body.updatedateDebut}});
        }else {
            await models.animalHasFa.update({commentaire:req.body.updatecommentaire}, {where:{idAnimal:req.body.updateidAnimal, idPersonne:req.body.updateidPersonne, dateDebut:req.body.updatedateDebut}});
        }
    }

    //DESTROY
    if(req.body.idAnimalFA!==undefined && req.body.idPersonneFA!==undefined && req.body.dateDebutFA!==undefined){
        await models.animalHasFa.destroy({where:{idAnimal:req.body.idAnimalFA, idPersonne:req.body.idPersonneFA, dateDebut:req.body.dateDebutFA}});
    }

    //INSERT lien dog/fa
    let warning;
    if(req.body.InsertidFA!==undefined && req.body.InsertidAnimal!==undefined && req.body.InsertdateDebut!==undefined){
        let existe= await models.animalHasFa.findAll({where:{idAnimal:req.body.InsertidAnimal, idPersonne: req.body.InsertidFA, dateDebut:req.body.InsertdateDebut
            }});
        if(existe.length<1){
            if(req.body.dateFin!==undefined && req.body.dateFin!=='' && req.body.dateFin!==null){
                console.log("avec date fin"+" " +req.body.insertDateFin);
                await models.animalHasFa.create({idAnimal: req.body.InsertidAnimal, idPersonne:req.body.InsertidFA, dateDebut: req.body.InsertdateDebut, dateFin:req.body.insertDateFin, commentaire:req.body.insertCommentaires});
            }else {
                console.log("sans date fin"+" " +req.body.insertDateFin);
                await models.animalHasFa.create({idAnimal: req.body.InsertidAnimal, idPersonne:req.body.InsertidFA, dateDebut: req.body.InsertdateDebut, commentaire:req.body.insertCommentaires});

            }}else{
            warning="Insertion impossible. L'association : chien + famille d'accueil + date d'entrée existe déjà.";
        }
    }

    //Liste des chiens
    let dogs = await models.animal.findAll();

    //Liste des personnes
    let personnes = await models.Personne.findAll();

    //Liste des chiens dans des FA
    let dogsFA = await models.animalHasFa.findAll();
    let info;

    //Si c'est depuis la page chien
    if( req.body.idAnimal!==undefined){
        dogsFA = await models.animalHasFa.findAll({where:{idAnimal:req.body.idAnimal}});
        if(dogsFA.length<1){ info="Ce chien n'est pas dans une famille d'accueil";}else { info="Famille(s) d'accueil de ce chien";}
    }
    //TODO Si c'est depuis la page FA


    res.render('dogsFA', {title: "Gestion des chiens en famille d'accueil", dogsFA:dogsFA, info:info, dogs:dogs, personnes:personnes, warning:warning});        //Page title
});




module.exports = router;