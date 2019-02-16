import Vue from 'vue';
import VueTouch from 'vue-touch';

import App from './App';
import router from './router';
import store from './store';

import './assets/theme/main.scss';

Vue.config.productionTip = false;

Vue.use(VueTouch, { name: 'v-touch' });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
