var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    models.Animal.findAll({
        include: [ models.Adoption ]
    }).then(function(users) {
        res.render('index', {
            title: 'Une truffe et des pattes',        //Page title
            users: users
        });
    });
});

module.exports = router;