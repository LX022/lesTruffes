var express = require('express');
var router = express.Router();

/* GET partenaires page. */
router.get('/', async function(req, res, next) {
    res.render('partenaires', { title: 'Nos partenaires' });        //Page title
});

module.exports = router;