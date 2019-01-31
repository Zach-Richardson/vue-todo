<template>
  <v-flex xs12 sm6 md3 offset-md-0>
    <v-card>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{taskObj.name}}</h3>
          <div>{{taskObj.description}}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-btn flat color="primary" @click="done" v-show="!taskObj.done">Done</v-btn>
        <v-btn flat color="error" @click="remove">Remove</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import gql from "graphql-tag";
import { mapActions } from "vuex";

export default {
  name: "Task",
  props: { task: Object },
  data: function() {
    return { taskObj: this.task };
  },
  methods: { 
    ...mapActions(["completeTask", "removeTask"]),
    async done() { 
      this.taskObj.done = true;
      console.log(this.taskObj);
      await this.completeTask(this.taskObj);
    },
    async remove() {
      await this.removeTask(this.taskObj);
    }
  }
};
</script>
