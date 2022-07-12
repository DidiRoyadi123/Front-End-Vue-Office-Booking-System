<template>
  <div class="Admin">
    <Navbar />
    <Sidebar />
    <br />
    <br />
    <br />
    <Breadcrumb />
    <b-card>
      <p>Pembuatan Pesanan Baru</p>
      <b-container fluid class="row mb-3">
        <form class="row">
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Jenis Gedung:</strong></label>
          </b-col>
          <b-col sm="10">
            <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
              <option selected>Masukkan Jenis Gedung</option>
              <option value="1">Auditorium</option>
              <option value="2">Hotel meeting Room</option>
              <option value="1">Gedung Serba Guna</option>
            </select>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Nama:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.nama" id="input-small" type="text" size="sm" placeholder="Masukkan Nama Lengkap"></b-form-input>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>No Handphone:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.no_hp" id="input-small" type="text" size="sm" placeholder="Masukkan No Handphone"></b-form-input>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Jumlah Pemesanan:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.jumlah_pesanan" id="input-small" type="text" size="sm" placeholder="Masukkan Jumlah Pemesanan"></b-form-input>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Total Harga:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.total_harga" id="input-small" type="text" size="sm" placeholder="Masukkan Total Harga"></b-form-input>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Tanggal Masuk:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" type="text" size="sm" placeholder="Masukkan Tanggal Masuk"></b-form-input>
          </b-col>
          <b-col sm="2" class="row mb-3">
            <label for="input-small" class="text1"><strong>Tanggal Keluar:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" type="text" size="sm" placeholder="Masukkan Tanggal Keluar"></b-form-input>
          </b-col>
          <b-col sm="2" class="row"> </b-col>
          <b-col sm="2">
            <button class="btn btn-success float-right mt-3" type="submit" @click="simpan">Buat</button>
            <button class="btn btn-success float-right mt-3">Batal</button>
          </b-col>
        </form>
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
import Breadcrumb from '../components/breadcrumb.vue';
import axios from 'axios';

export default {
  name: 'profilAdmin',
  components: {
    Navbar,
    Sidebar,
    FooterComponent,
    Breadcrumb,
  },
  data() {
    return {
      form: {
        gedung: [],
        nama: '',
        no_hp: '',
        jumlah_pesanan: '',
        total_harga: '',
      },
    };
  },

  methods: {
    simpan() {
      axios
        .post('https://officebooking-app-pn6n3.ondigitalocean.app/nearby')
        .then(() => {
          this.$router.push({ path: '/kelolaUlasan' });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
p {
  font-family: 'Poppins';
  font-style: normal;
  font-size: 19px;
  font-weight: 600;
  line-height: 33px;
  display: flex;
  color: #1cab59;
}
.card {
  margin-right: 25px;
  margin-left: 25px;
  margin-bottom: 40px;
  margin-top: 0px;
}
.Admin {
  background-color: #e5e5e5 !important;
  height: 100vh;
}
.card-body {
  background-color: #fefefe;
}
.text {
  text-align: left;
  color: #1cab59 !important;
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
  color: #1cab59 !important;
  font-weight: bold;
}
.footer {
  position: fixed !important;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
