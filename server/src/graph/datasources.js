const { DataSource } = require('apollo-datasource');

class TaskAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async completeTask(taskId) {
    const task = await this.store.tasks.findById(taskId);
    task.done = true;
    task.save();
    return task;
  }

  async getTasks() {
    const tasks = await this.store.tasks.findAll();
    return tasks ? tasks : [];
  }

  async getTaskById(taskId) {
    const task = await this.store.tasks.findById(taskId);
    return task;
  }

  async createTask({name, description, done}) {
    const task = await this.store.tasks.create({ name, description, done });
    return task
  }

  async removeTask(taskId) {
    const task = await this.store.tasks.findById(taskId);
    task.destroy();
    return task;
  }

}

module.exports = TaskAPI;
