<<template>
  <div class="karyawan-layout">
    <aside class="karyawan-sidebar">
      <div class="sidebar-logo">
        <div class="logo-text">HELPIN</div>
        <div class="logo-sub">SERVICES</div>
      </div>

      <div class="sidebar-user">
        <div class="user-label">● Pengguna Aktif</div>
        <div class="user-name">Karyawan Suki</div>
        <span class="user-role">Karyawan</span>
      </div>

      <nav class="sidebar-nav">
        <div
          v-for="menu in menuList"
          :key="menu.id"
          class="nav-item"
          :class="{ active: activeMenu === menu.id }"
          @click="activeMenu = menu.id"
        >
          <span v-html="menu.icon" class="nav-icon"></span>
          <span class="nav-label">{{ menu.label }}</span>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="footer-label">● Logged in as</div>
        <div class="footer-row">
          <span class="footer-name">Karyawan Suki</span>
          <button class="btn-logout">→</button>
        </div>
      </div>
    </aside>

    <main class="karyawan-main">
      <header class="page-header">
        <div class="header-title">
          <h1>{{ pageTitle }}</h1>
          <p>Dashboard dari sistem</p>
        </div>
        <div class="status-badge">
          <span class="status-dot"></span>
          STATUS ONLINE
        </div>
      </header>

      <DashboardSection v-if="activeMenu === 'dashboard'" />
      <PenggunaSection v-else-if="activeMenu === 'pengguna'" />
      <SupplierSection v-else-if="activeMenu === 'supplier'" />
      <ProdukSection v-else-if="activeMenu === 'produk'" />
      <KasirSection v-else-if="activeMenu === 'kasir'" />
      <TransaksiSection v-else-if="activeMenu === 'transaksi'" />
      <KasSection v-else-if="activeMenu === 'kas'" />
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import DashboardSection from '~/components/karyawan/DashboardSection.vue'
import PenggunaSection from '~/components/karyawan/PenggunaSection.vue'
import SupplierSection from '~/components/karyawan/SupplierSection.vue'
import ProdukSection from '~/components/karyawan/ProdukSection.vue'
import KasirSection from '~/components/karyawan/KasirSection.vue'
import TransaksiSection from '~/components/karyawan/TransaksiSection.vue'
import KasSection from '~/components/karyawan/KasSection.vue'

// Import CSS global karyawan
import '~/assets/css/karyawan-page.css'

const activeMenu = ref('dashboard')

const menuList = [
  { id: 'dashboard', label: 'Dashboard', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
  { id: 'pengguna', label: 'Pengguna', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
  { id: 'supplier', label: 'Supplier', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { id: 'produk', label: 'Produk', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>' },
  { id: 'kasir', label: 'Kasir', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
  { id: 'transaksi', label: 'Transaksi', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>' },
  { id: 'kas', label: 'Kas', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
]

const pageTitle = computed(() => {
  const titles = {
    dashboard: 'Dashboard',
    pengguna: 'Akun Pengguna',
    supplier: 'Akun Supplier',
    produk: 'Produk',
    kasir: 'Kasir',
    transaksi: 'Transaksi',
    kas: 'Kas'
  }
  return titles[activeMenu.value] || 'Dashboard'
})
</script>