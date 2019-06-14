var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET dogAdmin page. */
router.get('/', async function(req, res, next) {

    if(req.session.privilege >= 1)
    {
        //Recherche du chien à afficher
        let id = req.query.idAnimal;
        let chien = await models.animal.findByPk(id);

        //titre
        let nom = chien.nomAnimal;
        if(nom===undefined || nom ==null){
            nom = "Ma petite truffe"
        }

        res.render('dogAdmin', { title: nom, chien:chien ,user:req.session});   //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});


});


/* UPDATE dogAdmin page. */
router.post('/', async function (req, res) {


    //TESTER les paramètres rentrés pour les types number et date : icad, dateEntreeAnimal, dateNaissAnimal, sterilisation, dateSterilisation
    //Si un champ reste vide, ça plante quand ce n'est pas du texte
    //Inconvénient, d'une fois qu'une valeur est rentrée, le champ est modifiable mais plus effaçable
    if(req.session.privilege >= 1) {

        if (req.body.icad === undefined || req.body.icad === null || req.body.icad === '') {
            //Sans icad

            if (req.body.dateEntreeAnimal === undefined || req.body.dateEntreeAnimal === null || req.body.dateEntreeAnimal === '') {
                //Sans date d'entrée

                if (req.body.dateNaissAnimal === undefined || req.body.dateNaissAnimal === null || req.body.dateNaissAnimal === '') {
                    //Sans date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                dateSterilisation: req.body.dateSterilisation,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                sterilisation: req.body.sterilisation,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                sterilisation: req.body.sterilisation,
                                dateSterilisation: req.body.dateSterilisation,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                } else {
                    //avec date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                dateSterilisation: req.body.dateSterilisation,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                sterilisation: req.body.sterilisation,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                sterilisation: req.body.sterilisation,
                                dateSterilisation: req.body.dateSterilisation,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                }
            } else {
                //avec date d'entrée

                if (req.body.dateNaissAnimal === undefined || req.body.dateNaissAnimal === null || req.body.dateNaissAnimal === '') {
                    //Sans date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                dateSterilisation: req.body.dateSterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                dateSterilisation: req.body.dateSterilisation,
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                } else {
                    //avec date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                dateSterilisation: req.body.dateSterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                dateSterilisation: req.body.dateSterilisation,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                }
            }
        } else {
            //avec icad

            if (req.body.dateEntreeAnimal === undefined || req.body.dateEntreeAnimal === null || req.body.dateEntreeAnimal === '') {
                //Sans date d'entrée

                if (req.body.dateNaissAnimal === undefined || req.body.dateNaissAnimal === null || req.body.dateNaissAnimal === '') {
                    //Sans date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateSterilisation: req.body.dateSterilisation,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                sterilisation: req.body.sterilisation,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                sterilisation: req.body.sterilisation,
                                dateSterilisation: req.body.dateSterilisation,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                } else {
                    //avec date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateSterilisation: req.body.dateSterilisation,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                sterilisation: req.body.sterilisation,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                sterilisation: req.body.sterilisation,
                                dateSterilisation: req.body.dateSterilisation,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                }
            } else {
                //avec date d'entrée

                if (req.body.dateNaissAnimal === undefined || req.body.dateNaissAnimal === null || req.body.dateNaissAnimal === '') {
                    //Sans date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateSterilisation: req.body.dateSterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateSterilisation: req.body.dateSterilisation,
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                } else {
                    //avec date de naissance

                    if (req.body.sterilisation === undefined || req.body.sterilisation === null || req.body.sterilisation === '') {
                        //Sans stérilisation

                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                dateSterilisation: req.body.dateSterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    } else {
                        //avec stérilisation
                        if (req.body.dateSterilisation === undefined || req.body.dateSterilisation === null || req.body.dateSterilisation === '') {
                            //Sans date de stérilisation
                            await models.animal.update({
                                icad: req.body.icad,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        } else {
                            //avec date de stérilisation
                            await models.animal.update({
                                dateSterilisation: req.body.dateSterilisation,
                                icad: req.body.icad,
                                dateNaissAnimal: req.body.dateNaissAnimal,
                                sterilisation: req.body.sterilisation,
                                dateEntreeAnimal: req.body.dateEntreeAnimal,
                                tatouage: req.body.tatouage,
                                nomAnimal: req.body.nomAnimal,
                                deces: req.body.deces,
                                histoireAnimal: req.body.histoireAnimal,
                                descriptionAnimal: req.body.descriptionAnimal,
                                couleursAnimal: req.body.couleursAnimal,
                                race: req.body.race,
                                especeAnimal: req.body.especeAnimal,
                                sexe: req.body.sexe
                            }, {where: {idAnimal: req.body.idAnimal}});

                        }
                    }
                }
            }
        }


        //récupère le chien màj
        let chien = await models.animal.findByPk(req.body.idAnimal);

        //titre
        let nom = chien.nomAnimal;
        if (nom === undefined || nom == null) {
            nom = "Ma petite truffe"
        }

        //affiche la même page avec les données à jour
        res.render('dogAdmin', {title: nom, chien: chien, user: req.session});        //Page title
    }
    else
        res.render('about', {title: 'Vous ne pouvez pas afficher cette page car vous ne disposez pas des droits administrateurs.', user:req.session});

});

module.exports = router;