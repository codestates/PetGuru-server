<<<<<<< HEAD
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
=======
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    social_google_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    login: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mentor_auth: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    auth_image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mentor_career: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mentor_description: {
      type: DataTypes.STRING(255),
      allowNull: true
>>>>>>> 181aa7e73c47be3505980600f7697a2fb7d85351
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