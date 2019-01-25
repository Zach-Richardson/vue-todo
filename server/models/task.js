"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    account: DataTypes.ARRAY(DataTypes.Text),
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  });
  return Task;
};
