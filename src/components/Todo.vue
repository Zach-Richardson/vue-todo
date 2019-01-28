<template>
  <v-flex xs12 sm6 md3 offset-md-0>
    <v-card>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{todo.name}}</h3>
          <div>{{todo.description}}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="primary" @click="doneTodo(todo)" v-show="!todo.done">Done</v-btn>
        <v-btn flat color="error" @click="removeTodo(todo)">Remove</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
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
