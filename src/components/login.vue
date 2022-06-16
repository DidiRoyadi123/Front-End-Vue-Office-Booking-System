<template>
    <div class="login">
        <img alt="Vue logo" src="../assets/logo.png">
        <h2>Selamat Datang</h2>
        <br>
        <b-container fluid>
            <i class="bi bi-person-circle"></i>
            <b-form-input id="input-small" size="sm" placeholder="username"></b-form-input> <br>
            <b-form-input id="input-small" size="sm" type="password" placeholder="Password"></b-form-input> <br>
             
        </b-container>
        <router-link to="/beranda">
            <b-button >login</b-button>
        </router-link>  
    </div>
</template>

<script>
export default {
    name: 'loginComponent',
}
</script>

<style>
img{
    margin-bottom: 5%;
}
.btn {
    padding-right: 40px !important;
    padding-left: 40px !important;
    background-color: #1CAB59 !important;
    border-radius: 10px !important;
}
.form-control {
    display: inline-block !important;
    margin-bottom: 30px;
    border: 1px solid #1CAB59 !important;
    border-radius: 5px;
    width: 40% !important;
    height: 40px;
    
}
.container-fluid{
    padding-left: 10%;
    padding-right: 10%;
    align-content: center;
    text-align: center;
}
</style>