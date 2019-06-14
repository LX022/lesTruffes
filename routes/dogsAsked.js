var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsAdmin page. */
router.get('/', async function (req, res, next) {
    if(req.session.privilege ===3)

    {
        //liste des personnes
        let personnes = await models.personne.findAll();

        //liste des chiens
        let myDogs = await models.animal.findAll();

        //Liste des chiens par ordre alphabétique
        let dogs = await models.animalAskedAdoptant.findAll({order: [['idAnimal', 'ASC']]});




        res.render('dogsAsked', {title: 'Gestion des adoptions', dogs:dogs, personnes:personnes, myDogs:myDogs,user:req.session});
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});

});



/* POST dogsAdmin page. */
router.post('/', async function (req, res) {

    if(req.session.privilege ===3)
    {

    //UPDATE
    if(req.body.UidAnimal!==undefined && req.body.UidPerson!==undefined) {
        if (req.body.UdateContratRecu !== undefined && req.body.UdateContratRecu !=='' && req.body.UdateContratRecu !==null ) {
            if(req.body.UdateCessionIcad!==undefined && req.body.UdateCessionIcad!=='' && req.body.UdateCessionIcad!==null){
                //avec contrat avec cession
                console.log("2");
                await models.animalAskedAdoptant.update({adoptionValidee:req.body.UadoptionValidee , contratAdoption:req.body.UcontratAdoption ,dateContratRecu:req.body.UdateContratRecu, dateCessionIcad: req.body.UdateCessionIcad, paiement: req.body.Upaiement ,commentaires:req.body.Ucommentaires},{where:{idAnimal:req.body.UidAnimal, idPersonne:req.body.UidPerson}});
            }else{
                //avec contrat sans cession
                console.log("3");
                await models.animalAskedAdoptant.update({adoptionValidee:req.body.UadoptionValidee , contratAdoption:req.body.UcontratAdoption ,dateContratRecu:req.body.UdateContratRecu, paiement: req.body.Upaiement ,commentaires:req.body.Ucommentaires},{where:{idAnimal:req.body.UidAnimal, idPersonne:req.body.UidPerson}});

            }
        }

        else {
            if (req.body.UdateCessionIcad !== undefined && req.body.UdateCessionIcad!=='' && req.body.UdateCessionIcad!==null) {
                //sans contrat avec cession
                console.log("4");
                await models.animalAskedAdoptant.update({adoptionValidee:req.body.UadoptionValidee , contratAdoption:req.body.UcontratAdoption , dateCessionIcad: req.body.UdateCessionIcad, paiement: req.body.Upaiement ,commentaires:req.body.Ucommentaires},{where:{idAnimal:req.body.UidAnimal, idPersonne:req.body.UidPerson}});

            } else {
                //sans contrat sans cession}
                console.log("5");
                await models.animalAskedAdoptant.update({adoptionValidee:req.body.UadoptionValidee , contratAdoption:req.body.UcontratAdoption , paiement: req.body.Upaiement ,commentaires:req.body.Ucommentaires},{where:{idAnimal:req.body.UidAnimal, idPersonne:req.body.UidPerson}});

            }
        }
    }

    //DELETE une adoption
    if(req.body.deleteidAnimal!==undefined && req.body.deleteidAnimal!==null  && req.body.deleteidPersonne!==undefined  && req.body.deleteidPersonne!==null){
        await models.animalAskedAdoptant.destroy({where:{idAnimal:req.body.deleteidAnimal, idPersonne:req.body.deleteidPersonne}});
    }

    //INSERT adoption
    if(req.body.InsertidAnimal!==undefined && req.body.InsertidPerson!==undefined){
        //est-ce qu'il existe déjà une pareille association ?
        let test = await models.animalAskedAdoptant.findAll({where:{idAnimal: req.body.InsertidAnimal, idPersonne:req.body.InsertidPerson}});
        if(test.length>0){}
        else{
        await models.animalAskedAdoptant.create({idAnimal: req.body.InsertidAnimal, idPersonne:req.body.InsertidPerson, adoptionValidee:0});
    }}

    //liste des personnes
    let personnes = await models.personne.findAll();

    //liste des chiens
    let myDogs = await models.animal.findAll();

    let dogs ;

    //depuis la vue dogAdmin ?
    if(req.body.idAnimalAsked!==undefined){
        //récupérer la liste des adoptions du chien
        dogs = await models.animalAskedAdoptant.findAll({where:{idAnimal:req.body.idAnimalAsked}});
    }
    else{
        //récupérer la liste des adoptions
         dogs = await models.animalAskedAdoptant.findAll();
    }

    //Afficher une info s'il n'y a pas d'adoption en cours pour le chien sélectionné
    let info;
    if(dogs.length<1 ){
        info ="Il n'y a pas d'adoption en cours concernant ce chien"
    }


    res.render('dogsAsked', {title: 'Gestion des adoptions', dogs:dogs, info:info, personnes:personnes, myDogs:myDogs,user:req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});

});

module.exports = router;