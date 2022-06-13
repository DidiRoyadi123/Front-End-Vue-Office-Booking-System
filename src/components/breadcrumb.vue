<template>
  <div class="breadcrumb">
    <b-card>
        <b-breadcrumb>
          <b-breadcrumb-item to="/beranda">Beranda</b-breadcrumb-item>
          <b-breadcrumb-item v-for="item in items" :key="item.path" :to="item.path">{{item.name}}</b-breadcrumb-item>
        </b-breadcrumb>

      <div id="nav">
        <router-link to="/beranda"></router-link>
        <router-link to="/beranda/addGedung"></router-link>
        <router-link to="/beranda/kelolaGedung"></router-link>
      </div>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'breadCrumbComponent',

data () {
    return {
      items:[],
    }
  },
  watch:{
    $route(){
      this.getRoute();
    }
  },
  methods:{
    getRoute(){
      this.items = this.$route.matched;
      console.log(this.$route);
    }
  },
  created(){
    this.getRoute();
  },
}
</script>

<style>
body {
  background-color: #E5E5E5 !important;
}

.card-body {
  padding: 17px 0px 8px 20px !important;
}

div.breadcrumb{
  /* margin-right: 25px;
  margin-left: 25px; */
  margin-top: 10px;
  display: block;
}

.breadcrumb>li+li:before {
  color: #ccc !important;
  content: "> " !important;
}
</style>