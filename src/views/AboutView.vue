<template>
  <div class="about">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <h1>This is an about page</h1>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Footer from '@/components/footerComponent.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Sidebar,
    Footer
  },

}
</script>