<template>
  <div class="Beranda">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <breadcrumbComponentVue/>
    <b-card-group class="box">
     <b-card bg-variant="success" text-variant="white" class="text-center" >
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
      </b-card>
    </b-card-group>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Footer from '@/components/footerComponent.vue'
import breadcrumbComponentVue from '../components/breadcrumbBeranda.vue'


export default {
  name: 'berandaView',
  components: {
    Navbar,
    breadcrumbComponentVue,
    Sidebar,
    Footer
  },

}
</script>

<style scoped>
body {
  background-color:#E5E5E5 !important;
}
.text-center {
  border:20px solid #E5E5E5 !important;
}
.box {
  height: 200px;
  background: #1CAB59 !important;
}
</style>