var express = require('express');
var models = require('../models');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('logout');
});

router.post('/', async function (req, res, next) {

    req.session.destroy();
    res.redirect('logout');
    res.end();

});


module.exports = router;




