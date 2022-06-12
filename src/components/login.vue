<template>
    <div class="login">
        <img alt="Vue logo" src="../assets/logo.png">
        <h2>Selamat Datang</h2>
        <b-container fluid>
            <b-form-input id="input-small" size="sm" placeholder="username" v-model="input.username"></b-form-input>
            <br>
            <b-form-input id="input-small" size="sm" type="password" placeholder="Password" v-model="input.password">
            </b-form-input> <br>

        </b-container>
        <b-button @click="login">login</b-button>
    </div>
</template>

<script>
export default {
    name: 'loginComponent',
    data() {
        return {
            input: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            if (this.input.username != "" && this.input.password != "") {
                if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "secure" });
                } else {
                    console.log("The username and / or password is incorrect");
                }
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}

</script>

<style scoped>
img {
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

.container-fluid {
    padding-left: 10%;
    padding-right: 10%;
    align-content: center;
    text-align: center;
}
</style>
