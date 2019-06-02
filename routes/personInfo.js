var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET personInfo page. */
router.get('/:idPersonne', async function (req, res, next) {

    let idPersonne = req.params.idPersonne;

    let person = await models.Personne.findByPk(idPersonne);
    let nom = person.prenomP + " " + person.nomP;

    res.render('personInfo', {title: nom, person: person});        //Page title

});

module.exports = router;