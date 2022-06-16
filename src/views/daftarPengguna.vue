<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <Breadcrumb />
    <b-card>
      <p>Kelola Akun Pengguna</p>
      <b-table 
        striped hover 
        :items="items" 
        :fields="fields"
      >
      <template #cell(Aksi)>
         <b-button variant="success" @click="editGedung(gedung.id_gedung)">Edit</b-button>
          <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Hapus</b-button>
      </template>
      </b-table>

    </b-card>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Breadcrumb from '../components/breadcrumb.vue'
import FooterComponent from '@/components/footerComponent.vue'

export default {
  name: 'daftarPengguna',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    FooterComponent
  },
    data() {
    return {
      fields: ['No', 'Email', 'Nama', 'NomorHp', 'TanggalRegistrasi', 'Aksi'],
      items: [
        { No: 1, Email: 'rara@gmail.com', Nama: 'Rara', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 2, Email: 'riri@gmail.com', Nama: 'Riri ', NomorHp: '085000000000',  TanggalRegistrasi: '02-05-2022'},
        { No: 3, Email: 'bayu@gmail.com', Nama: 'Bayu', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 4, Email: 'adit@gmail.con', Nama: 'Adit', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 5, Email: 'bagus@gmail.con', Nama: 'Bagus', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 6, Email: 'sinta@gmail.con', Nama: 'Sinta', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 7, Email: 'xira@gmail.con', Nama: 'Xira', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 8, Email: 'yanti@gmail.con', Nama: 'Yanti', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 9, Email: 'putra@gmail.con', Nama: 'Putra', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 10, Email: 'kamal@gmail.con', Nama: 'Kamal', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 11, Email: 'reza@gmail.con', Nama: 'Reza', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 12, Email: 'dino@gmail.con', Nama: 'Dino', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 13, Email: 'dina@gmail.con', Nama: 'Dino', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 14, Email: 'Cia@gmail.con', Nama: 'Cia', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },
        { No: 15, Email: 'carney@gmail.con', Nama: 'Carney', NomorHp: '085000000000', TanggalRegistrasi: '02-05-2022' },

      ]
    }
  }

}
</script>

<style scoped>
.list{
  background-color: #e5e5e5;
}
.card{
 margin-right: 25px;
 margin-left: 25px;
 margin-bottom: 25px;
}
p{
  font-family: 'Poppins';
  font-style: normal;
  font-size: 19px;
  font-weight:600;
  line-height: 33px;
  display: flex;
  color: #1CAB59;
}
.btn-success {
  background-color: #1CAB59;
  border-color: #1CAB59;
  width: 90px;
  height: 31px;
  margin: 10px !important;
  padding: 0 !important;
}
.btn-danger {
  background-color: #FF3538 !important;
  border-color: #FF3538 !important;
  width: 90px;
  height: 31px;
  margin: 10px !important;
  padding: 0 !important;
}

</style>