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
      },
      charBackground: {
        type: Sequelize.STRING,
      },
      currentHP: {
        type: Sequelize.INTEGER,
      },
      maxHP: {
        type: Sequelize.INTEGER,
      },
      str: {
        type: Sequelize.INTEGER,
      },
      dex: {
        type: Sequelize.INTEGER,
      },
      will: {
        type: Sequelize.INTEGER,
      },
      pips: {
        type: Sequelize.INTEGER,
      },
      charColor: {
        type: Sequelize.STRING,
        defaultValue: "#b1f59d",
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", //update cascade delete null
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
