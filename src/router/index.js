import VueRouter from 'vue-router'
import Vue from 'vue'

export default function (routes) {
  Vue.use(VueRouter);

  return new VueRouter({
    routes,
    mode: 'history',
    base: '/',
  });
}