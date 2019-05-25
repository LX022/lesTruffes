var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vet page. */
router.get('/', async function(req, res, next) {


    let id = req.query.idVeterinaire;
    let veto = await models.veterinaire.findByPk(id);
    let nom = veto.nomV +" " + veto.prenomV;

    res.render('vet', { title: nom, veto : veto });        //Page title
});

module.exports = router;