var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vets page. */
router.get('/', async function (req, res, next) {
    if(req.query.idmyveto!==undefined && req.query.idmyveto !==null){
        await models.veterinaire.destroy({where:{idVeterinaire:req.query.idmyveto}});
    }
    let veterinaires = await models.veterinaire.findAll({order: [['idVeterinaire', 'ASC']]});
    let max = 0;

    for(let i =0;i<veterinaires.length;i++){
        if(veterinaires[i].idVeterinaire > max){
            max = veterinaires[i].idVeterinaire;
        }
    }
    max = max +1;
    res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires, max:max});        //Page title
});

/* POST vets page. */
router.post('/', async function (req, res) {

    await models.veterinaire.create({idVeterinaire:req.body.idVeterinaire, nomV: req.body.nomV, prenomV:req.body.prenomV});
    let veterinaires = await models.veterinaire.findAll({order: [['idVeterinaire', 'DESC']]});
    let max = 0;
    for(let i =0;i<veterinaires.length;i++){
        if(veterinaires[i].idVeterinaire > max){
            max = veterinaires[i].idVeterinaire;
        }
    }
    max = max +1;
    res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires, max:max});        //Page title


});

module.exports = router;