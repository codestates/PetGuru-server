'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Question.init({
    user_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    pet_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    contents: DataTypes.STRING,
    image_url: DataTypes.STRING,
    video_url: DataTypes.STRING,
    hashtag: DataTypes.STRING,
    like: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};