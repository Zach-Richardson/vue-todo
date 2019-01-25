<template>
  <div class="ui grid container">
    <button class="ui button primary" @click="showModal=true">Add Task</button>
    <div class="ui cards row">
      <todo v-for="todo in allTodos" :key="todo.id" :todo="todo"></todo>
    </div>

    <modal v-model="showModal">
      <div slot="header">Add Task</div>
      <div slot="content">
        <div class="ui form">
          <div class="field">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name">
          </div>
          <div class="field">
            <label>Description</label>
            <input type="text" class="form-control" v-model="description">
          </div>
        </div>
      </div>
      <div slot="actions">
        <div class="ui default deny button" @click="showModal=false">Cancel</div>
        <div class="ui primary right button" @click="saveTask">Add Task</div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "vue-semantic-modal";
import Todo from "@/components/Todo.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "home",
  components: { Modal, Todo },
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
    showModal: false,
    name: "",
    description: ""
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
  this.showModal = false;
}
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 50px;
}
</style>
