'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('familleAccueil', {
        idFamilleAccueil: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'idFamilleAccueil'
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'FamilleAccueil'
    });
};
