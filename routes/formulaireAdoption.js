var express = require('express');
var router = express.Router();
var models = require('../models');
var nodemailer = require('nodemailer');
var session = require('express-session');

let id;
let dog;

/* GET fa page. */
router.get('/', async function (req, res, next) {

    if(!req.session.loggedin)
        res.render('about', {title: 'Veuillez vous loger pour adopter un chien'});

    id = req.query.idAnimalAdoption;
    dog = await models.animal.findByPk(id);

    res.render('formulaireAdoption', {title: "Adopter cette belle truffe", dog:dog, user:req.session});
});

router.post('/', async function (req, res, next) {

    var idPersonne = req.session.idPersonne;


    var logement = "Appartement";
    if(req.body.typelogement == "maison")
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
    if(req.body.soins = "soinsOui")
        soins = "oui";

    var autreinfo = req.body.autreinfo;

    var message =
        "Une personne aimerait adopter " + req.body.idAnimal + " (id : " + id + ")" + "\n\n" +
        "idPersonne : " + req.session.idPersonne + "\n\n" +
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
        from: '"Les Truffes" <' + idPersonne + '>',
        to: "lestruffesdesierre@gmail.com",
        subject: "Email from " + idPersonne + " @ Les Truffes",
        text: message,
    });


    models.animalAskedAdoptant.create({
        idAnimal: req.body.idAnimal,
        idPersonne: idPersonne,
        adoptionValidee: 0,
        contratAdoption: false,
        dateContratRecu: null,
        commentaires: autreinfo,
        idPrevisite: null,
        dateCessionIcad: null,
        paiement: 'cash',
    });


    res.render('about', {title: "Merci pour cette adoption!"});
});


module.exports = router;