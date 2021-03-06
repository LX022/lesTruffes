var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vets page. */
router.get('/', async function (req, res, next) {

    let pays = await models.pays.findAll();

    if(req.session.privilege >= 2)
    {
        //DELETE vétérinaire
        if(req.query.idmyveto!==undefined && req.query.idmyveto !==null){
            await models.animalHasVeterinaire.destroy({where:{idVeterinaire:req.query.idmyveto}});
            await models.veterinaire.destroy({where:{idVeterinaire:req.query.idmyveto}});
        }

        //récupérer les vétérinaires
        let veterinaires = await models.veterinaire.findAll({order: [['idVeterinaire', 'ASC']]});

        //récupérer les lieux
        let lieux = await models.lieu.findAll();


        res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires, lieux:lieux, user:req.session,  pays:pays});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});


});

/* POST vets page. */
router.post('/', async function (req, res) {


    let veterinaires;


    if(req.body.lieuV!==undefined) {
        //Recherche par lieu
        veterinaires = await models.veterinaire.findAll({where:{idLieu:req.body.lieuV}, order: [['idVeterinaire', 'ASC']]});
    }

    if(req.body.nomV!==undefined){
    //ADD vet
    await models.veterinaire.create({nomV: req.body.nomV, prenomV:req.body.prenomV});
    veterinaires = await models.veterinaire.findAll({order: [['idVeterinaire', 'ASC']]});}

    //récupérer les lieux
    let lieux = await models.lieu.findAll();

    res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires, lieux:lieux, user:req.session});        //Page title


});

module.exports = router;