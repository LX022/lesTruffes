'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('familleAccueil', {
            idFamilleAccueil: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idFamilleAccueil'
            },
            idPersonne: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Personne',
                    key: 'idPersonne'
                },
                field: 'idPersonne'
            },
            especeFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'especeFA'
            },
            genreFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'genreFA'
            },
            ageChienFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'ageChienFA'
            },
            tailleChienFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'tailleChienFA'
            },
            typeLogementFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'typeLogementFA'
            },
            surfaceFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'surfaceFA'
            },
            jardinFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'jardinFA'
            },
            clotureFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'clotureFA'
            },
            enfantFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'enfantFA'
            },
            ageEnfantFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'ageEnfantFA'
            },
            possedeAnimauxFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'possedeAnimauxFA'
            },
            possedeAnimauxNomFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'possedeAnimauxNomFA'
            },
            possedeAnimauxTypeFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'possedeAnimauxTypeFA'
            },
            possedeAnimauxRaceFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'possedeAnimauxRaceFA'
            },
            possedeAnimauxGenreFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'possedeAnimauxGenreFA'
            },
            possedeAnimauxSteriliseFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'possedeAnimauxSteriliseFA'
            },
            possedeAnimauxVaccinsFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'possedeAnimauxVaccinsFA'
            },
            dejaEuAnimauxFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'dejaEuAnimauxFA'
            },
            propreteFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'propreteFA'
            },
            educationFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'educationFA'
            },
            maltraitanceFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'maltraitanceFA'
            },
            soinsFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'soinsFA'
            },
            handicapFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'handicapFA'
            },
            solitudeFA: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'solitudeFA'
            },
            commentairesFA: {
                type: DataTypes.STRING(445),
                allowNull: true,
                field: 'commentairesFA'
            },

        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'FamilleAccueil'
        },
        {
            classMethods: {
                associate: function (models) {
                    familleAccueil.hasOne(models.personne);
                }
            }
        }
    );
};
