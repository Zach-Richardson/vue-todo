<template>
  <div>
    <form class="md-layout md-alignment-top-center" @submit.stop.prevent="register">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Create a Free Account</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>First Name</label>
                <md-input type="text" v-model="firstName" required/>
                <span class="md-error" v-show="!firstName">The first name is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Last Name</label>
                <md-input type="text" v-model="lastName" required/>
                <span class="md-error" v-show="!lastName">The last name is required</span>
              </md-field>
            </div>
          </div>
          <md-field>
            <label>Email</label>
            <md-input type="email" v-model="email" required/>
            <span class="md-error" v-show="!email">The email is required</span>
          </md-field>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Password</label>
                <md-input type="password" v-model="password" required/>
                <span class="md-error" v-show="!password">The password is required</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label>Confirm Password</label>
                <md-input type="password" v-model="confirmPassword" required/>
                <span
                  class="md-error"
                  v-show="confirmPassword !== password"
                >The passwords don't match</span>
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Create Account</md-button>
        </md-card-actions>
      </md-card>
      <md-snackbar md-position="left" md-duration="2000" :md-active.sync="showSnackbar" md-persistent>
        <span>Your account was created successfully!</span>
        <md-button class="md-primary" @click="showSnackbar = false">Okay</md-button>
      </md-snackbar>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data: data,
  methods: {
    register
  }
};

function data() {
  return {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
    showSnackbar: false,
    position: "left",
    duration: 4000
  };
}

function register() {
  this.showSnackbar = true;
}
</script>

<style lang="scss" scoped>
</style>
