var express = require('express');
var router = express.Router();

/* GET adoption page. */
router.get('/', async function(req, res, next) {
    res.render('livredor', { title: "Souvenirs", user: req.session });        //Page title
});

module.exports = router;