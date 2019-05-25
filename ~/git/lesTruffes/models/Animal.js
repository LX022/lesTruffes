/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('animal', {
    idAnimal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idAnimal'
    },
    icad: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true,
      field: 'ICAD'
    },
    tatouage: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'Tatouage'
    },
    nomAnimal: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '-',
      field: 'NomAnimal'
    },
    dateNaissAnimal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'DateNaissAnimal'
    },
    deces: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: 'Deces'
    },
    histoireAnimal: {
      type: "TINYBLOB",
      allowNull: true,
      field: 'HistoireAnimal'
    },
    descriptionAnimal: {
      type: "BLOB",
      allowNull: true,
      field: 'DescriptionAnimal'
    },
    dateEntreeAnimal: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'DateEntreeAnimal'
    },
    sterilisation: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'Sterilisation'
    },
    dateSterilisation: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'DateSterilisation'
    },
    idStatutSterilisation: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Statut',
        key: 'idStatut'
      },
      field: 'idStatutSterilisation'
    },
    couleursAnimal: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'CouleursAnimal'
    },
    race: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Race'
    },
    especeAnimal: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'EspeceAnimal'
    },
    sexe: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      field: 'Sexe'
    }
  }, {
    tableName: 'Animal'
  });
};
