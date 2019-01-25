<template>
<div>
  <top-menu></top-menu>
  <router-view></router-view>
</div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";

export default {
  components: { TopMenu }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ui.modal {
  margin-top: 50px !important;
  margin-left: 25% !important;
}
</style>
