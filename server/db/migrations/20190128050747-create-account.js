"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("Accounts", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastname: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        tasks: {
          type: Sequelize.ARRAY(Sequelize.STRING)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
      .then(() => {
        return queryInterface.addIndex("Accounts", ["id"]);
      })
      .then(() => {
        return queryInterface.addIndex("Accounts", ["email"]);
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Accounts");
  }
};
