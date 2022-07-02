<template>
  <div class="liveChat">
    <Navbar />
    <Sidebar />
    <br />
    <br />
    <br />
    <Breadcrumb />
    <b-card>
      <b-row cols="2" align-content="start">
        <b-col> <input v-model="search" type="text" class="form-control" placeholder="Search" aria-label="cari" aria-describedby="basic-addon1" @keyup="searchUser" /></b-col>

        <b-col>Column2</b-col>
      </b-row>
    </b-card>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue';
import Sidebar from '@/components/sidebarComponent.vue';
import FooterComponent from '@/components/footerComponent.vue';
import Breadcrumb from '../components/breadcrumb.vue';

export default {
  name: 'profilAdmin',
  components: {
    Navbar,
    Sidebar,
    FooterComponent,
    Breadcrumb,
  },
};
</script>

<style scoped>
.card {
  display: flexbox;
  margin-right: 25px;
  margin-left: 25px;
  margin-bottom: 25px;
}

.footer {
  position: fixed !important;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
