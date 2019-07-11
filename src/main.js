//window.Vue = require('vue');
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vuetify from 'vuetify';

Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css';




import App from './App.vue';



new Vue({
  el: '#app',
  render: h => h(App),
});

