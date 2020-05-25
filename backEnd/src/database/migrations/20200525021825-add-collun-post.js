'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'posts',
      'description',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    );
  },

  down: (queryInterface) => queryInterface.removeColumn('posts', 'description'),
};
