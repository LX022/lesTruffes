var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogsAdmin page. */
router.get('/', async function (req, res, next) {
    if(req.session.privilege >= 1)
    {
        //Liste des chiens
        let dogs = await models.animal.findAll({order: [['idAnimal', 'ASC']]});

        res.render('dogsAdmin', {title: 'Gestion des chiens', dogs:dogs,user:req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});


});



/* POST dogsAdmin page. */
router.post('/', async function (req, res) {

    if(req.session.privilege >= 1) {
        //TESTER les paramètres rentrés, car ils sont de types number et date, le type texte ne pose pas de problème si rien n'est rentré
        if (req.body.nomAnimal !== undefined) {
            if (req.body.dateEntreeAnimal === undefined || req.body.dateEntreeAnimal == null || req.body.dateEntreeAnimal === '') {
                if (req.body.icad === undefined || req.body.icad == null || req.body.icad === '') {
                    //Créer un chien sans date d'entrée et sans ICAD
                    await models.animal.create({nomAnimal: req.body.nomAnimal});

                } else {
                    //Créer un chien sans date d'entrée avec ICAD
                    await models.animal.create({
                        icad: req.body.icad,
                        nomAnimal: req.body.nomAnimal
                    });
                }
            } else {
                //Créer un chien avec date d'entrée sans ICAD
                if (req.body.icad === undefined || req.body.icad == null || req.body.icad === '') {
                    await models.animal.create({
                        nomAnimal: req.body.nomAnimal,
                        dateEntreeAnimal: req.body.dateEntreeAnimal
                    });
                } else {
                    //Créer un chien avec date entrée et avec ICAD
                    await models.animal.create({
                        icad: req.body.icad,
                        nomAnimal: req.body.nomAnimal,
                        dateEntreeAnimal: req.body.dateEntreeAnimal
                    });
                }
            }
        }


        if (req.body.idmydog !== undefined) {
            //DELETE un chien
            await models.animalAskedAdoptant.destroy({where: {idAnimal: req.body.idmydog}});
            await models.animalHasFa.destroy({where: {idAnimal: req.body.idmydog}});
            await models.animalHasVeterinaire.destroy({where: {idAnimal: req.body.idmydog}});
            await models.animalHasCoVoit.destroy({where: {idAnimal: req.body.idmydog}});
            await models.animalHasEntente.destroy({where: {idAnimal: req.body.idmydog}});
            await models.animal.destroy({where: {idAnimal: req.body.idmydog}});
        }
        //récupérer la liste des chiens à jour
        let dogs = await models.animal.findAll({order: [['idAnimal', 'ASC']]});


        res.render('dogsAdmin', {title: 'Gestion des chiens', dogs: dogs, user: req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});

});

module.exports = router;