import Vue from 'vue';
import Router, { Route } from 'vue-router';

import { store, bus } from './index';

import { Forbidden } from '@servicestack/vue';
import Home from '../components/Home/index.vue';
import About from '../components/About.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import Profile from '../components/Profile.vue';
import Admin from '../components/Admin/index.vue';

export enum Routes {
  Home = '/',
  About = '/about',
  SignIn = '/signin',
  SignUp = '/signup',
  Profile = '/profile',
  Admin = '/admin',
  Forbidden = '/forbidden',
}

Vue.use(Router);

function requiresAuth(to: Route, from: Route, next: (to?: string) => void) {
  if (!store.userSession) {
    next(`${Routes.SignIn}?redirect=${encodeURIComponent(to.path)}`);
    return;
  }
  next();
}

function requiresRole(role: string) {
  return (to: Route, from: Route, next: (to?: string) => void) => {
    if (!store.userSession) {
      next(`${Routes.SignIn}?redirect=${encodeURIComponent(to.path)}`);
    }
    else if (!store.userSession.roles || store.userSession.roles.indexOf(role) < 0) {
      next(`${Routes.Forbidden}?role=${encodeURIComponent(role)}`);
    }
    else {
      next();
    }
  };
}

const routes = [
  { path: Routes.Home, component: Home, props: { name: 'Vue' } },
  { path: Routes.About, component: About, props: { message: 'About page' } },
  { path: Routes.SignIn, component: SignIn },
  { path: Routes.SignUp, component: SignUp },
  { path: Routes.Profile, component: Profile, beforeEnter: requiresAuth },
  { path: Routes.Admin, component: Admin, beforeEnter: requiresRole('Admin') },
  { path: Routes.Forbidden, component: Forbidden },
  { path: '*', redirect: '/' },
];

export const router = new Router ({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
});

export const redirect = (path: string) => {
  const externalUrl = path.indexOf('://') >= 0;
  if (!externalUrl) {
      router.push({ path });
  } else {
      location.href = path;
  }
};

bus.$on('signout', async () => {
  // reload current page after and run route guards after signing out.
  const to = router.currentRoute;
  router.replace('/');
  router.replace(to.fullPath);
});
