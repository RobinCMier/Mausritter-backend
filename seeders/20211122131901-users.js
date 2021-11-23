"use strict";
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Elrond",
        email: "e@e.com",
        password: bcrypt.hashSync("hobbits", SALT_ROUNDS), //add encrypt -> check assessment
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matt Mercer",
        email: "m@m.com",
        password: bcrypt.hashSync("Howdododo", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Geralt",
        email: "g@g.com",
        password: bcrypt.hashSync("fuck", SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
