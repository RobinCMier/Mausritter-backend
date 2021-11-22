"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "Elrond",
        email: "e@e.com",
        password: "hobbits",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matt Mercer",
        email: "m@m.com",
        password: "howdododo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Geralt",
        email: "g@g.com",
        password: "fuck",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
