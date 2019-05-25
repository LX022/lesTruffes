var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogs page. */
router.get('/', async function(req, res, next) {

    let id = req.body.idVeterinaire;
    let veterinaire = await models.Veterinaire.findByPk(id);

    res.render('dogs', { title: 'Nos truffes à adopter', veterinaire : veterinaire });        //Page title
});

module.exports = router;