var express = require('express');
var router = express.Router();

/* GET don page. */
router.get('/', async function(req, res, next) {
    res.render('don');        //Page title
});

module.exports = router;