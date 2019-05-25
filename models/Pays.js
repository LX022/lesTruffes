'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pays', {
    idPays: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idPays'
    },
    codePays: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      unique: true,
      field: 'codePays'
    },
    alpha2: {
      type: DataTypes.STRING(2),
      allowNull: false,
      unique: true,
      field: 'alpha2'
    },
    alpha3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      unique: true,
      field: 'alpha3'
    },
    nomEnGb: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'nom_en_gb'
    },
    nomPays: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'nomPays'
    }
  }, {
    tableName: 'Pays'
  });
};
