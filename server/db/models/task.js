"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      done: DataTypes.BOOLEAN
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
  return Task;
};
