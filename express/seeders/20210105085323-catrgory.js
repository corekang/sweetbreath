"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "常溫蛋糕",
          is_deleted: false,
        },
        {
          name: "期間限定",
          is_deleted: false,
        },
        {
          name: "熱銷經典",
          is_deleted: true,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
