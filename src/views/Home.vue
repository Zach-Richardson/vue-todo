<template>
  <div>
    <Todo v-for="todo in allTodos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Home",
  components: { Todo },
  mounted: function() {
    this.getTodos();
  },
  data: function() {
    return {
      name: "",
      description: "",
      showDialog: false
    };
  },
  methods: {
    ...mapActions(["addTodo", "getTodos"]),
    saveTask() {
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
  },
  computed: {
    ...mapGetters(["allTodos"])
  }
};
</script>
