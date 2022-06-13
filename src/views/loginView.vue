<template>
  <div class="login">
    <Login />
    <div class="footer" >
      <FooterComponent/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/login.vue';
import FooterComponent from '@/components/footerComponent.vue';

export default {
  name: 'loginView',
  components: {
    Login,
    FooterComponent,
  },
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: #0e562d;
  color: white;
  margin-bottom: 0px;
}
</style>
