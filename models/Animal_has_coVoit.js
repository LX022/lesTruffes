'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('animalHasCoVoit', {
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
            idcoVoit: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'CoVoit',
                    key: 'idcoVoit'
                },
                field: 'idcoVoit'
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Animal_has_coVoit'
        },
        {
            classMethods: {
                associate: function (models) {
                    animalAskedAdoptant.hasOne(models.animal);
                    animalAskedAdoptant.hasOne(models.coVoit);
                }
            }
        }
    );
};
