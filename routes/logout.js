var express = require('express');
var models = require('../models');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render('logout', {user: req.session});
});

router.post('/', async function (req, res, next) {

    req.session.destroy();
    res.redirect('logout', {user: req.session});
    res.end();

});


module.exports = router;




