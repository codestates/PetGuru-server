'use strict';
//missing 테이블 컬럼 이름 변경

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn('Missings','missing_location','location', {
        type: Sequelize.STRING
      }),
      queryInterface.renameColumn('Missings','missing_status','status', {
        type: Sequelize.BOOLEAN
      }),
      queryInterface.renameColumn('Missings','missing_latitude','latitude', {
        type: Sequelize.STRING
      }),
      queryInterface.renameColumn('Missings','missing_longitude','longitude', {
        type: Sequelize.STRING
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn('Missings','location','missing_location', {
        type: Sequelize.STRING
      }),
      queryInterface.renameColumn('Missings','status','missing_status', {
        type: Sequelize.BOOLEAN
      }),
      queryInterface.renameColumn('Missings','latitude','missing_latitude', {
        type: Sequelize.STRING
      }),
      queryInterface.renameColumn('Missings','longitude','missing_longitude', {
        type: Sequelize.STRING
      })
    ]);
  }
};
