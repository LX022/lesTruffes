'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animalHasFa', {
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
    dateDebut: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      field: 'DateDebut'
    },
    dateFin: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'DateFin'
    },
    commentaire: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'commentaire'
    },
    fa: {
      type: "BINARY(1)",
      allowNull: true,
      field: 'FA'
    },
    idPersonne: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Personne',
        key: 'idPersonne'
      },
      field: 'idPersonne'
    }
  }, {
    tableName: 'Animal_has_FA'
  });
};
