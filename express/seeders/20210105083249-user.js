"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "admin",
          password: "admin",
          fullname: "admin",
          email: "admin@admin.com",
          address: null,
          birthday: null,
          is_admin: true,
          status: true,
          socialmedia_id: null,
        },
        {
          username: "AnnAnn",
          password: "Annisme",
          fullname: "安安",
          email: "AnnAnn@AnnAnn.com",
          address: null,
          birthday: null,
          is_admin: false,
          status: true,
          socialmedia_id: null,
        },
        {
          username: "Ken",
          password: "kenken",
          fullname: "肯肯肯",
          email: "ken@kenken.com",
          address: "肯肯路肯肯街99號",
          birthday: null,
          is_admin: false,
          status: true,
          socialmedia_id: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
