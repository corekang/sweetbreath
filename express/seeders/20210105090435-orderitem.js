"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Orderitems",
      [
        {
          OrderId: 1,
          order_number: 160976576433222,
          product_name: "可麗露",
          product_feature: "3 入",
          product_price: 270,
          product_quantity: 1,
        },
        {
          OrderId: 2,
          order_number: 16097654685362,
          product_name: "可麗露",
          product_feature: "3 入",
          product_price: 270,
          product_quantity: 2,
        },
        {
          OrderId: 2,
          order_number: 16097654685362,
          product_name: "可可貝果",
          product_feature: "2 入",
          product_price: 80,
          product_quantity: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Orderitems", null, {});
  },
};
