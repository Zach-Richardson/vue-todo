const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    launches(pageSize: Int, after: String): LaunchConnection!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String
  }  

  type Account {
    id: Int,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    tasks: [Task],
    createdAt: Date,
    updatedAt: Date
  }

  type Task {
    id: Int
    name: String,
    description: String,
    done: Boolean,
    createdAt: Date,
    updatedAt: Date
  }
`

module.exports = typeDefs;
