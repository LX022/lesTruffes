var express = require('express');
var router = express.Router();

/* GET adoption page. */
router.get('/', function(req, res, next) {
    res.render('adoption', { title: 'Comment adopter ?' });        //Page title
});

module.exports = router;