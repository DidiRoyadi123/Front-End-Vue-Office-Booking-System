<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <Breadcrumb />
    <b-card>
      <b-table-simple striped hover small caption-top responsive>
        <caption>Kelola Daftar Gedung</caption>
        <thead>
          <tr>
            <th>No</th>
            <th>ID Gedung</th>
            <th>Jenis Gedung</th>
            <th>Lokasi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(gedung, index) in gedungs">
            <td>{{ index + 1 }}</td>
            <td>{{ gedung.id_gedung }}</td>
            <td>{{ gedung.lokasi }}</td>
            <td>{{ gedung.harga }}</td> -->
          <tr>
            <td>1</td>
            <td>Gedung 1</td>
            <td>Hotel</td>
            <td>Jakarta</td>
            <td>Rp. 1.000.000/Day</td>
            <td>
              <b-button variant="success" @click="editGedung(gedung.id_gedung)">Edit</b-button>
              <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Hapus</b-button>
            </td>
          </tr>
           <tr>
            <td>2</td>
            <td>Gedung 2</td>
            <td>Hotel</td>
            <td>Jakarta</td>
            <td>Rp. 1.000.000/Day</td>
            <td>
              <b-button variant="success" @click="editGedung(gedung.id_gedung)">Edit</b-button>
              <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Hapus</b-button>
            </td>
          </tr>
        </tbody>
      </b-table-simple>

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
      items: [
        { No: 1, ID_Gedung: '002', Lokasi: 'Macdonald', Harga: 'Rp. 100.000/Day' },
        { No: 2, ID_Gedung: '003', Lokasi: 'Shaw ', Harga: 'Rp. 100.000/Day' },
        { No: 3, ID_Gedung: '004', Lokasi: 'Wilson', Harga: 'Rp. 100.000/Day' },
        { No: 4, ID_Gedung: '005', Lokasi: 'Carney', Harga: 'Rp. 100.000/Day' },
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
 margin-bottom: 40px;
 margin-top: 0px;
}
.btn-success {
  background-color: #1CAB59;
  border-color: #1CAB59;
  width: 90px;
  height: 31px;
  margin: 10px !important;
}
.btn-danger {
  background-color: #FF3538;
  border-color: #FF3538;
  width: 90px;
  height: 31px;
  margin: 10px !important;
}
caption {
  color: #1CAB59;
  font-weight: 600;
  font-size: 22px;
}
</style>