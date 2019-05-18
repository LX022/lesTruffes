'use strict';

module.exports = function(sequelize, DataTypes) {
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
        model: 'Vétérinaire',
        key: 'idVétérinaire'
      },
      field: 'idVétérinaire'
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
  }, {
    tableName: 'Animal_has_Vétérinaire'
  });
};
