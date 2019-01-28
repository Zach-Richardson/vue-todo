const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Account = sequelize.define(
  "Account",
  {
    id: { type: Sequelize.UUID, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    tasks: { type: Sequelize.ARRAY(Sequelize.STRING) }
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

const Task = sequelize.define(
  "Task",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    done: { type: Sequelize.STRING }
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

Account.sync();
Task.sync();

module.exports = { Account, Task };
