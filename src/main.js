import Vue from 'vue'
import App from './App.vue'
import connectVendor from './vendor';

Vue.config.productionTip = false;

const { router, store } = connectVendor(Vue);

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
