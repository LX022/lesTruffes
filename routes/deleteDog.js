var models  = require('../models');
var express = require('express');
var router = express.Router();


/* POST dogsAdmin page. */
router.post('/', async function (req, res) {


    await models.animalAskedAdoptant.destroy({where:{idAnimal:req.body.idmydog}});
    await models.animalHasFa.destroy({where:{idAnimal:req.body.idmydog}});
    await models.animalHasVeterinaire.destroy({where:{idAnimal:req.body.idmydog}});
    await models.Animal.destroy({where: {idAnimal: req.body.idmydog}});


    //récupérer la liste des chiens à jour
    let dogs = await models.Animal.findAll({order: [['idAnimal', 'DESC']]});

    //id max de la table
    let max = 0;
    for(let i =0;i<dogs.length;i++){
        if(dogs[i].idAnimal > max){
            max = dogs[i].idAnimal;
        }
    }
    max = max +1;
    res.render('dogsAdmin', {title: 'Gestion des chiens', dogs:dogs, max:max});        //Page title

});

module.exports = router;