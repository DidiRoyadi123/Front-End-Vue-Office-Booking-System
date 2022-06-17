<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <Breadcrumb />
    <b-card>
      <p>Kelola Pesanan</p>
      <b-table 
        striped hover 
        :items="items" 
        :fields="fields"
      >
      <template #cell(Aksi)>
         <b-button variant="success" @click="editGedung(gedung.id_gedung)">Terima</b-button>
          <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Batalkan</b-button>
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
      fields: ['ID_Pemesanan','Nama', 'NomorHp','ID_Email' ,'Nama_Gedung','Jumlah_Pemesanan','Total_Harga','Status', 'Aksi'],
      items: [
        { ID_Pemesanan: 1, Nama: 'Rara', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari',Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 2, Nama: 'Riri ', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari',  Total_Harga: 'Rp.2.000.000',Status:'Belum Ada'},
        { ID_Pemesanan: 3, Nama: 'Bayu', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000',Status:'Belum Ada' },
        { ID_Pemesanan: 4, Nama: 'Adit', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 5, Nama: 'Bagus', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 6, Nama: 'Sinta', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000',Status:'Belum Ada' },
        { ID_Pemesanan: 7, Nama: 'Xira', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 8, Nama: 'Yanti', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 9, Nama: 'Putra', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 10, Nama: 'Kamal', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000',Status:'Belum Ada' },
        { ID_Pemesanan: 11, Nama: 'Reza', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000',Status:'Belum Ada' },
        { ID_Pemesanan: 12, Nama: 'Dino', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000',Status:'Belum Ada' },
        { ID_Pemesanan: 13, Nama: 'Dino', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 14, Nama: 'Cia', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000' ,Status:'Belum Ada'},
        { ID_Pemesanan: 15, Nama: 'Carney', NomorHp: '085000000000',ID_Email: 'andi123@gmail.com' ,Nama_Gedung:'Hotel',Jumlah_Pemesanan:'3 hari', Total_Harga: 'Rp.2.000.000',Status:'Belum Ada' },

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