'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('coVoitHasPersonne', {
            idcoVoit: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'CoVoit',
                    key: 'idcoVoit'
                },
                field: 'idcoVoit'
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
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'CoVoit_has_Personne'
        },
        {
            classMethods: {
                associate: function (models) {
                    coVoitHasPersonne.hasOne(models.coVoit);
                    coVoitHasPersonne.hasOne(models.personne);
                }
            }
        }
    );
};
