import Vue from 'vue';

import {
    NavBase,
} from './core';

import Forbidden from './nav/Forbidden.vue';
Vue.component('Forbidden', Forbidden);

import ErrorSummary from './form/ErrorSummary.vue';
Vue.component('error-summary', ErrorSummary);

import Input from './form/Input.vue';
Vue.component('v-input', Input);

import Select from './form/Select.vue';
Vue.component('v-select', Select);

import CheckBox from './form/CheckBox.vue';
Vue.component('v-checkbox', CheckBox);

import SvgImage from './ui/SvgImage.vue';
Vue.component('v-svg', SvgImage);

import SvgClass from './ui/SvgClass.vue';
Vue.component('i-svg', SvgClass);

import Link from './nav/Link.vue';
Vue.component('v-link', Link);

import LinkButton from './nav/LinkButton.vue';
Vue.component('v-link-button', LinkButton);

import Nav from './nav/Nav.vue';
Vue.component('v-nav', Nav);

import Navbar from './nav/Navbar.vue';
Vue.component('v-navbar', Navbar);

import NavLink from './nav/NavLink.vue';
Vue.component('v-nav-link', NavLink);

export {
    Forbidden,
    SvgImage,
    SvgClass,
    Link,
    LinkButton,
    Nav,
    Navbar,
    NavLink,
};
