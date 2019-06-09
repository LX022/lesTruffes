'use strict';

let models  = require('../models');
let directorySql = "../sql/";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
//const db = {};
//const Promise = require("bluebird");

var allowDBdrop = true;


if (config.use_env_variable) {
    // var sequelize = new Sequelize(process.env[config.use_env_variable], config);
    var sequelize = new Sequelize('mysql://root:@localhost:3306/truffes', config); // Changer ici le password et le nom de la DB
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

/**
 * Synchronize DB models
 */
var disFKcheck = fs.readFileSync(directorySql + 'disableFKcheck.sql', 'utf8');
var enFKcheck = fs.readFileSync(directorySql + 'enableFKcheck.sql', 'utf8');
var popAnim = fs.readFileSync(directorySql + 'populateAnimal.sql', 'utf8');
var popPers = fs.readFileSync(directorySql + 'populatePersonne.sql', 'utf-8');
var popNico = fs.readFileSync(directorySql + 'addNicolas.sql', 'utf-8');
var popPays = fs.readFileSync(directorySql + 'populatePays.sql', 'utf-8');
var popLieux = fs.readFileSync(directorySql + 'populateLieux.sql', 'utf-8');
var popVeto = fs.readFileSync(directorySql + 'populateVeterinaire.sql', 'utf-8');
var popAnimAskedAdopt =  fs.readFileSync(directorySql + 'populateAnimal_asked_Adoptant.sql', 'utf-8');

models.sequelize.sync(
    {
        force: allowDBdrop,
        pool:false
    }
).then(function() {
    console.log(`Database & tables structure created!`)
}).then( function() {
    sequelize.query(disFKcheck);
}).then( function() {
    sequelize.query(popAnim);
}).then( function() {
       sequelize.query(popPers);
    sequelize.query(popNico);
}).then( function() {
    sequelize.query(popPays);
})
    .then( function() {
        sequelize.query(popLieux);
    }) .then( function() {

    sequelize.query(popVeto);
});

setTimeout(function popAAA() {
    sequelize.query(popAnimAskedAdopt)
},2000)