<template>
  <md-menu md-align-trigger md-size="medium">
    <md-button md-menu-trigger>
      <md-icon>menu</md-icon>
    </md-button>

    <md-menu-content>
      <md-menu-item v-for="item in items" :key="item.id">
        <router-link :to="item.route">{{item.name}}</router-link>
      </md-menu-item>
    </md-menu-content>
  </md-menu>
</template>

<script>
export default {
  name: "TopMenu",
  props: {
    items: {
      type: Array,
      default: function() {
        return [
          {
            id: 1,
            name: "Home",
            route: "/"
          },
          {
            id: 2,
            name: "Login",
            route: "/login"
          },
          {
            id: 3,
            name: "Register",
            route: "/register"
          }
        ];
      }
    }
  }
};
</script>