<template>
  <div class="container register">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Register</h4>
        </div>
        <div class="card-body">
          <form class="form">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" v-model="firstName" required>
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" v-model="lastName" required>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email" required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" required>
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input type="password" class="form-control" v-model="confirmPassword" required>
              <small class="form-text text-danger" v-show="password !== confirmPassword">The Passwords Don't Match</small>
            </div>
            <button class="btn btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.register {
  margin-top: 100px;
}
</style>
