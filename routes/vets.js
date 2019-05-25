var express = require('express');
var router = express.Router();

/* GET persons page. */


router.get('/', function(req, res, next) {
    if(req.session.privilege == '2') {
        res.render('vets', { title: 'Vétérinaires enregistrés' });        //Page title
    }
    else {
        res.render('about', { title: 'Home page' });        //Page title
    }
});

module.exports = router;