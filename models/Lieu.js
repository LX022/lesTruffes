'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('lieu', {
            idLieu: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idLieu'
            },
            codePostal: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'codePostal'
            },
            ville: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'Ville'
            },
            idPays: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references: {
                    model: 'Pays',
                    key: 'codePays'
                },
                field: 'idPays'
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Lieu'
        },
        {
            classMethods: {
                associate: function (models) {
                    lieu.hasOne(model.pays);
                    lieu.belongsToMany(model.personne);
                }
            }
        }
    );
};
