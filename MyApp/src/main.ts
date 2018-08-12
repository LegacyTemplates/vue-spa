import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './app.scss';
import 'es6-shim';

import Vue from 'vue';
import App from './App.vue';

import router from './router';

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router,
});
