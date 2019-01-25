import "semantic-ui-css/semantic.min.css"
import Vue from "vue";
import SuiVue from "semantic-ui-vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
Vue.use(SuiVue);