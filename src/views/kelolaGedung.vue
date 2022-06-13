<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <BreadcrumbKelolaGedung />
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
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'

import Footer from '@/components/footerComponent.vue'
import BreadcrumbKelolaGedung from '@/components/breadcrumbKelolaGedung.vue'

export default {
  name: 'kelolaGedung',
  components: {
    Navbar,
    Sidebar,
    Footer,
    BreadcrumbKelolaGedung
  
    }
  }


</script>

<style scoped>
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