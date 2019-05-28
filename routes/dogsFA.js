var express = require('express');
var router = express.Router();

/* GET dogsFA page. */
router.get('/', function(req, res, next) {
    res.render('dogsFA', { title: "Chiens en famille d'accueil" });        //Page title
});

module.exports = router;