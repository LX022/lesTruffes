var express = require('express');
var router = express.Router();

/* GET adoption page. */
router.get('/', async function(req, res, next) {
    res.render('livredor', { title: "Souvenirs" });        //Page title
});

module.exports = router;