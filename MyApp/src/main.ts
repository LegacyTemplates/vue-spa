import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import 'es6-shim';
import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from './App.vue'

import Controls from '@servicestack/vue';
Vue.use(Controls);

Vue.component('Icon', Icon)


import { router } from './shared/router';

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router,
});
