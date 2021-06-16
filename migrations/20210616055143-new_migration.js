'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Missings','missing_date', {
        type: Sequelize.DATEONLY
      })
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Missings','missing_date')
    ]);
  }
};
