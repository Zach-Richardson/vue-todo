import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => {
    return {
      todos: []
    };
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
    doneTodos(state) {
      return state.todos.filter(t => t.done);
    },
    notDoneTodos(state) {
      return state.todos.filter(t => !t.done);
    }
  },
  mutations: {
    ADD_TODO(state, todo){
      state.todos.push(todo);
    },
    DONE_TODO(state, todo) {
      todo.done = true;
      state.todos = state.todos.filter(t => t.id !== todo.id);
      state.todos.push(todo);
    },
    REMOVE_TODO(state, todo) {
      state.todos = state.todos.filter(t => t.id !== todo.id);
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    getTodos(state) {
      const todos = [
        {
          id: 1,
          name: "Do Something",
          description: "This is something I really need to do",
          done: false
        },
        {
          id: 2,
          name: "Do Something Else",
          description: "This is something else I really need to do",
          done: false
        }
      ]
      state.commit("SET_TODOS", todos);
    },
    addTodo(state, todo) {
      state.commit("ADD_TODO", todo);
    },
    doneTodo(state, todo) {
      state.commit("DONE_TODO", todo);
    },
    removeTodo(state, todo) {
      state.commit("REMOVE_TODO", todo);
    }
  }
});
