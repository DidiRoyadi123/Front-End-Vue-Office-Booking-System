import Vue from 'vue'
import VueRouter from 'vue-router'
import loginView from '../views/loginView.vue'
import berandaView from '../views/berandaView.vue'
import addGedung from '../views/addGedung.vue'
import kelolaGedung from '../views/kelolaGedung.vue'
import daftarPengguna from '../views/daftarPengguna.vue'
import daftarUlasan from '../views/daftarUlasan.vue'
import pemesanan from '../views/pemesanan.vue'
import addPromosi from '../views/addPromosi.vue'
import kelolaPromosi from '../views/kelolaPromosi.vue'

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
    component: berandaView
  },
  {
    path: '/addGedung',
    name: 'addGedung',
    component: addGedung
  },
  {
    path: '/kelolaGedung',
    name: 'kelolaGedung',
    component: kelolaGedung
  },
  {
    path: '/daftarPengguna',
    name: 'daftarPengguna',
    component: daftarPengguna
  },
  {
    path: '/daftarUlasan',
    name: 'daftarUlasan',
    component: daftarUlasan
  },
  {
    path: '/pemesanan',
    name: 'pemesanan',
    component: pemesanan
  },
  {
    path: '/addPromosi',
    name: 'addPromosi',
    component: addPromosi
  },
  {
    path: '/kelolaPromosi',
    name: 'kelolaPromosi',
    component: kelolaPromosi
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
