import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueToast from "vue-toast-notification";

import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/pt-br";
import "vue-toast-notification/dist/theme-sugar.css";

import "@/assets/index.css";

Vue.config.productionTip = false;

Vue.use(VueToast);

new Vue({
  store,
  // @ts-ignore
  render: h => h(App)
}).$mount("#app");
