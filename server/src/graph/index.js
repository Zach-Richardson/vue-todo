const { TaskAPI } = require("./datasources");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

module.exports = {
  TaskAPI,
  resolvers,
  typeDefs
};