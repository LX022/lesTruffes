'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('animalHasEntente', {
            idAnimal: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Animal',
                    key: 'idAnimal'
                },
                field: 'idAnimal'
            },
            idEntente: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Entente',
                    key: 'idEntente'
                },
                field: 'idEntente'
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Animal_has_Entente'
        },
        {
            classMethods: {
                associate: function (models) {
                    animalHasEntente.hasOne(models.animal);
                    animalHasEntente.hasOne(models.entente);
                }
            }
        }
    );
};
