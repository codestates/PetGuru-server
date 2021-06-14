'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Pet,{
        foreignKey: 'user_id',
        sourceKey: 'id'
      });

      User.hasMany(models.Missing,{
        foreignKey: 'user_id',
        sourceKey: 'id'
      });

      User.hasMany(models.Missing_answer,{
        foreignKey: 'user_id',
        sourceKey: 'id'
      });
    }
  };
  User.init({
    social_google_id: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_name: DataTypes.STRING,
    mentor_auth: DataTypes.STRING,
    auth_image_url: DataTypes.STRING,
    mentor_career: DataTypes.STRING,
    mentor_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};