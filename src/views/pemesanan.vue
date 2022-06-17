<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <Breadcrumb />
    <h1>Halaman Pemesanan</h1>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Breadcrumb from '../components/breadcrumb.vue'
import FooterComponent from '@/components/footerComponent.vue'

export default {
  name: 'daftarPengguna',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    FooterComponent
  },

}
</script>