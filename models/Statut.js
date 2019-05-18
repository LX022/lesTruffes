'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('statut', {
    idStatut: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idStatut'
    },
    etatStatut: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'etatStatut'
    }
  }, {
    tableName: 'Statut'
  });
};
