<template>
  <div class="home">
    <Login />

    <div class="footer" >
      <Footer />
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import Login from '@/components/login.vue'
import Footer from '@/components/footerComponent.vue'

export default {
  name: 'HomeView',
  components: {
    Login,
    Footer
  },

}
</script>

<style>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #0E562D;
  color: white;
  margin-bottom: 0px;
  
}
</style>