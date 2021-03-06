'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('veterinaire', {
            idVeterinaire: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idVeterinaire'
            },
            nomV: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'nomV'
            },
            prenomV: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'prenomV'
            },
            cliniqueV: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'cliniqueV'
            },
            rueV: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'rueV'
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
            specialiteV: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'specialiteV'
            },
            commentaireV: {
                type: DataTypes.STRING(200),
                allowNull: true,
                field: 'commentaireV'
            },
            tarifs: {
                type: DataTypes.STRING(200),
                allowNull: true,
                field: 'Tarifs'
            },
            bloque: {
                type: DataTypes.STRING(45),
                allowNull: true,
                field: 'Bloque'
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Veterinaire'
        },
        {
            classMethods: {
                associate: function (models) {
                    veterinaire.hasOne(models.lieu);
                    veterinaire.belongsTo(models.animalHasVeterinaire);
                }
            }
        }
    );
};
