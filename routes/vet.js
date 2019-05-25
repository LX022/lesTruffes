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


/* UPDATE vet page. */
router.post('/', async function (req, res) {
    console.log(req.body.idVeterinaire);
    //idLieu: req.body.idLieu à updater et faire le lien avec la table lieu, si n'existe pas crée
    await models.veterinaire.update({nomV: req.body.nomV, prenomV:req.body.prenomV, cliniqueV: req.body.cliniqueV, rueV: req.body.rueV, specialiteV: req.body.specialiteV, commentaireV: req.body.commentaireV, tarifs: req.body.tarifs, bloque: req.body.bloque}, {where: {idVeterinaire: req.body.idVeterinaire}});
    let veto = await models.veterinaire.findByPk(req.body.idVeterinaire);
    let nom = veto.nomV +" " + veto.prenomV;

    res.render('vet', { title: nom, veto : veto });        //Page title

});

module.exports = router;