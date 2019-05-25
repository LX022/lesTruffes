var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vets page. */
router.get('/', async function (req, res, next) {
    if(req.query.idmyveto!==undefined && req.query.idmyveto !==null){
        await models.veterinaire.destroy({where:{idVeterinaire:req.query.idmyveto}});
    }

    let veterinaires = await models.veterinaire.findAll({order: [['nomV', 'ASC']]});
    res.render('vets', {title: 'Vétérinaires enregistrés', veterinaires:veterinaires});        //Page title
});

module.exports = router;