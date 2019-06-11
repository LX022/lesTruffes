var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    if(req.session.privilege >= 1)
        res.render('admin', { title: 'Fonctions administrateurs',user:req.session });        //Page title
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});
});

module.exports = router;