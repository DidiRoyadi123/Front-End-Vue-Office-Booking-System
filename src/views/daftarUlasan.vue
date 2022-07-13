<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br />
    <br />
    <br />
    <Breadcrumb />
    <b-card>
      <p>Daftar Ulasan</p>
      <b-table striped hover :items="items" :fields="fields">
        <template #cell(Aksi)>
          <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Sembunyikan</b-button>
        </template>
      </b-table>
    </b-card>
    <liveChatBtn/>
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

export default {
  name: 'daftarUlasan',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    FooterComponent,
    LiveChatBtn
  },
  data() {
    return {
      fields: ['ID_Pengguna', 'Nama', 'Nomor_HP', 'ID_Email', 'Nama_Gedung', 'Ulasan_Pengguna', 'Aksi'],
      items: [
        { ID_Pengguna: '001', Nama: 'Deden Ahmad', Nomor_HP: '089456789101', ID_Email: 'deden11@gmail.com', Nama_Gedung: 'Hotel Meeting Room', Ulasan_Pengguna: 'Hotel Sangat Baik Pelayanannya' },
        { ID_Pengguna: '002', Nama: 'Moel Joko', Nomor_HP: '089456789102', ID_Email: 'moel101@gmail.com ', Nama_Gedung: 'Auditorium', Ulasan_Pengguna: 'Ruangan Sangat Rapih dan Bersih' },
        { ID_Pengguna: '003', Nama: 'Kurnia Dewi', Nomor_HP: '089456789103', ID_Email: 'kurnia11@gmail.com ', Nama_Gedung: 'Gedung Serba Guna', Ulasan_Pengguna: 'Gedung sangat bersih dan segar udaranya' },
        { ID_Pengguna: '004', Nama: 'Dety Armida', Nomor_HP: '089456789104', ID_Email: 'armida1@gmail.com ', Nama_Gedung: 'Hotel Meeting Room' },
        { ID_Pengguna: '005', Nama: 'Rivandi', Nomor_HP: '089456789105', ID_Email: 'rivan11@gmail.com', Nama_Gedung: 'Auditorium', Ulasan_Pengguna: 'Ruangan Sangat Rapih dan Bersih' },
        { ID_Pengguna: '006', Nama: 'Fahri', Nomor_HP: '089456789106', ID_Email: 'fahri21@gmail.com', Nama_Gedung: 'Gedung Serba Guna', Ulasan_Pengguna: 'Gedung sangat bersih dan segar udaranya' },
      ],
    };
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
