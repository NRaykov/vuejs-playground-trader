import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vuex-playground.firebaseio.com/";

//Creating Filters (Pipes)
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

import { routes } from './routes.js';

import store from './store/store.js'

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
