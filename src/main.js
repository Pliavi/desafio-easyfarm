import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VCalendar from 'v-calendar';

Vue.use(VCalendar);

Vue.config.productionTip = false

new Vue({
  store,
  // @ts-ignore
  render: h => h(App)
}).$mount('#app')
