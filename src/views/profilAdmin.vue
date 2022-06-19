<template>
  <div class="Admin">
    <Navbar />
    <Sidebar />
    <br />
    <br />
    <br />
    <breadcrumbComponentVue />
    <br />
    <b-card>
      <b-container fluid class="row mb-3">
        <p class="text"><strong> Perbarui Password Admin </strong></p>
        <b-row class="my-1">
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Password Lama:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" type="password" size="sm" placeholder="Masukkan Password Lama"></b-form-input>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Password Baru:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" type="password" size="sm" placeholder="Masukkan Password Baru"></b-form-input>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Konfirmasi Password Baru:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" type="password" size="sm" placeholder="Konfirmasi Password Baru"></b-form-input>
          </b-col>
          <b-col sm="2" class="row"> </b-col>
          <b-col sm="2">
            <button class="btn btn-success float-right mt-3">Ubah</button>
            <button class="btn btn-success float-right mt-3">Batal</button>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue';
import Sidebar from '@/components/sidebarComponent.vue';
import FooterComponent from '@/components/footerComponent.vue';
import breadcrumbComponentVue from '../components/breadcrumbBeranda.vue';
export default {
  name: 'profilAdmin',
  components: {
    Navbar,
    Sidebar,
    FooterComponent,
    breadcrumbComponentVue,
  },
};
</script>

<style scoped>
.Admin {
  background-color: #e5e5e5 !important;
  height: 100vh;
}
.card-body {
  background-color: #fefefe;
}

.text {
  text-align: left;
  color: green;
}

.text1 {
  text-align: end;
}

.box {
  height: 200px;
  background: #fefefe !important;
}
svg {
  width: 45px;
  height: 45px;
  margin: 0 auto;
  display: block;
}
path {
  fill: #f4f4f4 !important;
}
.card-text {
  font-weight: 700;
}
button {
  width: auto;
  margin-right: 5px;
}

.btn-success {
  background-color: white;
  color: green;
  font-weight: bold;
}
</style>
