"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("sheet_items", [
      {
        sheetId: 1,
        itemId: 3,
        isworn: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sheetId: 1,
        itemId: 1,
        isworn: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sheetId: 1,
        itemId: 1,
        isworn: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sheetId: 2,
        itemId: 4,
        isworn: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sheetId: 2,
        itemId: 3,
        isworn: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sheetId: 3,
        itemId: 6,
        isworn: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sheetId: 4,
        itemId: 5,
        isworn: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        sheetId: 5,
        itemId: 3,
        isworn: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
