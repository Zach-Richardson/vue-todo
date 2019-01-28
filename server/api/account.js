const express = require("express");

class Account {
  constructor({ server }) {
    this.server = server;
    this.router = express.Router();
  }
  async create(data, params) {
    return null;
  }
  async find(params) {
    return null;
  }
  async get(id, params) {
    return null;
  }
  async remove(key, params) {
    return null;
  }
  async update(key, data, params) {
    return null;
  }
}

module.exports = {
  Account
};
