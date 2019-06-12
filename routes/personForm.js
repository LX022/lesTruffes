var express = require('express');
var router = express.Router();
var models = require('../models');
var session = require('express-session');


/* GET personForm page. */
router.get('/', function (req, res, next) {
    res.render('personForm', {title: "S'inscrire", user:req.session});
});

/* POST personForm page. */
router.post('/',  function (req, res) {

    let trouve = models.personne.findAll({where: {idPersonne: req.body.idPersonne}});
    if (trouve !== undefined && trouve !== null) {
         models.personne.create({
            idPersonne: req.body.idPersonne,
            nomP: req.body.nomP,
            prenomP: req.body.prenomP,
            emailP: req.body.emailP,
            facebookP: req.body.facebookP,
            //telPortableP: req.body.telPortableP,
            rueP: req.body.rueP,
            dateNaissanceP : req.body.dateNaissanceP,
            //idPrevisiteFa: 1
             username : req.body.username,
             privilege : 0,
             password : req.body.password,


        });

        req.session.loggedin = true;
        req.session.username = req.body.username;
        req.session.privilege = 0;
        let persons =  models.personne.findAll({order: [['idPersonne', 'ASC']]});

        res.render('personConfirm', {title: 'Confirmation', prenomP: req.body.prenomP, user:req.session });        //Page title
    } else {
        res.render('persons', {title: 'Membres', persons: persons, user:req.session});        //Page title

    }

});

module.exports = router;