const { sequelize, Sequelize } = require("./models");

const Accounts = sequelize.define(
  "Account",
  {
    firstName: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    tasks: Sequelize.ARRAY(Sequelize.STRING)
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["id"]
      },
      {
        unique: true,
        fields: ["email"]
      }
    ]
  }
);

const Tasks = sequelize.define(
  "Task",
  {
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    done: Sequelize.BOOLEAN
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["id"]
      }
    ]
  }
);

Accounts.sync();
Tasks.sync();

module.exports = { Accounts, Tasks };
