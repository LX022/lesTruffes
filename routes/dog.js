var express = require('express');
var router = express.Router();
var models = require('../models');
var fs = require('fs');

/* GET dog page. */
router.get('/', async function (req, res, next) {

   let directory = '../public/images/animals/';
   let id = req.query.idAnimal;
    let x = 0;
   let dog = await models.Animal.findByPk(id);
   let nom = dog.nomAnimal;

   fs.readdir(directory, (err, files) => {
        files.forEach(file => {
            console.log(file.charAt(9))
            x++;

        });
    });

    console.log("-------------______________________________------------------------_____________________--- "+ x)
    res.render('dog', {title: nom,dog : dog});        //Page title

});

module.exports = router;