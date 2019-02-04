import Vue from "vue";
import Vuex from "vuex";
import { createProvider } from "./vue-apollo";
import gql from "graphql-tag";

Vue.use(Vuex);

const apollo = createProvider().defaultClient;

export default new Vuex.Store({
  state: () => {
    return {
      tasks: []
    };
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    }
  },
  mutations: {
    INIT_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    CREATE_TASK(state, task) {
      state.tasks.push(task);
    },
    COMPLETE_TASK(state, task) {
      state.tasks = state.tasks.filter(t => t.id !== task.id);
      state.tasks.push(task);
    },
    REMOVE_TASK(state, task) {
      state.tasks = state.tasks.filter(t => t.id !== task.id);
    }
  },
  actions: {
    async getTasks(state) {
      const query = gql`
        query {
          tasks {
            id
            name
            description
            done
          }
        }
      `;
      const result = await apollo.query({ query });
      state.commit("INIT_TASKS", result.data.tasks);
    },
    async createTask(state, task) {
      const variables = task;
      const mutation = gql`
        mutation($name: String!, $description: String!, $done: Boolean!) {
          createTask(name: $name, description: $description, done: $done) {
            task {
              id
              name
              description
              done
            }
          }
        }
      `;
      const result = await apollo.mutate({ mutation, variables });
      state.commit("CREATE_TASK", result.data.createTask.task);
    },
    async completeTask(state, task) {
      const variables = { id: task.id };
      const mutation = gql`
        mutation($id: Int!) {
          completeTask(taskId: $id) {
            task {
              id
              name
              description
              done
            }
          }
        }
      `;
      const result = await apollo.mutate({ mutation, variables });
      state.commit("COMPLETE_TASK", result.data.completeTask.task);
    },
    async removeTask(state, task) {
      const variables = { id: task.id };
      const mutation = gql`
        mutation($id: Int!) {
          removeTask(taskId: $id) {
            task {
              id
              name
              description
              done
            }
          }
        }
      `;
      const result = await apollo.mutate({ mutation, variables });
      state.commit("REMOVE_TASK", result.data.removeTask.task);
    }
  }
});
