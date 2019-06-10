var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'Qui sommes-nous ?' });        //Page title

    console.log(req.session.loggedin + " " + req.session.privilege + "----------------------------------------------------------")
});

module.exports = router;