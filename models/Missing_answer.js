'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Missing_answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     
    }
  };
  Missing_answer.init({
    user_id: DataTypes.INTEGER,
    missing_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    video_url: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Missing_answer',
  });
  return Missing_answer;
};