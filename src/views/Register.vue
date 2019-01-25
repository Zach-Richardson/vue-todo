<template>
  <div class="ui four column grid container centered">
    <div class="two column row">
      <div class="column">
        <h2>Register</h2>
      </div>
    </div>
    <div class="two column row">
      <div class="column">
        <form class="ui form">
          <div class="field">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="firstName" required>
          </div>
          <div class="field">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model="lastName" required>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="field">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="email" required>
          </div>
          <div class="field">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <button class="ui button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data: data
};

function data() {
  return {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
}
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 100px;
}
</style>
