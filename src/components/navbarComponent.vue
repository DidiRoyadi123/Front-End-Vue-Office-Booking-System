<template>
  <div class = "navbar">
  <b-navbar toggleable="lg" type="dark" variant="success" fixed="top">
    <b-button size="sm" v-b-toggle.sidebar-menu><b-icon icon="list"></b-icon></b-button>
    <!-- <b-navbar-brand href="#">SISTEM MANAJEMEN BOOKING GEDUNG ONLINE</b-navbar-brand> -->
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="h1" class="mb-0">SISTEM MANAJEMEN BOOKING GEDUNG ONLINE</b-navbar-brand>
    </b-navbar>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      
      <b-navbar-nav class="ml-auto" >        
        <b-nav-item-dropdown text="Selamat Datang">
          <b-dropdown-item href="#">Admin</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default{
  name: 'navbarComponent',
}
</script>

<style>
.navbar-nav {
  margin-right: 1000px;
}
</style>