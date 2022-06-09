<template>
  <div class="Beranda">
    <b-card>
      <div>
        <b-breadcrumb>
          <b-breadcrumb-item to="/beranda" active> Beranda</b-breadcrumb-item>
        </b-breadcrumb>
      </div>
    </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'breadCrumbComponent',
}
</script>

<style>
body {
  background-color: #E5E5E5 !important;
}
.card-body {
  padding: 17px 0px 0px 20px !important;
}
.breadcrumb>li+li:before {
  color: #ccc !important;
  content: "> " !important;
}
</style>