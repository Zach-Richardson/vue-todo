<template>
  <v-app>
    <Navigation />

    <v-toolbar class="primary" app>
      <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon>
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

    <v-footer height="auto" class="primary lighten-3" app>
      <v-layout justify-center row wrap>
        <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
          &copy;2018 —
          <strong>ToDo</strong>
        </v-flex>
      </v-layout>
    </v-footer>
    
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  }
}
</script>
