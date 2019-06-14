var express = require('express');
var router = express.Router();

/* GET about page. */

router.get('/', function (req, res, next) {
    console.log(req.body.session);
    res.render('about', {title: req.i18n.__("about.title"), user: req.session});        //Page title
});

module.exports = router;