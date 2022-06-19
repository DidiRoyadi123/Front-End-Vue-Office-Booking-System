<template>
  <div class="sidebar">
    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" no-header shadow :backdrop-variant="variant" backdrop>
      <!-- <template #default="{ hide }"> -->
      <div class="p-3">
        <img alt="Vue logo" src="../assets/logo.png" />
        <nav class="mb-3">
          <!-- <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav> -->

          <b-card no-body>
            <b-list-group flush class="flex-column align-items-start" vertical="md">
              <b-list-group-item href="/beranda" variant="light">Beranda</b-list-group-item>

              <b-list-group-item href="#" variant="light">
                <b-dropdown text="Data Gedung" variant="light">
                  <b-dropdown-item to="/addGedung">Tambah Gedung</b-dropdown-item>
                  <b-dropdown-item href="#">Kelola Gedung</b-dropdown-item>
                </b-dropdown>
              </b-list-group-item>
              <b-list-group-item to="/daftarPengguna" variant="light">Daftar Pengguna</b-list-group-item>
              <b-list-group-item to="/daftarUlasan" variant="light">Daftar Ulasan</b-list-group-item>
              <b-list-group-item to="/pemesanan" variant="light">Pemesanan</b-list-group-item>
              <b-list-group-item href="#" variant="light">
                <b-dropdown text="Promosi" variant="light">
                  <b-dropdown-item to="/addPromosi">Tambah Promosi</b-dropdown-item>
                  <b-dropdown-item to="/kelolaPromosi">Kelola Promosi</b-dropdown-item>
                </b-dropdown>
              </b-list-group-item>
            </b-list-group>
          </b-card>
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
    return {};
  },
};
</script>

<style>
.list-group-item {
  color: #bbbbbb;
}

.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
  color: #0e562d !important;
  background-color: #b3e3c8 !important;
}

.card > .list-group:first-child .list-group-item:first-child {
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
  background-color: #b3e3c8 !important;
  border-color: #b3e3c8 !important;
}
</style>
