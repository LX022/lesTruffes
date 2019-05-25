'use strict';

module.exports = function(sequelize, DataTypes) {
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
        model: 'coVoit',
        key: 'idcoVoit'
      },
      field: 'idcoVoit'
    }
  }, {
    tableName: 'Animal_has_coVoit'
  });
};
