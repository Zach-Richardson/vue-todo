<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <Task v-for="task in allTasks" :key="task.id" :task="task"/>
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
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import Task from "@/components/Task";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: { Task },
  data: function() {
    return {
      name: "",
      description: "",
      dialog: false
    };
  },
  mounted: async function() { 
    await this.getTasks();
  },
  computed: { ...mapGetters(['allTasks']) },
  methods: {
    ...mapActions(['createTask', 'getTasks']),
    async save() {
      const task = { 
        name: this.name,
        description: this.description,
        done: false
      };
      await this.createTask(task);
      this.dialog = false;
    }
  }
};
</script>
