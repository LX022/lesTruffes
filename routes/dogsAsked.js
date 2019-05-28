var express = require('express');
var router = express.Router();

/* GET dogsAsked page. */
router.get('/', function(req, res, next) {
    res.render('dogsAsked', { title: "Gestion des adoptions" });        //Page title
});

module.exports = router;