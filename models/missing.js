<<<<<<< HEAD
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
=======
const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('missing', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pet_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
>>>>>>> 181aa7e73c47be3505980600f7697a2fb7d85351
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