import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Layout from './components/layout';
import IndexPage from './pages/index';

// 路由
Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
  ],
});

const vm = new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout },
});

Vue.use({
  vm,
});

