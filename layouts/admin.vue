<template>
  <div class="app">
    <aside class="sidebar" :class="{ open: isSidebarOpen }">
      <div class="sidebar-header">
        <div class="logo">
          <img src="/helpin-logo.svg" alt="Helpin Logo" style="height: 50px; width: auto;">
        </div>
        <div class="user-block">
          <div class="user-label">Sistem Aktif</div>
          <div class="user-name">Suki Group</div>
          <div class="user-role">{{ userRole === 'superadmin' ? 'Superadmin' : 'Employee' }}</div>
        </div>
      </div>

      <nav class="sidebar-nav nav">
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: adminPage === 'dashboard' }" @click.prevent="changePage('dashboard')">
            <i class="fas fa-th-large"></i> <span>Dashboard</span>
          </a>
        </li>

        <div v-if="userRole === 'superadmin'" class="nav-group" style="padding: 10px 0;">
          <div style="font-size: 11px; color: rgba(255,255,255,0.4); padding-left: 16px; font-weight: 700;">MANAJEMEN DATA</div>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'karyawan' }" @click.prevent="changePage('karyawan')">
              <i class="fas fa-user-tie"></i> <span>Akun Karyawan</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'pengguna' }" @click.prevent="changePage('pengguna')">
              <i class="fas fa-users"></i> <span>Akun Pengguna</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'supplier' }" @click.prevent="changePage('supplier')">
              <i class="fas fa-truck"></i> <span>Akun Supplier</span>
            </a>
          </li>
        </div>

        <div class="nav-group" style="padding: 10px 0;">
          <div style="font-size: 11px; color: rgba(255,255,255,0.4); padding-left: 16px; font-weight: 700;">OPERASIONAL</div>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'produk' }" @click.prevent="changePage('produk')">
              <i class="fas fa-box"></i> <span>Produk</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'kasir' }" @click.prevent="changePage('kasir')">
              <i class="fas fa-cash-register"></i> <span>Kasir</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'transaksi' }" @click.prevent="changePage('transaksi')">
              <i class="fas fa-file-invoice-dollar"></i> <span>Transaksi</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'kas' }" @click.prevent="changePage('kas')">
              <i class="fas fa-wallet"></i> <span>Kas Toko</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'aktifitas' }" @click.prevent="changePage('aktifitas')">
              <i class="fas fa-history"></i> <span>Log Aktifitas</span>
            </a>
          </li>
        </div>

        <div v-if="userRole === 'superadmin'" class="nav-group" style="padding: 10px 0;">
          <div style="font-size: 11px; color: rgba(255,255,255,0.4); padding-left: 16px; font-weight: 700;">PENGATURAN</div>
          <li class="nav-item">
            <a href="#" class="nav-link" :class="{ active: adminPage === 'ecommerce' }" @click.prevent="changePage('ecommerce')">
              <i class="fas fa-shopping-bag"></i> <span>Custom Ecommerce</span>
            </a>
          </li>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="logout-block">
          <div>
            <div class="logout-label">Logged in as</div>
            <div class="logout-user">{{ userRole === 'superadmin' ? 'SUPER ADMIN' : 'KARYAWAN' }}</div>
          </div>
          <div class="logout-icon" id="logoutBtn" @click="handleLogout" title="Keluar">
            <i class="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
    </aside>

    <main class="main">
      <header class="topbar">
        <div class="topbar-left">
          <button class="hamburger" @click="toggleSidebar">
            <i class="fas fa-bars"></i>
          </button>
          <div class="page-title">
            <h1>{{ titles[adminPage]?.h1 || 'Dashboard' }}</h1>
            <p>{{ titles[adminPage]?.p || 'Dashboard dari sistem' }}</p>
          </div>
        </div>
        <div class="topbar-right">
          <div class="status-badge">Server Online</div>
        </div>
      </header>

      <div class="content">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
// Hubungkan langsung ke Composable Navigasi Global
const { adminPage, userRole, changePage, titles, isSidebarOpen, toggleSidebar } = useAdminNavigation()

const handleLogout = () => {
  if (confirm('Apakah anda yakin ingin keluar dari sistem?')) {
    userRole.value = null // Hapus session role
    navigateTo('/')      // Tendang balik ke landing page
  }
}
</script>

<style>
@import '~/assets/css/admin-page.css';
</style>