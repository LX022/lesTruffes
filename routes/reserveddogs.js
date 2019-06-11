var express = require('express');
var router = express.Router();

/* GET reserveddogs page. */
router.get('/', async function (req, res, next) {

    if(req.session.privilege == 3)
    {
        let animals_asked_adoptant = await models.Animal_asked_Adoptant.findAll();

        res.render('reserveddogs', {title: 'Reserved dogs', animals_asked_adoptant:animals_asked_adoptant, user:req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});


});

module.exports = router;