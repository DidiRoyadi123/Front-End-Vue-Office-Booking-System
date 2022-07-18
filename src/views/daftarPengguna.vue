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
      <!-- <b-table 
        striped hover 
        :items="items" 
        :fields="fields"
      >
      <template #cell(Aksi)>
         <b-button variant="success" @click="editGedung(gedung.id_gedung)">Edit</b-button>
          <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Hapus</b-button>
      </template>
      </b-table> -->

      <b-table-simple striped hover>
        <b-thead>
          <b-tr>
            <b-td>No</b-td>
            <b-td>Email</b-td>
            <b-td>Nama</b-td>
            <b-td>No.Hp</b-td>
            <b-td>Status</b-td>
            <b-td>Tanggal Registrasi</b-td>
            <b-td>Permintaan</b-td>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(user, id) in users"
                  :key="id" >
            <b-td>{{ user.id }}</b-td>
            <b-td>{{ user.email }}</b-td>
            <b-td>{{ user.name }}</b-td>
            <b-td>{{ user.phone }}</b-td>
            <b-td>{{ user.status }}</b-td>
            <b-td>{{ user.tanggal_registrasi }}</b-td>
            <b-td><b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Hapus</b-button></b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>

    </b-card>
    <liveChatBtn/>
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Breadcrumb from '../components/breadcrumb.vue'
import FooterComponent from '@/components/footerComponent.vue'
import liveChatBtn from '@/components/liveChatBtn.vue'

export default {
  name: 'daftarPengguna',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    FooterComponent,
    liveChatBtn
  },
    data() {
    return {
        users: [],
    
    }
  },
  computed(){
    // return this.$store.state.users
  },
  mounted(){
    // this.$store.dispatch('fetchUsers') 
    axios
    .get('https://officebooking-app-pn6n3.ondigitalocean.app/admin/users')
    .then(response => {
      this.users = response.data.data
      console.log(this.users)
    })
    .catch(error => {
      console.log(error)
    })
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