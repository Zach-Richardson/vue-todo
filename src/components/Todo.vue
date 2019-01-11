<template>
  <div class="row todo">
    <div class="col mt-3">
      {{todo.name}}
      <div class="btn-group float-right">
        <button class="btn btn-success" @click="doneTodo(todo)" v-show="!todo.done">Done</button>
        <button class="btn btn-danger" @click="removeTodo(todo)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  props: { todo: Object },
  methods: {
    ...mapActions(["doneTodo", "removeTodo"])
  }
};
</script>

<style scoped lang="scss">
</style>
