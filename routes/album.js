var express = require('express');
var router = express.Router();

/* GET album page. */
router.get('/', async function(req, res, next) {
    res.render('album', { title: 'Truffes dans les étoiles' });        //Page title
});

module.exports = router;