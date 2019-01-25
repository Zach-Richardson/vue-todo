"use strict";
const bcrypt = require("bcrypt");
export default (sequelize, DataTypes) => {
  const accountModel = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.TIME },
    updatedAt: { type: DataTypes.TIME }
  };
  const accountOptions = {
    indexes: [
      {
        unique: true,
        fields: ["id"]
      }
    ],
    freezeTableName: true,
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      }
    }
  };
  const Account = sequelize.define("Account", accountModel, accountOptions);
  return Account;
};