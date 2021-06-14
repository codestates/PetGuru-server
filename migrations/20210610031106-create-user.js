'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      social_google_id: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      user_name: {
        type: Sequelize.STRING
      },
      mentor_auth: {
        type: Sequelize.STRING
      },
      auth_image_url: {
        type: Sequelize.STRING
      },
      mentor_career: {
        type: Sequelize.STRING
      },
      mentor_description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};