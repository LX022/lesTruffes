//tutorial for sending email found here : https://medium.com/@mariusc23/send-an-email-using-only-javascript-b53319616782

var models  = require('../models');
var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");


router.get('/', function(req, res, next) {

    res.render('contact', { title: "Contacter l'association" });        //Page title
});

/* POST contact page. */
router.post('/', function(req, res, next) {

    var name = req.body.contactName;
    var email = req.body.email;
    var message = req.body.message;

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
        subject: "Email from " + name + " : " + email + " @ Les Truffes",
        text: message,
    });

    res.redirect('contact');
});

module.exports = router;