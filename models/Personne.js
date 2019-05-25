'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('personne', {
        idPersonne: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            field: 'idPersonne'
        },
        nomP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'nomP'
        },
        prenomP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'prenomP'
        },
        facebookP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'facebookP'
        },
        dateNaissanceP: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'dateNaissanceP'
        },
        rueP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'rueP'
        },
        telDomicileP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'telDomicileP'
        },
        telPortableP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'telPortableP'
        },
        telAutreP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'telAutreP'
        },
        idLieu: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'Lieu',
                key: 'idLieu'
            },
            field: 'idLieu'
        },
        emailP: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'emailP'
        },
        commentaires: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'commentaires'
        },
        bloque: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            field: 'bloque'
        },
        idPrevisiteFa: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0',
            references: {
                model: 'Previsite',
                key: 'idPrevisite'
            },
            field: 'idPrevisiteFA'
        },
        fa: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'FA'
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Personne'
    });
};
