import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/style.css';
import markdown from '@/directives/markdown';

Vue.config.productionTip = false;
Vue.directive('markdown', markdown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
