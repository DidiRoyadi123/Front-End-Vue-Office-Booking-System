<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <Breadcrumb />
    <b-card>
      <p>Kelola Daftar Gedung</p>
      <b-table 
        striped hover 
        :items="items" 
        :fields="fields"
      >
      <template #cell(Aksi)>
         <b-button variant="success" @click="editGedung(gedung.id_gedung)">Edit</b-button>
          <b-button variant="danger" @click="showAlertConfirm">Hapus</b-button>
          <!-- <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Hapus</b-button> -->
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
  name: 'kelolaGedung',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    FooterComponent
  },
  data() {
    return {
      fields: ['No', 'ID_Gedung', 'Jenis_Gedung', 'Lokasi', 'Harga', 'Aksi'],
      items: [
        { No: 1, ID_Gedung: '002',Jenis_Gedung: 'Low-rise', Lokasi: 'Macdonald', Harga: 'Rp. 100.000/Day' },
        { No: 2, ID_Gedung: '003',Jenis_Gedung: 'Mid-rise', Lokasi: 'Shaw ', Harga: 'Rp. 100.000/Day' },
        { No: 3, ID_Gedung: '003',Jenis_Gedung: 'Mid-rise', Lokasi: 'Shaw ', Harga: 'Rp. 100.000/Day' },
        { No: 4, ID_Gedung: '003',Jenis_Gedung: 'Mid-rise', Lokasi: 'Shaw ', Harga: 'Rp. 100.000/Day' },
        { No: 5, ID_Gedung: '004',Jenis_Gedung: 'High-rise', Lokasi: 'Wilson', Harga: 'Rp. 100.000/Day' },
        { No: 6, ID_Gedung: '005',Jenis_Gedung: 'Kantor dengan ruang ritel', Lokasi: 'Carney', Harga: 'Rp. 100.000/Day' },
        { No: 7, ID_Gedung: '005',Jenis_Gedung: 'Low-rise, multitenant', Lokasi: 'Carney', Harga: 'Rp. 100.000/Day' },

      ]
    }
  },
  methods: {
        showAlertConfirm(){
            this.$swal({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
              if (result.value) {
                this.$swal(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            });
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
div.swal2-container.swal2-center.swal2-backdrop-show {
  z-index: 5 !important;
}
</style>