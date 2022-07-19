<!-- @format -->

<template>
	<div class="list">
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
			<p>Kelola Pesanan</p>
			<b-table striped hover :items="items" :fields="fields">
				<template #cell(Order_Status)="data">
					<div v-if="data.item.Status === 'Belum Diterima'">
						<b-button variant="success" @click="EditPesanan(data.item)"
							>Edit</b-button
						>
						<b-button variant="info" @click="BCPesanan()">Kirim Bc</b-button>
					</div>
					<div v-else>Sudah Diterima</div>
				</template>
			</b-table>
		</b-card>
		<liveChatBtn />
		<FooterComponent />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Navbar from "@/components/navbarComponent.vue";
	import Sidebar from "@/components/sidebarComponent.vue";
	import Breadcrumb from "../components/breadcrumb.vue";
	import FooterComponent from "@/components/footerComponent.vue";
	import LiveChatBtn from "@/components/liveChatBtn.vue";
	import axios from "axios";

	export default {
		name: "daftarPengguna",
		components: {
			Navbar,
			Sidebar,
			Breadcrumb,
			FooterComponent,
			LiveChatBtn,
		},
		data() {
			return {
				fields: [
					"ID_Pemesanan",
					"Nama",
					"NomorHp",

					"Nama_Gedung",
					"Jumlah_Pemesanan",
					"Total_Harga",
					"Tanggal_Masuk",
					"Tanngal_Keluar",
					"Order_Status",
				],
				items: [],
				loading: true,
			};
		},
		async mounted() {
			await axios
				.get(
					"https://officebooking-app-pn6n3.ondigitalocean.app/admin/bookings"
				)
				.then(res => {
					const data = res.data.data;
					data.forEach(item => {
						var gedung = item.gedung;
						gedung.forEach(item1 => {
							this.items.push({
								ID: item.id,
								ID_Pemesanan: item.bookingcode,
								Nama: item.user.name || "-",
								NomorHp: item.user.phone || "-",
								Tanggal_Masuk: item.checkin || "-",
								Tanngal_Keluar: item.checkout || "-",
								Status:
									item.status === "0" ? "Belum Diterima" : "Sudah Diterima",
								Nama_Gedung: item1.name || "Lupa Masukkan",
								Jumlah_Pemesanan: item1.jumlah || "Lupa Masukkan",
								Total_Harga: item1.price || "Lupa Narok",
							});
						});
						this.items.push({
							Nama_Gedung: "-",
							Jumlah_Pemesanan: "-",
							Total_Harga: "-",
							ID: item.id,
							ID_Pemesanan: item.bookingcode,
							Nama: item.user.name || "-",
							NomorHp: item.user.phone || "-",
							Tanggal_Masuk: item.checkin || "-",
							Tanngal_Keluar: item.checkout || "-",
							Status: item.status === "0" ? "Belum Diterima" : "Sudah Diterima",
						});
					});
					this.loading = false;
				})
				.catch(e => {
					console.log(e);
					this.loading = false;
				});
		},
		methods: {
			EditPesanan(data) {
				let simpan = JSON.stringify(data);
				localStorage.setItem("EditPesanan", simpan);
				this.$router.push("/addPesanan");
				// console.log(data);
			},
		},
	};
</script>

<style scoped>
	.list {
		background-color: #e5e5e5;
	}
	.card {
		margin-right: 25px;
		margin-left: 25px;
		margin-bottom: 25px;
	}
	p {
		font-family: "Poppins";
		font-style: normal;
		font-size: 19px;
		font-weight: 600;
		line-height: 33px;
		display: flex;
		color: #1cab59;
	}
	.btn-success {
		background-color: #1cab59;
		border-color: #1cab59;
		width: 90px;
		height: 31px;
		margin: 10px !important;
		padding: 0 !important;
	}
	.btn-danger {
		background-color: #ff3538 !important;
		border-color: #ff3538 !important;
		width: 90px;
		height: 31px;
		margin: 10px !important;
		padding: 0 !important;
	}
</style>
