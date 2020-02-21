import Vue from 'vue';
import App from './App.vue';
import scrollAnimation from './scrollAnimation';
import VueLazyload from 'vue-lazyload';

Vue.directive('scrollAnimation', scrollAnimation);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
