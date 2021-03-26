import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/pt-br";

import "@/assets/index.css";

Vue.config.productionTip = false;

new Vue({
  store,
  // @ts-ignore
  render: h => h(App)
}).$mount("#app");
