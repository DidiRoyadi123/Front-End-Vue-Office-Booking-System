<template>
  <div class="sidebar">
    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
        <img alt="Vue logo" src="../assets/logo.png">
          
          
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default{
  name: 'sidebarComponent',
}
</script>