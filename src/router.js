import Vue from 'vue';
import Router from 'vue-router';

import Builder from './views/Builder';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'builder',
      component: Builder,
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart'),
    },
  ],
});
