<template>
  <div>
    <form class="md-layout md-alignment-top-center" @submit.stop.prevent="login">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label>Email</label>
            <md-input type="email" autocomplete="email" v-model="email" required/>
            <span class="md-error" v-show="!email">The email is required</span>
          </md-field>
          <md-field>
            <label>Password</label>
            <md-input type="password" autocomplete="password" v-model="password" required/>
            <span class="md-error" v-show="!password">The password is required</span>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Log in</md-button>
        </md-card-actions>
      </md-card>
      <md-snackbar md-position="left" md-duration="2000" :md-active.sync="showSnackbar" md-persistent>
        <span>Welcome Back!</span>
        <md-button class="md-primary" @click="showSnackbar = false">Thanks</md-button>
      </md-snackbar>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data: data,
  methods: {
    login
  }
};

function data() {
  return {
    email: null,
    password: null,
    showSnackbar: false,
    position: "left",
    duration: 4000
  };
}

function login() {
  this.showSnackbar = true;
}
</script>

<style lang="scss" scoped>
</style>
