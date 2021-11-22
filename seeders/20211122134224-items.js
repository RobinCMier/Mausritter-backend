"use strict";

const { BULKDELETE } = require("sequelize/dist/lib/query-types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("items", [
      {
        itemName: "sword",
        description: "it stabs people",
        itemStr: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "shield",
        description: "protecc",
        itemStr: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "staff",
        description: "magicy stick",
        itemWill: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "sneakers",
        description: "to sneak with",
        itemDex: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "bow",
        description: "TWANG",
        itemStr: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        itemName: "coffee",
        description: "Totally healthy",
        itemHP: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
  },
};
