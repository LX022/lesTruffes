var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET heureusesTruffesAdoptees page. */
router.get('/', function(req, res, next) {
    if(req.session.privilege >= 1) {
    res.render('heureusesTruffesAdoptees', { title: "Album des truffes adoptées", user: req.session});}
else
    {
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});
    }
});

module.exports = router;