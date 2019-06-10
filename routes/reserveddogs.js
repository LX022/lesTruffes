var express = require('express');
var router = express.Router();

/* GET reserveddogs page. */
router.get('/', async function (req, res, next) {

    let animals_asked_adoptant = await models.Animal_asked_Adoptant.findAll();

    res.render('reserveddogs', {title: 'Reserved dogs', animals_asked_adoptant:animals_asked_adoptant, user:req.session});        //Page title
});

module.exports = router;