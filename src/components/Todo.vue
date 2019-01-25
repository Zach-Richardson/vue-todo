<template>
    <div class="card">
      <div class="image">
        <img src="@/assets/todo.png">
      </div>
      <div class="content">
        <div class="header">{{todo.name}}</div>
        <div class="description">{{todo.description}}</div>
      </div>
      <div class="extra content">
        <button class="ui button primary" @click="doneTodo(todo)" v-show="!todo.done">Done</button>
        <button class="ui button negative" @click="removeTodo(todo)">Remove</button>
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
