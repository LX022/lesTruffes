var express = require('express');
var router = express.Router();

/* GET don page. */
router.get('/', async function(req, res, next) {
    res.render('don', { title: 'Faire un don' });        //Page title
});

module.exports = router;