'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Missing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Missing.init({
    user_id: DataTypes.INTEGER,
    pet_name: DataTypes.STRING,
    type: DataTypes.STRING,
    sex: DataTypes.STRING,
    missing_date: DataTypes.STRING,
    born_year: DataTypes.STRING,
    missing_location: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    contents: DataTypes.STRING,
    image_url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Missing',
  });
  return Missing;
};