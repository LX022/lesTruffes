//tutorial for sending email found here : https://medium.com/@mariusc23/send-an-email-using-only-javascript-b53319616782

var models  = require('../models');
var express = require('express');
var router = express.Router();
var request = require('ajax-request');


router.get('/', function(req, res, next) {

    res.render('contact', { title: "Contacter l'association" });        //Page title
});

/* POST contact page. */
router.post('/', function(req, res, next) {

    var jsdom = require('jsdom');
    const { JSDOM } = jsdom;
    const { window } = new JSDOM();
    const { document } = (new JSDOM('')).window;
    global.document = document;

    var $ = jQuery = require('jquery')(window);


    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': '95d3b13c0c2766eecc43cae32a7f1d53-us20',
            'message': {
                'from_email': 'nicolas.solioz@bluewin.ch',
                'to': [
                    {
                        'email': 'nicolas.solioz@bluewin.ch',
                        'name': 'Nicolas Solioz',
                        'type': 'to'
                    }
                ],
                'autotext': 'true',
                'subject': 'YOUR SUBJECT HERE!',
                'html': 'here is your email!'
            }
        }
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });


    res.send('email sent');

});

module.exports = router;