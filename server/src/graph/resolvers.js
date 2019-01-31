module.exports = {
  Query: {
    tasks: async (_, __, { dataSources }) =>
      dataSources.taskAPI.getTasks(),
    task: (_, { taskId }, { dataSources }) =>
      dataSources.taskAPI.getTaskById({ taskId })
  },
  Mutation: {
    completeTask: async (_, { taskId }, { dataSources }) => {
      const result = dataSources.taskAPI.completeTask(taskId);
      const failure = {
        success: false,
        message: 'failed to complete task',
      };
      const success = {
        success: true,
        message: ' successfully completed task',
        task: result,
      };
      return !result ? failure : success;
    },
    createTask: async (_, { name, description, done }, { dataSources }) => {
      const result = await dataSources.taskAPI.createTask({ name, description, done });
      const failure = {
        success: false,
        message: 'failed to create task',
      };
      const success = {
        success: true,
        message: ' successfully created task',
        task: result,
      };
      return !result ? failure : success;
    },
    removeTask: async (_, { taskId }, { dataSources }) => {
      const result = dataSources.taskAPI.removeTask(taskId);
      const failure = {
        success: false,
        message: 'failed to remove task',
      };
      const success = {
        success: true,
        message: ' successfully removed task',
        task: result,
      };
      return !result ? failure : success;
    }
  }
};
