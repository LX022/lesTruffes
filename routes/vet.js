var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET vet page. */
router.get('/', async function(req, res, next) {

    //Recherche du vétérinaire à afficher
    let id = req.query.idVeterinaire;
    let veto = await models.veterinaire.findByPk(id);

    //DELETE lieu
    if(req.body.deleteLieu!==undefined){
        await models.lieu.destroy({where:{idLieu:req.body.deleteLieu}});
    }

    //Recherche le lieu du véto et les lieux en général
    let lieu = await models.lieu.findByPk(veto.idLieu);
    let pays = await models.pays.findAll();
    let lieux = await models.lieu.findAll({order: [['ville', 'ASC']]});

    //titre
    let nom = veto.nomV +" " + veto.prenomV;

    //récupérer dernier id lieu
    let max = 0;
    for(let i =0;i<lieux.length;i++){
        if(lieux[i].idLieu > max){
            max = lieux[i].idLieu;
        }
    }
    max = max +1;

    res.render('vet', { title: nom, veto : veto, lieux:lieux, lieu:lieu, pays:pays, max:max });   //Page title
});


/* UPDATE vet page. */
router.post('/', async function (req, res) {

    //INSERT lieu
    //Si la Suisse n'existe pas l'inventer
    let laSuisse = await models.pays.findAll({where:{codePays:0}});
    console.log(laSuisse.length.toString());
    if(laSuisse.length<1){
        laSuisse = await models.pays.create({idPays:0, codePays:0, alpha2:"CH", alpha3:"CH", nomEnGb:"Suisse", nomPays:"Suisse" });
    }
    if(req.body.insertIdLieu!==undefined && req.body.insertCP!==undefined && req.body.insertVille!==undefined){
        await models.lieu.create({idLieu:req.body.insertIdLieu, codePostal:req.body.insertCP, ville:req.body.insertVille, idPays:0});
    }

    //UPDATE : si le lieu est vide alors remettre la valeur null
    if(req.body.idLieu==='' && req.body.idVeterinaire.idLieu!==null){
        await models.veterinaire.update({nomV: req.body.nomV, prenomV:req.body.prenomV, cliniqueV: req.body.cliniqueV, rueV: req.body.rueV, specialiteV: req.body.specialiteV, commentaireV: req.body.commentaireV, tarifs: req.body.tarifs, bloque: req.body.bloque}, {where: {idVeterinaire: req.body.idVeterinaire}});
    }else{
        await models.veterinaire.update({idLieu:req.body.idLieu, nomV: req.body.nomV, prenomV:req.body.prenomV, cliniqueV: req.body.cliniqueV, rueV: req.body.rueV, specialiteV: req.body.specialiteV, commentaireV: req.body.commentaireV, tarifs: req.body.tarifs, bloque: req.body.bloque}, {where: {idVeterinaire: req.body.idVeterinaire}});
    }


    //recherche du vétérinaire màj
    let veto = await models.veterinaire.findByPk(req.body.idVeterinaire);

    //titre
    let nom = veto.nomV +" " + veto.prenomV;

    //Recherche le lieu du véto et les lieux en général
    let lieu = await models.lieu.findByPk(veto.idLieu);
    let pays = await models.pays.findAll();
    let lieux = await models.lieu.findAll({order: [['ville', 'ASC']]});

    //récupérer dernier id lieu
    let max = 0;
    for(let i =0;i<lieux.length;i++){
        if(lieux[i].idLieu > max){
            max = lieux[i].idLieu;
        }
    }
    max = max +1;

    res.render('vet', { title: nom, veto : veto , lieux:lieux, lieu:lieu, pays:pays, max:max});        //Page title

});

module.exports = router;