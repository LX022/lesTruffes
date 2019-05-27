/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familleAccueil', {
    idFamilleAccueil: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idFamilleAccueil'
    }
  }, {
    tableName: 'FamilleAccueil'
  });
};
