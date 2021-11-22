"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sheet_items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sheetId: {
        type: Sequelize.INTEGER,
        references: {
          model: "sheets",
          key: "id",
        },
      },
      itemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "items",
          key: "id",
        },
      },
      isworn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sheet_items");
  },
};
