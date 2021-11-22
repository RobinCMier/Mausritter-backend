"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("sheets", [
      {
        charName: "peep",
        level: 1,
        currentHP: 10,
        maxHP: 10,
        str: 4,
        dex: 5,
        will: 8,
        pips: 100,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        charName: "vlekje",
        level: 1,
        currentHP: 9,
        maxHP: 11,
        str: 6,
        dex: 7,
        will: 3,
        pips: 60,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        charName: "bernard",
        level: 4,
        currentHP: 40,
        maxHP: 45,
        str: 9,
        dex: 4,
        will: 11,
        pips: 6,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        charName: "Artemis",
        level: 2,
        currentHP: 10,
        maxHP: 20,
        str: 15,
        dex: 11,
        will: 14,
        pips: 150,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        charName: "Bae",
        level: 5,
        currentHP: 14,
        maxHP: 37,
        str: 12,
        dex: 16,
        will: 17,
        pips: 90,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sheets", null, {});
  },
};
