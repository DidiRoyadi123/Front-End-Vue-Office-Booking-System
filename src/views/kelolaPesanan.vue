<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br />
    <br />
    <br />
    <Breadcrumb />
    <b-card>
      <p>Kelola Pesanan</p>
      <b-table-simple striped hover>
        <b-thead>
          <b-tr>
            <b-th>No</b-th>
            <b-th>Kode Pemesanan</b-th>
            <b-th>Nama Gedung</b-th>
            <b-th>No Handphone</b-th>
            <b-th>Jumlah Pesanan</b-th>
            <b-th>Total Harga</b-th>
            <b-th>Tanggal Masuk</b-th>
            <b-th>Tanggal Keluar</b-th>
            <b-th>Order Status</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(booking, id) in bookings" :key="id">
            <b-td>{{ booking.id }}</b-td>
            <b-td>{{ booking.bookingcode }}</b-td>
            <b-td>{{ booking.namagedung }}</b-td>
            <b-td>{{ booking.nama }}</b-td>
            <b-td>{{ booking.phone }}</b-td>
            <b-td>{{ booking.jumlah_pesanan }}</b-td>
            <b-td>{{ booking.total_harga }}</b-td>
            <b-td>{{ booking.checkin }}</b-td>
            <b-td>{{ booking.checkout }}</b-td>
            <b-td>{{ booking.status }}</b-td>
            <b-td>
              <b-button variant="success" @click="okGedung(pesanan.id_gedung)">Terima</b-button>
              <b-button v-b-modal.hapus variant="danger">Batalkan</b-button>
              <b-modal id="hapus" centered busy>
                <p class="my-4">Apakah Anda Yakin ?</p>
                <b-button variant="danger" @click="cancelGedung(gedung.id)">Ya</b-button>
                <b-button variant="success" @click="$bModal.hide('hapus')">Tidak</b-button>
              </b-modal>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
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
      bookings: [],
    };
  },

  mounted() {
    axios
      .get('https://officebooking-app-pn6n3.ondigitalocean.app/admin/bookings')
      .then((response) => {
        this.gedung = response.data.data;
        console.log(this.gedung);
      })
      .catch((error) => {
        console.log(error);
      });
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
