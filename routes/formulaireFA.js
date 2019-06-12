var express = require('express');
var router = express.Router();
var models = require('../models');
var nodemailer = require("nodemailer");
var Handlebars = require("handlebars");



/* GET fa page. */
router.get('/', function(req, res, next) {
    res.render('formulaireFA', { title: "Devenir une famille d'accueil", user:req.session});
});

router.post('/', function(req, res, next) {

    var lastname = req.body.lastname;
    var firstname = req.body.firstname;
    var email = req.body.email;
    var facebook = req.body.facebook;
    var telephone = req.body.telephone;
    var adresse = req.body.adresse;
    var npa = req.body.npa;
    var localite = req.body.localite;
    var datenaissance = req.body.datenaissance;
    var espece = req.body.espece;
    var sexe = req.body.sexe;
    var ageduchien = req.body.ageduchien;
    var taille = req.body.taille;
    var jouradoption = req.body.jouradoption;

    var logement = "Appartement";
    if(req.body.typelogement = "maison")
        logement = "Maison";

    var surfacelogement = req.body.surfacelogement;

    var j = "sans";
    if(req.body.j == "jOui")
        j = "oui";

    if(req.body.j == "jNon")
        j = "non";

    var enfant = "non";
    if(req.body.enfant == "enfantOui")
        enfant = "oui";

    var animaux = "non";
    if(req.body.animaux == "animauxOui")
        animaux = "oui";

    var propre = "non";
    if(req.body.propre == "propreOui")
        propre = "oui";

    var maltraitance = "non";
    if(req.body.maltraitance == "maltraitanceOui")
        maltraitance = "oui";

    var soins = "non";
    if(req.body.soins == "soinsOui")
        soins = "oui";

    var autreinfo = req.body.autreinfo;

    var message =
        "Coordonnées de la personne : " + "\n" +
        "**********************************************************" + "\n" +
        "Firstname : " + firstname + "\n" +
        "Lastname : " + lastname  + "\n" +
        "Email : " + email  + "\n" +
        "Facebook : " + facebook + "\n" +
        "Telephone : " + telephone + "\n" +
        "Adresse : " + adresse + ", " + npa + "-" + localite + "\n" +
        "Date de naissance : " + datenaissance + "\n\n" +
        "Type de chiens désirés : " + "\n" +
        "**********************************************************" + "\n" +
        "Espèce : " + espece + "\n" +
        "Sexe : " + sexe +  + "\n" +
        "Age du chien : " + ageduchien + "\n" +
        "Taille du chien : " + taille + "\n" +
        "Période de disponibilité : " + jouradoption + "\n\n" +
        "Type d'environnement : " + "\n" +
        "**********************************************************" + "\n" +
        "Logement : " + logement + "\n" +
        "Surface du logement : " + surfacelogement + "\n" +
        "Présence d'enfants : " + enfant + "\n" +
        "Présence d'autres animaux : " + animaux + "\n" +
        "Entraînement d'animal non-propre : " + propre + "\n" +
        "Accepte les animaux maltraités : " + maltraitance + "\n" +
        "Donne des soins : " + soins + "\n\n" +
        "Informations supplémentaires : " + "\n" +
        "**********************************************************" + "\n" +
        autreinfo;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'lestruffesdesierre@gmail.com',
            pass: 'Le$Truffes_396O'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = transporter.sendMail({
        from: '"Les Truffes" <' + email + '>',
        to: "lestruffesdesierre@gmail.com",
        subject: "Email from " + lastname + " " + firstname + " : " + email + " @ Les Truffes",
        text: message,
    });

    res.redirect('formulaireFA', {user: req.session});
})

module.exports = router;