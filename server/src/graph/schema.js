const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    task: Task,
    tasks: [Task]
  }

  type Mutation {  
    completeTask(taskId: Int): TaskUpdateResponse,  
    createTask(name: String!, description: String!, done: Boolean!): TaskUpdateResponse,
    removeTask(taskId: Int): TaskUpdateResponse
  } 

  type Task {
    name: String,
    description: String,
    done: Boolean,
    createdAt: String
  }

  type TaskUpdateResponse {
    success: Boolean!
    message: String
    task: Task
  }
`

module.exports = typeDefs;
