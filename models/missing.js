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
      Missing.belongsTo(models.User,{
        foreignKey: 'user_id',
        targetKey: 'id'
      });

      Missing.belongsTo(models.Pet,{
        foreignKey: 'pet_id',
        targetKey: 'id'
      });

      Missing.hasMany(models.Missing_answer,{
        foreignKey: 'missing_id',
        sourceKey: 'id'
      });
    }
  };
  Missing.init({
    user_id: DataTypes.INTEGER,
    pet_id: DataTypes.INTEGER,
    missing_location: DataTypes.STRING,
    missing_status: DataTypes.BOOLEAN,
    missing_latitude: DataTypes.STRING,
    missing_longitude: DataTypes.STRING,
    title: DataTypes.STRING,
    contents: DataTypes.STRING,
    image_url: DataTypes.STRING,
    video_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Missing',
  });
  return Missing;
};