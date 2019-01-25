<template>
  <div class="ui inverted menu">
    <router-link class="item" v-for="item in items" :key="item.id" :to="item.route">{{item.name}}</router-link>
  </div>
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