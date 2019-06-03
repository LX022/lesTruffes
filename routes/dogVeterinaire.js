var express = require('express');
var router = express.Router();
var models = require('../models');


/* POST veterinaire/dog page. */
router.post('/', async function(req, res, next) {

    //DELETE
    if(req.body.idV!==undefined && req.body.idA!==undefined && req.body.dateV!==undefined){
        await models.animalHasVeterinaire.destroy({where:{idAnimal:req.body.idA, idVeterinaire:req.body.idV, dateVeto:req.body.dateV}});
    }

    //INSERT lien dog/vétérinaire
    if(req.body.InsertidVeterinaire!==undefined && req.body.InsertidAnimal!==undefined && req.body.dateVeto!==undefined){
        let existe= await models.animalHasVeterinaire.findAll({where:{idAnimal:req.body.InsertidAnimal, idVeterinaire: req.body.InsertidVeterinaire, dateVeto:req.body.dateVeto
        }});
        if(existe.length<1){
            await models.animalHasVeterinaire.create({idAnimal: req.body.InsertidAnimal, idVeterinaire:req.body.InsertidVeterinaire, soins:req.body.soins, devis:req.body.devis, dateVeto:req.body.dateVeto});
        }
      }

    //récupérer liens dog/vet
    let soins = await models.animalHasVeterinaire.findAll();
    let info;

    if( req.body.idAnimalVeterinaire!==undefined){
        soins = await models.animalHasVeterinaire.findAll({where:{idAnimal:req.body.idAnimalVeterinaire}});
        if(soins.length<1){info="Ce chien n'est soigné par aucun vétérinaire";}
    }

    if( req.body.idVetDog!==undefined){
        soins = await models.animalHasVeterinaire.findAll({where:{idVeterinaire:req.body.idVetDog}});
        if(soins.length<1){info="Ce vétérinaire n'a soigné aucun chien de l'association";}
    }



    //récupérer le(s) vétérinaire(s) et les chiens
    let veterinaires = await models.veterinaire.findAll();
    let chiens = await models.animal.findAll();

    if(req.body.idAnimal!==undefined){
        veterinaires = await models.veterinaire.findAll({where:{idAnimal:req.body.idAnimal}});
    }

    res.render('dogVeterinaire', { title: "Les vétérinaires et leurs 4 pattes",info:info, soins:soins, veterinaires:veterinaires, chiens:chiens});
});

module.exports = router;