<!-- @format -->

<template>
	<div class="Admin">
		<Navbar />
		<Sidebar />
		<br />
		<br />
		<br />
		<Breadcrumb />
		<b-card v-if="loading">
			<b-spinner variant="success" label="Spinning"></b-spinner>
		</b-card>
		<b-card v-else>
			<p>Pembuatan Pesanan Baru</p>
			<b-container fluid class="row mb-3">
				<form class="row" @submit.prevent="simpan">
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Nama Gedung:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-select
							class="form-select"
							v-model="selected"
							:options="options"
						></b-form-select>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Nama:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Nama"
							placeholder="Masukkan Nama Lengkap"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>No Handphone:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.NomorHp"
							placeholder="Masukkan No Handphone"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Jumlah Pemesanan:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Jumlah_Pemesanan"
							placeholder="Masukkan Jumlah Pemesanan"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Total Harga:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Total_Harga"
							placeholder="Masukkan Total Harga"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Tanggal Masuk:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Tanggal_Masuk"
							placeholder="Masukkan Tanggal Masuk"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Tanggal Keluar:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Tanngal_Keluar"
							placeholder="Masukkan Tanggal Keluar"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row"> </b-col>
					<b-col sm="2">
						<button class="btn btn-success float-right mt-3" type="submit">
							Buat
						</button>
						<button class="btn btn-success float-right mt-3">Batal</button>
					</b-col>
				</form>
			</b-container>
			{{ items }}
		</b-card>
		<FooterComponent />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Navbar from "@/components/navbarComponent.vue";
	import Sidebar from "@/components/sidebarComponent.vue";
	import FooterComponent from "@/components/footerComponent.vue";
	import Breadcrumb from "../components/breadcrumb.vue";
	import Vue from "vue";
	import axios from "axios";
	import VueAxios from "vue-axios";
	Vue.use(VueAxios, axios);

	export default {
		name: "profilAdmin",
		components: {
			Navbar,
			Sidebar,
			FooterComponent,
			Breadcrumb,
		},
		data() {
			return {
				options: [{ value: null, text: "Pilih Gedung yang anda mau" }],
				nearby: [],
				loading: true,
				items: [],
				edit: false,
				selected: null,
			};
		},
		mounted() {
			const data = JSON.parse(localStorage.getItem("EditPesanan"));
			// console.log(data);

			axios
				.get("https://officebooking-app-pn6n3.ondigitalocean.app/admin/gedungs")
				.then(response => {
					let data = response.data.data;
					data.forEach(item => {
						this.options.push({
							value: { id: item.id, name: item.name },
							text: item.name,
						});
					});
					// console.log(this.nearby);
				})
				.catch(error => {
					console.log(error);
				});
			if (data) {
				this.items = data;
				this.edit = true;
				// console.log(this.items, this.edit);
				localStorage.removeItem("EditPesanan");
				// alert("Data Masuk dan dihapus");
			}
			this.loading = false;
		},

		methods: {
			async simpan() {
				if (this.edit) {
					let url =
						"https://officebooking-app-pn6n3.ondigitalocean.app/admin/gedung" +
						this.items.id;
					await axios.put(url, this.items).then(res => {
						console.log(res);
						this.$router.push("/kelolaPesanan");
					});
				} else {
					let url =
						"https://officebooking-app-pn6n3.ondigitalocean.app/admin/gedung";
					await axios.post(url, this.items).then(res => {
						console.log(res);
						this.$router.push("/kelolaPesanan");
					});
				}
			},
		},
	};
</script>

<style scoped>
	p {
		font-family: "Poppins";
		font-style: normal;
		font-size: 19px;
		font-weight: 600;
		line-height: 33px;
		display: flex;
		color: #1cab59;
	}
	.card {
		margin-right: 25px;
		margin-left: 25px;
		margin-bottom: 40px;
		margin-top: 0px;
	}
	.Admin {
		background-color: #e5e5e5 !important;
		height: 100vh;
	}
	.card-body {
		background-color: #fefefe;
	}
	.text {
		text-align: left;
		color: #1cab59 !important;
	}
	.text1 {
		text-align: end;
	}
	.box {
		height: 200px;
		background: #fefefe !important;
	}
	svg {
		width: 45px;
		height: 45px;
		margin: 0 auto;
		display: block;
	}
	path {
		fill: #f4f4f4 !important;
	}
	.card-text {
		font-weight: 700;
	}
	button {
		width: auto;
		margin-right: 5px;
	}
	.btn-success {
		background-color: white;
		color: #1cab59 !important;
		font-weight: bold;
	}
	.footer {
		position: fixed !important;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
