<template>
  <md-card>
    <md-card-header>
      <div class="md-title">{{todo.name}}</div>
    </md-card-header>
    <md-card-content>{{todo.description}}</md-card-content>
    <md-card-actions>
      <md-button class="md-accent" @click="removeTodo(todo)">Remove</md-button> 
      <md-button class="md-primary" @click="doneTodo(todo)" v-show="!todo.done">Done</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Todo",
  props: { todo: Object },
  methods: { ...mapActions(["doneTodo", "removeTodo"]) }
};
</script>

<style scoped lang="scss">
</style>
