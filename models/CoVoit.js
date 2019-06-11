'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('coVoit', {
            idcoVoit: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idcoVoit'
            },
            nomCovoit: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'nomCovoit'
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'CoVoit'
        },
        {
            classMethods: {
                associate: function (models) {
                    coVoit.belongsToMany(models.animalHasCoVoit);
                }
            }
        }
    );
};
