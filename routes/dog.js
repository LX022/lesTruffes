var express = require('express');
var router = express.Router();
var models = require('../models');
var fs = require('fs');

/* GET dog page. */
router.get('/', async function (req, res, next) {

    let directory = '../public/images/animals/';
    let id = req.query.idAnimal;
    let x = 0;
    let dog = await models.animal.findByPk(id);
    let nom = dog.nomAnimal;
   // let dogImages =[];
   // let idLenght = dog.idAnimal.length;

  //  if (dog.nomAnimal !== null) {
  //      let nomLength = dog.nomAnimal.length;
  //      fs.readdir(directory, (err, files) => {
  //          files.forEach(file => {
   //             if(file.indexOf(nomLength+1)==dog.idAnimal){
    //                dogImages[x]=file;
    //                x++
     //           }
     //       });
       // });
   // }
    res.render('dog', {title: nom, dog: dog,user:req.session});        //Page title

});

module.exports = router;