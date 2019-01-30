const { sequelize, Sequelize } = require("./models");

const tasks = sequelize.model("Task");

module.exports = { tasks };
