var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vet page. */
router.get('/', async function(req, res, next) {
    //Recherche du vétérinaire à afficher
    let id = req.query.idVeterinaire;
    let veto = await models.veterinaire.findByPk(id);

    //Recherche le lieu du véto et les lieux en général
    let lieu = await models.lieu.findByPk(veto.idLieu);
    let pays = await models.pays.findAll();
    let lieux = await models.lieu.findAll({order: [['ville', 'ASC']]});

    //titre
    let nom = veto.nomV +" " + veto.prenomV;

    res.render('vet', { title: nom, veto : veto, lieux:lieux, lieu:lieu, pays:pays });   //Page title
});


/* UPDATE vet page. */
router.post('/', async function (req, res) {

    //UPDATE : si le lieu est vide alors remettre la valeur null
    if(req.body.idLieu==='' && req.body.idVeterinaire.idLieu!==null){
        await models.veterinaire.update({nomV: req.body.nomV, prenomV:req.body.prenomV, cliniqueV: req.body.cliniqueV, rueV: req.body.rueV, specialiteV: req.body.specialiteV, commentaireV: req.body.commentaireV, tarifs: req.body.tarifs, bloque: req.body.bloque}, {where: {idVeterinaire: req.body.idVeterinaire}});
    }else{
        await models.veterinaire.update({idLieu:req.body.idLieu, nomV: req.body.nomV, prenomV:req.body.prenomV, cliniqueV: req.body.cliniqueV, rueV: req.body.rueV, specialiteV: req.body.specialiteV, commentaireV: req.body.commentaireV, tarifs: req.body.tarifs, bloque: req.body.bloque}, {where: {idVeterinaire: req.body.idVeterinaire}});
    }

    //recherche du vétérinaire màj
    let veto = await models.veterinaire.findByPk(req.body.idVeterinaire);

    //titre
    let nom = veto.nomV +" " + veto.prenomV;

    //Recherche le lieu du véto et les lieux en général
    let lieu = await models.lieu.findByPk(veto.idLieu);
    let pays = await models.pays.findAll();
    let lieux = await models.lieu.findAll({order: [['ville', 'ASC']]});

    res.render('vet', { title: nom, veto : veto , lieux:lieux, lieu:lieu, pays:pays});        //Page title

});

module.exports = router;