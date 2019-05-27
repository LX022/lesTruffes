/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('previsite', {
    idPrevisite: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'idPrevisite'
    },
    datePrevisite: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'datePrevisite'
    },
    validationPrev: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'validationPrev'
    },
    idPersonnePar: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Personne',
        key: 'idPersonne'
      },
      field: 'idPersonnePar'
    },
    raison: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'raison'
    },
    idAnimal: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'Animal_asked_Adoptant',
        key: 'idAnimal'
      },
      field: 'idAnimal'
    },
    commentairePrev: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'commentairePrev'
    }
  }, {
    tableName: 'Previsite'
  });
};
