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
    name: '',
    component: berandaView
  },
  {
    path: '/beranda',
    name: '',
    component: berandaView
  },
  {
    path: '/addGedung',
    name: 'Pembuatan Daftar Gedung',
    component: addGedung
  },
  {
    path: '/kelolaGedung',
    name: 'Kelola Gedung',
    component: kelolaGedung
  },
  {
    path: '/daftarPengguna',
    name: 'Daftar Pengguna',
    component: daftarPengguna
  },
  {
    path: '/daftarUlasan',
    name: 'Daftar Ulasan',
    component: daftarUlasan
  },
  {
    path: '/pemesanan',
    name: 'Pemesanan',
    component: pemesanan
  },
  {
    path: '/addPromosi',
    name: 'Tambah Promosi',
    component: addPromosi
  },
  {
    path: '/kelolaPromosi',
    name: 'Kelola Promosi',
    component: kelolaPromosi
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
