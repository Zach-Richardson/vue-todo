const { ApolloServer } = require("apollo-server");
const TaskAPI = require("./graph/datasources");
const resolvers = require("./graph/resolvers");
const typeDefs = require("./graph/schema");
const db = require("./db");

const store = db ;

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    taskAPI: new TaskAPI({ store }),
  }) 
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});