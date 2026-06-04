<template>
  <div>
    <AdminDashboardSection v-if="adminPage === 'dashboard'" />
    <AdminKaryawanSection v-if="adminPage === 'karyawan'" />
    <AdminPenggunaSection v-if="adminPage === 'pengguna'" />
    <AdminSupplierSection v-if="adminPage === 'supplier'" />
    <AdminProdukSection v-if="adminPage === 'produk'" />
    <AdminKasirSection v-if="adminPage === 'kasir'" />
    <AdminTransaksiSection v-if="adminPage === 'transaksi'" />
    <AdminKasSection v-if="adminPage === 'kas'" />
    <AdminAktifitasSection v-if="adminPage === 'aktifitas'" />
    <AdminEcommerceSection v-if="adminPage === 'ecommerce'" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

// Panggil composable navigasi
const { adminPage, checkAdminAccess, renderChart } = useAdminNavigation()

// Jalankan proteksi login
checkAdminAccess()

// Render chart pertama kali jika halaman default-nya adalah dashboard
onMounted(() => {
  if (adminPage.value === 'dashboard') {
    renderChart()
  }
})
</script>

<style>
@import '~/assets/css/admin-page.css';
</style>