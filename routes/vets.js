var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vets page. */
router.get('/', async function (req, res, next) {

    //DELETE vétérinaire
    if(req.query.idmyveto!==undefined && req.query.idmyveto !==null){
        await models.animalHasVeterinaire.destroy({where:{idVeterinaire:req.query.idmyveto}});
        await models.veterinaire.destroy({where:{idVeterinaire:req.query.idmyveto}});
    }

    //récupérer les vétérinaires
    let veterinaires = await models.veterinaire.findAll({order: [['idVeterinaire', 'ASC']]});

    //récupérer les lieux
    let lieux = await models.lieu.findAll();

    let idcount = await models.veterinaire.findAll();
    let max = 0;
    for(let i =0;i<idcount.length;i++){
        if(idcount[i].idVeterinaire > max){
            max = idcount[i].idVeterinaire;
        }
    }
    max = max +1;

    res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires, max:max, lieux:lieux});        //Page title
});

/* POST vets page. */
router.post('/', async function (req, res) {


    let veterinaires;


    if(req.body.lieuV!==undefined) {
        //Recherche par lieu
        veterinaires = await models.veterinaire.findAll({where:{idLieu:req.body.lieuV}, order: [['idVeterinaire', 'ASC']]});
    }

    if(req.body.idVeterinaire!==undefined){
    //ADD vet
    await models.veterinaire.create({idVeterinaire:req.body.idVeterinaire, nomV: req.body.nomV, prenomV:req.body.prenomV});
    veterinaires = await models.veterinaire.findAll({order: [['idVeterinaire', 'ASC']]});}

    //récupérer les lieux
    let lieux = await models.lieu.findAll();

    let idcount = await models.veterinaire.findAll();
    let max = 0;
    for(let i =0;i<idcount.length;i++){
        if(idcount[i].idVeterinaire > max){
            max = idcount[i].idVeterinaire;
        }
    }
    max = max +1;
    res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires, max:max,  lieux:lieux});        //Page title


});

module.exports = router;