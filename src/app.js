import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material';
// import 'vue-material/dist/vue-material.min.css';
// Vue.use(VueMaterial);

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGraph from 'vue-graph'

Vue.use(BootstrapVue)
Vue.use(require('vue-faker'));
Vue.use(VueGraph)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})