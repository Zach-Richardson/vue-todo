"use strict";
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      firstName: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      tasks: DataTypes.ARRAY(DataTypes.STRING)
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
  return Account;
};
