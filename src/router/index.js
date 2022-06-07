import Vue from 'vue'
import VueRouter from 'vue-router'
import loginView from '../views/loginView.vue'
import berandaView from '../views/berandaView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginView
  },
  {
    path: '/beranda',
    name: 'beranda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: berandaView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
