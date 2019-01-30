const { ApolloServer } = require("apollo-server");
const { TaskAPI, resolvers, typeDefs } = require("./graph");
const db = require("./db");

console.log(db);

const store = db;

const server = new ApolloServer({ 
  context: async ({ req }) => {
    const auth = (req.headers && req.headers.authorization) || "";
    const email = Buffer.from(auth, "base64").toString("ascii");

    if (!isEmail.validate(email)) return { user: null };
    const users = await store.users.findOrCreate({ where: { email } });
    const user = users && users[0] ? users[0] : null;

    return { user: { ...user.dataValues } };
  },
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new AccountAPI({ store }),
    userAPI: new TaskAPI({ store }),
  }) 
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});