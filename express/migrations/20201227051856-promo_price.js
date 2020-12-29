"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Products", "promo_price");
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("Products", "promo_price", {
      type: Sequelize.INTEGER,
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
