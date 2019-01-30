<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <Todo v-for="todo in tasks" :key="todo.id" :todo="todo"/>
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
import gql from "graphql-tag";

export default {
  name: "Home",
  components: { Todo },
  data: function() {
    return {
      name: "",
      description: "",
      dialog: false
    };
  },
  apollo: {
    tasks: gql`
      query {
        tasks {
          id,
          name,
          description,
          done
        }
      }
    `
  },
  methods: {
    async saveTask() {
      const variables = { 
        name: this.name,
        description: this.description,
        done: false
      };
      const mutation = gql`
        mutation($name: String!, $description: String!, $done: Boolean!) {
          createTask(name: $name, description: $description, done: $done) {
            task {
              id
              name
              description
              done
            }
          }
        }
      `;
      const result = await this.$apollo.mutate({ mutation, variables });
      this.task = result.data.createTask.task;    
      this.dialog = false;
    }
  }
};
</script>
