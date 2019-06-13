var express = require('express');
var router = express.Router();
var models = require('../models');
var nodemailer = require("nodemailer");
var Handlebars = require("handlebars");



/* GET fa page. */
router.get('/', async function(req, res, next) {
    let personne = 1 ;
    let lieu =1;
    let pays = await models.pays.findAll();
    let id;
    //Teste si la personne s'est connectée
    if(req.session.username!==undefined) {
        personne = await models.personne.findAll({where: {username: req.session.username}});
        if (personne[0] === undefined) {
            //la personne n'est pas connectée
            personne = 1;
        } else {
            //récupère le lieu
            lieu = await models.lieu.findAll({where: {idLieu: personne[0].idLieu}});
            if (lieu === undefined) {
                lieu = 1;
            }
        }

    }

    res.render('formulaireFA', { title: "Devenir une famille d'accueil", user:req.session, personne:personne[0], lieu:lieu[0], pays:pays });
});

router.post('/', async function(req, res, next) {

    //Toutes les données personne + FA
    let nomFA = req.body.nomFA;
    let prenomFA = req.body.prenomFA;
    let emailFA = req.body.emailFA;
    let facebookFA = req.body.facebookFA;
    let telephoneFA = req.body.telephoneFA;
    let rueFA = req.body.rueFA;
    let npaFA = req.body.npaFA;
    let localiteFA = req.body.localiteFA;
    let datenaissanceFA = req.body.datenaissanceFA;
    let especeFA = req.body.especeFA;
    let genreFA = req.body.genreFA;
    let ageChienFA = req.body.ageChienFA;
    let tailleChienFA = req.body.tailleChienFA;
    let commentairesFA = req.body.commentairesFA;
    let typeLogementFA = req.body.typelogementFA;
    let jardinFA = req.body.jardinFA;
    let clotureFA = req.body.clotureFA;
    let enfantFA = req.body.enfantFA;
    let ageEnfantFA = req.body.ageEnfantFA;
    let dejaEuAnimauxFA = req.body.dejaEuAnimauxFA;
    let possedeAnimauxFA = req.body.possedeAnimauxFA;
    let propreteFA = req.body.propreteFA;
    let educationFA = req.body.educationFA;
    let maltraitanceFA = req.body.maltraitanceFA;
    let handicapFA = req.body.handicapFA;
    let soinsFA = req.body.soinsFA;
    let solitudeFA = req.body.solitudeFA;
    let surfaceFA = req.body.surfaceFA;
    let message = '';
    let fa;

    //Si la famille d'accueil existe déjà
    let test = await models.familleAccueil.findAll({where:{idPersonne:req.body.idPersonneFA}});
    if(test.length>0){
    message = "Vous êtes déjà inscrit :)";
    }
    else{

    //si le lieu n'existe pas, le créer
    if(await models.lieu.findAll({where:{codePostal:npaFA, ville:localiteFA}})===undefined){
        await models.lieu.create({idPays:pays, ville:npaFA, localite:localiteFA});
    };

    //Si la personne existe déjà, reprendre son id et créer une FA
    if(req.body.idPersonne!==undefined && req.body.idPersonneFA!=='' && req.body.idPersonne!=null){
        //spécifier que c'est une FA dans la table personne
        await models.personne.update({fa:1,where:{idPersonne:req.body.idPersonne}});
    fa = await models.familleAccueil.create({idPersonne:req.body.idPersonne, especeFA:especeFA,genreFA:genreFA, ageChienFA:ageChienFA, tailleChienFA:tailleChienFA, typeLogementFA:typeLogementFA, surfaceFA:surfaceFA, jardinFA:jardinFA, clotureFA:clotureFA, enfantFA:enfantFA, ageEnfantFA:ageEnfantFA, possedeAnimauxFA:possedeAnimauxFA, dejaEuAnimauxFA:dejaEuAnimauxFA, propreteFA:propreteFA, educationFA:educationFA, maltraitanceFA:maltraitanceFA, soinsFA:soinsFA, handicapFA:handicapFA, solitudeFA:solitudeFA, commentairesFA:commentairesFA });
    }
    else{
        //Si la personne n'existe pas, la créer
        let p = await models.personne.create({nomP:nomFA, prenomP:prenomFA,facebookP:facebookFA, dateNaissanceP:datenaissanceFA, rueP:rueFA, telPortableP:telephoneFA, emailP:emailFA, fa:1});

        // puis reprendre son id pour créer une FA
        fa = await models.familleAccueil.create({idPersonne:p.idPersonne, especeFA:especeFA,genreFA:genreFA, ageChienFA:ageChienFA, tailleChienFA:tailleChienFA, typeLogementFA:typeLogementFA, surfaceFA:surfaceFA, jardinFA:jardinFA, clotureFA:clotureFA, enfantFA:enfantFA, ageEnfantFA:ageEnfantFA, possedeAnimauxFA:possedeAnimauxFA, dejaEuAnimauxFA:dejaEuAnimauxFA, propreteFA:propreteFA, educationFA:educationFA, maltraitanceFA:maltraitanceFA, soinsFA:soinsFA, handicapFA:handicapFA, solitudeFA:solitudeFA, commentairesFA:commentairesFA });
    }
    message="Votre inscription s'est faite avec succès et votre id est le numéro "+fa.idFamilleAccueil;
    }

    res.render('formulaireFA', {user: req.session, message:message});
})

module.exports = router;