"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "SBP_Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          unique: true,
          allowNull: false,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        nickname: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        is_admin: {
          defaultValue: false,
          type: Sequelize.BOOLEAN,
        },
        birthday: {
          type: Sequelize.DATE,
        },
        socialmedia_id: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.TINYINT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        engine: "MYISAM",
        charset: "utf8",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("SBP_Users");
  },
};
