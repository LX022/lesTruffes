var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET dogs page. */
router.get('/', async function(req, res, next) {
    res.render('dogs', { title: 'Nos truffes à adopter'});
});

module.exports = router;