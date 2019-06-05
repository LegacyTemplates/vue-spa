import 'bootstrap/dist/css/bootstrap.css';
import './app.scss';
import 'es6-shim';

import Vue from 'vue';

import Controls from '@servicestack/vue';
Vue.use(Controls);

import App from './App.vue';

import { router } from './shared/router';

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router,
});
