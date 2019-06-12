var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET persons page. */
router.get('/', async function (req, res, next) {

    if(req.session.privilege == 3)
    {
        let persons = await models.personne.findAll({});
        res.render('persons', {title: 'Membres', persons: persons, user:req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});



});

/* POST persons page. */
router.post('/', async function (req, res) {


    let persons;


    if(req.body.personsFA!==undefined) {
        //Recherche les personnes par type FA ou pas
        if(req.body.personsFA==2){
            persons = await models.Personne.findAll();
        }else {
            persons = await models.Personne.findAll({where:{fa:req.body.personsFA}});
        }

    }
    else{
        persons = await models.Personne.findAll();
    }


    res.render('persons', {title: 'Personnes enregistrées', persons:persons, user:req.session});        //Page title


});

// Update put
router.put('/', (req, res, next) => {
    models.Personne.update({
        idPersonne: req.body.idPersonne,
        nomP: req.body.nomP,
        prenomP: req.body.prenomP,
        emailP: req.body.emailP,
        facebookP: req.body.facebookP,
        //telPortableP: req.body.telPortableP,
        rueP: req.body.rueP,
        dateNaissanceP : req.body.dateNaissanceP,
        //idPrevisiteFa: 1
    });
});

// DELETE
router.delete('/:idPersonne', (req, res, next) => {
    models.Personne.destroy({
        where: {idPersonne: req.params.idPersonne}
    }).then((nbRows) => {
        res.send(`item deleted!'`);
    });
})

module.exports = router;