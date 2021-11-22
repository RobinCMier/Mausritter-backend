"use strict";

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sheets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      charName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currentHP: {
        type: Sequelize.INTEGER,
      },
      maxHP: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      str: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dex: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      will: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pips: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        }, //update cascade delete null
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
    await queryInterface.dropTable("sheets");
  },
};
