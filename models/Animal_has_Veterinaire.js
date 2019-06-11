'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('animalHasVeterinaire', {
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
            idVeterinaire: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Veterinaire',
                    key: 'idVeterinaire'
                },
                field: 'idVeterinaire'
            },
            soins: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'soins'
            },
            devis: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'devis'
            },
            dateVeto: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                primaryKey: true,
                field: 'dateVeto'
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Animal_has_Veterinaire'
        },
        {
            classMethods: {
                associate: function (models) {
                    animalHasVeterinaire.hasOne(models.veterinaire);
                    animalHasVeterinaire.hasOne(models.animal);
                }
            }
        }
    );
};
