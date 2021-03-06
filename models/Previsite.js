'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('previsite', {
            idPrevisite: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idPrevisite'
            },
            datePrevisite: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'datePrevisite'
            },
            validationPrev: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'validationPrev'
            },
            idPersonne: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'Personne',
                    key: 'idPersonne'
                },
                field: 'idPersonne'
            },
            raison: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'raison'
            },
            idAnimal: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                field: 'idAnimal'
            },
            commentairePrev: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'commentairePrev'
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Previsite'
        },
        {
            classMethods: {
                associate: function (models) {
                    animal.belongsTo(models.animalAskedAdoptant);
                }
            }
        }
    );
};
