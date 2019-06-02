var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET persons page. */
router.get('/', async function (req, res, next) {

    let persons = await models.Personne.findAll({});
    res.render('persons', {title: 'Membres', persons: persons});        //Page title

});

// Update put
router.put('/', (req, res, next) => {
    models.Personne.update({
        nomP: req.body.nomP,
        prenomP: req.body.prenomP,
        emailP: req.body.emailP,
        facebookP: req.body.facebookP,
        //telPortableP: req.body.telPortableP,
        rueP: req.body.rueP,
        dateNaissanceP: req.body.dateNaissanceP,
        //idPrevisiteFa: 1
    }, {
        where: {id: req.body.id}
    }).then((nbRows) => {
        res.send(`item updated!'`)
    });
    //res.render('persons', {title: 'Membres', persons: persons});
});

// DELETE
router.delete('/:idPersonne', (req, res, next) => {
    models.Personne.destroy({
        where: {idPersonne: req.params.idPersonne}
    });
})

module.exports = router;