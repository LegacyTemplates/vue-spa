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

import Button from './form/Button.vue';
Vue.component('v-button', Button);

import SvgImage from './ui/SvgImage.vue';
Vue.component('v-svg', SvgImage);

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

import NavButtonGroup from './nav/NavButtonGroup.vue';
Vue.component('v-nav-button-group', NavButtonGroup);

import NavLinkButton from './nav/NavLinkButton.vue';
Vue.component('v-nav-link-button', NavLinkButton);

export {
    Forbidden,
    SvgImage,
    Link,
    LinkButton,
    Nav,
    Navbar,
    NavLink,
};
