<template>
  <div>
    <todo v-for="todo in allTodos" :key="todo.id" :todo="todo"></todo>

    <md-button class="md-fab md-fab-bottom-right md-primary" @click="showDialog = true">
      <md-icon>add</md-icon>
    </md-button>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Add Task</md-dialog-title>
      <md-dialog-content>
        <md-field>
          <label>Name</label>
          <md-input type="text" v-model="name" required/>
          <span class="md-error" v-show="!name">The task name is required</span>
        </md-field>
        <md-field>
          <label>Description</label>
          <md-input type="type" v-model="description" required/>
          <span class="md-error" v-show="!description">The task description is required</span>
        </md-field>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-accent" @click="showDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="saveTask()">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "home",
  components: { Todo },
  mounted: mounted,
  data: data,
  methods: {
    ...mapActions(["addTodo", "getTodos"]),
    saveTask
  },
  computed: {
    ...mapGetters(["allTodos"])
  }
};

function data() {
  return {
    name: "",
    description: "",
    showDialog: false
  };
}

function mounted() {
  this.getTodos();
}

function saveTask() {
  this.addTodo({
    id: Math.floor(Math.random() * 1000),
    done: false,
    name: this.name,
    description: this.description
  });
  this.name = "";
  this.description = "";
  this.showDialog = false;
}
</script>

<style lang="scss" scoped>
button {
  margin-left: 16px;
}
.md-dialog {
  min-width: 500px;
  max-width: 768px;
}
</style>
