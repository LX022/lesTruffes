var express = require('express');
var router = express.Router();

/* GET schop page. */
router.get('/', async function(req, res, next) {
    res.render('shop', { title: 'La boutique des truffes' });        //Page title
});

module.exports = router;