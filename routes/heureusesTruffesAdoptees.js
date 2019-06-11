var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET heureusesTruffesAdoptees page. */
router.get('/', function(req, res, next) {
    res.render('heureusesTruffesAdoptees', { title: "Album des truffes adoptées", user: req.session});
});

module.exports = router;