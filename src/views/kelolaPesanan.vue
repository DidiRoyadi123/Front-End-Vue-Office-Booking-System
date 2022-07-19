<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br />
    <br />
    <br />
    <Breadcrumb />
    <b-card v-if="loading">
      <b-spinner variant="success" label="Spinning"></b-spinner>
    </b-card>
    <b-card v-else>
      <p>Daftar Pemesanan</p>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(Permintaan)="data">
          <div v-if="data.item.Status === 'Belum Diterima'">
            <b-button variant="success" @click="EditPesanan(data.item)">Edit</b-button>
            <b-button variant="info" @click="BCPesanan()">Kirim Kode</b-button>
          </div>
          <div v-else>Kode Telah Dikirim</div>
        </template>
      </b-table>
    </b-card>
    <liveChatBtn />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue';
import Sidebar from '@/components/sidebarComponent.vue';
import Breadcrumb from '../components/breadcrumb.vue';
import FooterComponent from '@/components/footerComponent.vue';
import LiveChatBtn from '@/components/liveChatBtn.vue';
import axios from 'axios';

export default {
  name: 'daftarPengguna',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    FooterComponent,
    LiveChatBtn,
  },
  data() {
    return {
      fields: ['ID_Pemesanan', 'Nama', 'NomorHp', 'ID_Email', 'Nama_Gedung', 'Jumlah_Pemesanan', 'Total_Harga', 'Tanggal_Masuk', 'Tanngal_Keluar', 'Permintaan'],
      items: [],
      loading: true,
    };
  },
  async mounted() {
    await axios
      .get('https://officebooking-app-pn6n3.ondigitalocean.app/admin/bookings')
      .then((res) => {
        const data = res.data.data;
        data.forEach((item) => {
          this.items.push({
            ID: item.id,
            ID_Pemesanan: item.bookingcode,
            Nama: item.user.name || 'Lupa Masukkan',
            NomorHp: item.user.phone || 'Lupa Masukkan',
            Nama_Gedung: item.gedung.name || 'Lupa Masukkan',
            Jumlah_Pemesanan: item.gedung.jumlah || 'Lupa Masukkan',
            Total_Harga: item.gedung.harga || 'Lupa Narok',
            Tanggal_Masuk: item.checkin || 'gk Mesan',
            Tanngal_Keluar: item.checkout || 'gk Mesan',
            Status: item.status === '0' ? 'Belum Diterima' : 'Sudah Diterima',
          });
        });
        this.loading = false;
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
      });
  },
  methods: {
    EditPesanan(data) {
      let simpan = JSON.stringify(data);
      localStorage.setItem('EditPesanan', simpan);
      this.$router.push('/addPesanan');
      // console.log(data);
    },
  },
};
</script>

<style scoped>
.list {
  background-color: #e5e5e5;
}
.card {
  margin-right: 25px;
  margin-left: 25px;
  margin-bottom: 25px;
}
p {
  font-family: 'Poppins';
  font-style: normal;
  font-size: 19px;
  font-weight: 600;
  line-height: 33px;
  display: flex;
  color: #1cab59;
}
.btn-success {
  background-color: #1cab59;
  border-color: #1cab59;
  width: 90px;
  height: 31px;
  margin: 10px !important;
  padding: 0 !important;
}
.btn-danger {
  background-color: #ff3538 !important;
  border-color: #ff3538 !important;
  width: 90px;
  height: 31px;
  margin: 10px !important;
  padding: 0 !important;
}
</style>
