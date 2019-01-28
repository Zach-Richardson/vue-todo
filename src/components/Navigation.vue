<template>
  <v-navigation-drawer enable-resize-watcher app v-model="drawer">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img
              src="https://media.licdn.com/dms/image/C5603AQGe8CunU5WozQ/profile-displayphoto-shrink_100_100/0?e=1554336000&v=beta&t=MvCH6K2FJiXe2lbksoebM8S808PRKs4l3Z_FwuWK910"
            >
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Zach Richardson</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.route)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    drawer: Boolean
  },
  data: function() {
    return {
      items: [
        { title: "Home", icon: "dashboard", route: "/" },
        { title: "Register", icon: "person_add", route: "/register" },
        { title: "Login", icon: "lock_open", route: "/login" }
      ]
    };
  }
};
</script>
