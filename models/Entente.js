'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entente', {
    idEntente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
        autoIncrement: true,
      field: 'idEntente'
    },
    okEntente: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'okEntente'
    }
  }, {
      timestamps: false,
      freezeTableName: true,
    tableName: 'Entente'
  });
};
