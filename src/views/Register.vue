<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item">
        <h1>Register</h1>
      </div>
    </div>

    <md-content class="md-scrollbar selection-black">
      <p>Autem enim asperiores consequuntur neque sequi ea similique ex maxime, repudiandae doloremque aliquam exercitationem omnis assumenda. Rem suscipit pariatur vero facere?</p>
      <p>Necessitatibus aut cumque sit ad. Tempora perferendis nostrum, in assumenda accusantium vitae vero pariatur sapiente nam quisquam, ducimus distinctio quae nisi.</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed perspiciatis sit quaerat molestiae iusto adipisci possimus cum modi quam qui esse vero provident, ad, deserunt laborum quas eligendi beatae quibusdam.</p>
    </md-content>
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
  .md-content {
    padding: 1px 16px;
  }
</style>
