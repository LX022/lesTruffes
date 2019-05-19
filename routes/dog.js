var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET dog page. */
router.get('/', async function(req, res, next) {
    res.render('dog', { title: 'Oscar'});
});

module.exports = router;