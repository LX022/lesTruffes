var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {



    res.render('about', { title: 'Qui sommes-nous ?' , user:req.session.username});        //Page title

});

module.exports = router;