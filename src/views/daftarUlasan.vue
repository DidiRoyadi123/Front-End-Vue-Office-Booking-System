<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <h1>Halaman Daftar ulasan</h1>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Footer from '@/components/footerComponent.vue'

export default {
  name: 'daftarUlasan',
  components: {
    Navbar,
    Sidebar,
    Footer
  },

}
</script>