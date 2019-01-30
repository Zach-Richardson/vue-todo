<template>
  <v-flex xs12 sm6 md3 offset-md-0>
    <v-card>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{task.name}}</h3>
          <div>{{task.description}}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="primary" @click="completeTodo()" v-show="!task.done">Done</v-btn>
        <v-btn flat color="error" @click="removeTodo()">Remove</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Todo",
  props: { todo: Object },
  data: function() {
    return { task: this.todo };
  },
  methods: {
    async completeTodo() {
      const variables = { id: this.todo.id };
      const mutation = gql`
        mutation($id: Int!) {
          completeTask(taskId: $id) {
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
      this.task = result.data.completeTask.task;
    },
    async removeTodo() {
      const variables = { id: this.todo.id };
      const mutation = gql`
        mutation($id: Int!) {
          removeTask(taskId: $id) {
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
      this.task = result.data.removeTask.task;
    }
  }
};
</script>
