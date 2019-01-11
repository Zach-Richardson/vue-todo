<template>
  <div class="container login">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Login</h4>
        </div>
        <div class="card-body">
          <form class="form">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="email" required>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="password" required>
            </div>
            <button class="btn btn btn-primary">Log in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 100px;
}
</style>
