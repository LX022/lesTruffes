var express = require('express');
var router = express.Router();

/* GET adoption page. */
router.get('/', async function(req, res, next) {
    res.render('livredor', { title: "Livre d'or" });        //Page title
});

module.exports = router;