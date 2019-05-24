import Vue from 'vue';
import Router from 'vue-router';

import { Forbidden } from '../controls/index';
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

const routes = [
  { path: Routes.Home, component: Home, props: { name: 'Vue' } },
  { path: Routes.About, component: About },
  // { path: Routes.SignIn, component: SignIn },
  // { path: Routes.SignUp, component: SignUp },
  // { path: Routes.Profile, component: Profile },
  // { path: Routes.Admin, component: Admin },
  { path: Routes.Forbidden, component: Forbidden },
  { path: '*', redirect: '/' },
];

const router = new Router ({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
});
export default router;

export const redirect = (path: string) => {
  const externalUrl = path.indexOf('://') >= 0;
  if (!externalUrl) {
      router.push({ path });
  } else {
      location.href = path;
  }
};
