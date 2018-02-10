import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Layout from './components/layout';
import IndexPage from './pages/index';
import DetailPage from './pages/detail';
import DetailAnaPage from './pages/detail/analysis';
import DetailCouPage from './pages/detail/count';
import DetailForePage from './pages/detail/forecast';
import DetailPubPage from './pages/detail/publish';

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
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage,
        },
        {
          path: 'count',
          component: DetailCouPage,
        },
        {
          path: 'forecast',
          component: DetailForePage,
        },
        {
          path: 'publish',
          component: DetailPubPage,
        },
      ],
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

