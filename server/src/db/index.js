const { sequelize, Sequelize } = require("./models");

const task = sequelize.model("Task");

module.exports = { account, task };
