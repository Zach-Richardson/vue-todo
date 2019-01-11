<template>
  <div class="container todos">
    <div class="card">
      <div class="card-header">
        My Not Done Tasks
        <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addTodoModal">
          Add
        </button>
      </div>
      <div class="card-body">
        <todo v-for="todo in notDoneTodos" :key="todo.id" :todo="todo"></todo>
      </div>
    </div>
    <div class="card mt-5">
      <div class="card-header">My Done Tasks</div>
      <div class="card-body">
        <todo v-for="todo in doneTodos" :key="todo.id" :todo="todo"></todo>
      </div>
    </div>

    <!-- Add Task Modal -->
    <div class="modal fade" id="addTodoModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Task</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Task</label>
              <input type="text" class="form-control" v-model="name">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="saveTask()">Save</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "home",
  components: { Todo },
  mounted: function() { this.getTodos() },
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions(["addTodo", "getTodos"]),
    saveTask() {
      this.addTodo({
        id: Math.floor(Math.random() * 1000), 
        done: false, 
        name: this.name
      });
      this.name = "";
    }
  },
  computed: {
    ...mapGetters(["allTodos", "doneTodos", "notDoneTodos"])
  }
};
</script>

<style lang="scss" scoped>
.todos {
  margin-top: 50px;
}
</style>
