<template>
  <v-container v-bind="{ [`grid-list-lg`]: true }" fluid>
    <v-layout row wrap>
      <Todo v-for="todo in allTodos" :key="todo.id" :todo="todo"/>
    </v-layout>

    <v-layout row justify-center>
      <v-dialog v-model="dialog" max-width="600px">
        <v-btn fab dark bottom right fixed color="primary" slot="activator">
          <v-icon dark>add</v-icon>
        </v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Add Task</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Task Name*" required v-model="name"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Task Description*" required v-model="description"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="saveTask">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
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
      size: "sm",
      name: "",
      description: "",
      dialog: false
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
      this.dialog = false;
    }
  },
  computed: {
    ...mapGetters(["allTodos"])
  }
};
</script>
