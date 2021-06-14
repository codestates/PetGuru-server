'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Missings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      pet_id: {
        type: Sequelize.INTEGER
      },
      missing_location: {
        type: Sequelize.STRING
      },
      missing_status: {
        type: Sequelize.BOOLEAN
      },
      missing_latitude: {
        type: Sequelize.STRING
      },
      missing_longitude: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      contents: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      video_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Missings');
  }
};