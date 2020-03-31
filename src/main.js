import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Creating Filters (Pipes)
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

import { routes } from './routes.js';

import store from './store/store.js'

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
