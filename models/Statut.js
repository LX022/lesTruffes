'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('statut', {
            idStatut: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idStatut'
            },
            etatStatut: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'etatStatut'
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Statut'
        }
        , {
            classMethods: {
                associate: function (models) {
                    statut.belongsTo(models.animal, {
                        foreignKey: 'idStatut',
                    })
                }
            }
        }
    );
};
