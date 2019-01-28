<template>
  <v-app>
    <Navigation :drawer="drawer" />

    <v-toolbar class="primary" app>
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">ToDo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn color="primary" icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  },
  data: function() {
    return {
      drawer: true
    }
  }
}
</script>
