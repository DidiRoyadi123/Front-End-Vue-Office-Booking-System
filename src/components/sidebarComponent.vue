<template>
  <div class="sidebar">
    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" no-header shadow :backdrop-variant="variant"
      backdrop>
      <!-- <template #default="{ hide }"> -->
      <div class="p-3">
        <img alt="Vue logo" src="../assets/logo.png">
        <nav >
          

          <!-- <b-card no-body> -->
            <b-list-group flush class="d-flex align-items-center" vertical="md">
              <b-list-group-item href="/beranda" variant="light">Beranda</b-list-group-item>

              <!-- <b-list-group-item href="#" variant="light">
                <b-dropdown text="Daftar Gedung" variant="light"  >
                  <b-dropdown-item to="/addGedung">Tambah Gedung</b-dropdown-item>
                  <b-dropdown-item to="/kelolaGedung">Kelola Gedung</b-dropdown-item>
                </b-dropdown> -->

                <!-- <b-card no-body class="mb-1"> -->
                  <!-- <b-card-header header-tag="header" class="p-1" role="tab"> -->
                    <b-button block v-b-toggle.accordion-1 variant="light" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Daftar Gedung</b-button>
                  <!-- </b-card-header> -->
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <!-- <b-card-body> -->
                        <!-- <b-card-text> -->
                              <b-list-group-item to="/addGedung" variant="light">Tambah Gedung</b-list-group-item>
                              <b-list-group-item to="/kelolaGedung" variant="light">Kelola Gedung</b-list-group-item>
                        <!-- </b-card-text> -->
                      <!-- </b-card-body> -->
                  </b-collapse>
                <!-- </b-card> -->

              <!-- </b-list-group-item> -->
              <b-list-group-item to="/daftarPengguna" variant="light">Daftar Pengguna</b-list-group-item>
              <b-list-group-item to="/daftarUlasan" variant="light">Daftar Ulasan</b-list-group-item>
              <b-list-group-item to="/pemesanan" variant="light">Pemesanan</b-list-group-item>
              <b-button block v-b-toggle.accordion-1 variant="light" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">Promosi</b-button> 
                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                              <b-list-group-item to="/addPromosi" variant="light">Tambah Promosi</b-list-group-item>
                              <b-list-group-item to="/kelolaPromosi" variant="light">Kelola Promosi</b-list-group-item>
                  </b-collapse>
              <!-- <b-list-group-item href="#" variant="light"> -->
                <!-- <b-dropdown text="Promosi" variant="light" >
                  <b-dropdown-item to="/addPromosi">Tambah Promosi</b-dropdown-item>
                  <b-dropdown-item to="/kelolaPromosi">Kelola Promosi</b-dropdown-item>
                </b-dropdown> -->
              <!-- </b-list-group-item> -->
            </b-list-group>
          <!-- </b-card> -->
        </nav>

      </div>
      <!-- </template> -->
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'sidebarComponent',
  data() {
    return {
    }
  },
}
</script>

<style >
  
.list-group-item {
  text-align: left;
  color: #BBBBBB;
}
.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
  color: #0E562D !important;
  background-color: #B3E3C8 !important;
}
.card>.list-group:first-child .list-group-item:first-child {
  border-width: 100% !important;
}
.btn-light {
  background-color: #fefefe !important;
  border-radius: 0px !important;
  border: 0 !important;
  border-color: #fefefe !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  font-weight: bold !important;
  color: #636464 !important;
  width: 100% !important;
}
.btn-light:hover {
  background-color: #B3E3C8 !important;
  border-color: #B3E3C8 !important;
}
.img{
  width:80px;
}
</style>