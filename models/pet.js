'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.User,{
        foreignKey: 'user_id',
        targetKey: 'id'
      });

      Pet.hasMany(models.Missing,{
        foreignKey: 'pet_id',
        sourceKey: 'id'
      });
    }
  };
  Pet.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    sex: DataTypes.STRING,
    image_url: DataTypes.STRING,
    born_year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};