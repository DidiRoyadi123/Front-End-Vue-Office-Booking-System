<template>
  <div class="home">
   <Login/>
  </div>


</template>

<script>
// @ is an alias to /src
import Login from '@/components/login.vue'


export default {
  name: 'HomeView',
  components: {
    Login
  },

}
</script>

<style>


</style>