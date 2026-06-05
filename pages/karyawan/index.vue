<template>
  <div class="hp-wrapper">
    <!-- Overlay Mobile -->
    <div v-if="mobileMenuOpen" class="hp-overlay" @click="mobileMenuOpen = false"></div>

    <!-- ===== SIDEBAR ===== -->
    <aside :class="['hp-sidebar', mobileMenuOpen ? 'hp-sidebar--open' : 'hp-sidebar--closed']">
      <div class="hp-sidebar__top">
        <div class="hp-logo">
          <h1 class="hp-logo__text">H<span>E</span>LPIN</h1>
          <span class="hp-logo__sub">SERVICES</span>
        </div>

        <div class="hp-user-info">
          <p class="hp-user-info__label"><span class="hp-dot"></span> PENGGUNA AKTIF</p>
          <h2 class="hp-user-info__name">Karyawan Suki</h2>
          <span class="hp-user-info__badge" style="background: #3B82F6;">KARYAWAN</span>
        </div>

        <nav class="hp-nav">
          <button 
            v-for="menu in menus" 
            :key="menu.id"
            @click="changeView(menu.id)" 
            :class="['hp-nav__btn', currentView === menu.id ? 'hp-nav__btn--active' : '']"
          >
            <div class="hp-nav__btn-curve-top"></div>
            <div class="hp-nav__btn-inner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" v-html="menu.icon"></svg>
              <span>{{ menu.label }}</span>
            </div>
            <div class="hp-nav__btn-curve-bottom"></div>
          </button>
        </nav>
      </div>

      <div class="hp-sidebar__bottom">
        <div class="hp-auth-info">
          <p class="hp-auth-info__label"><span class="hp-dot"></span> LOGGED IN AS</p>
          <h3 class="hp-auth-info__name">Admin Suki SUPER</h3>
        </div>
        <button class="hp-logout-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </button>
      </div>
    </aside>

    <!-- ===== MAIN CONTENT ===== -->
    <main class="hp-main">
      <header class="hp-header">
        <button @click="mobileMenuOpen = true" class="hp-mobile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <div class="hp-header__title-area">
          <h1 class="hp-header__title">{{ currentMenuLabel }}</h1>
          <p class="hp-header__subtitle">Dashboard dari sistem</p>
        </div>
        <div class="hp-header__status">
          <span class="hp-dot hp-dot--blue"></span>
          STATUS<br><strong style="color: #1E3A8A;">ONLINE</strong>
        </div>
      </header>

      <div class="hp-content">
        <!-- Dashboard View -->
        <div v-if="currentView === 'dashboard'" class="hp-view animate-fade">
          <div class="hp-stats-row mb-4">
             <!-- Stats Cards Sama Seperti Admin -->
             <div class="hp-stat-card"><div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9h20"/></svg></div><div><p class="hp-stat-card__label">TOTAL OMZET PENJUALAN</p><h3 class="hp-stat-card__value">Rp 650.000,00</h3></div></div>
             <div class="hp-stat-card"><div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div><div><p class="hp-stat-card__label">KOLEKSI PRODUK</p><h3 class="hp-stat-card__value">6 Item</h3></div></div>
             <div class="hp-stat-card"><div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div><div><p class="hp-stat-card__label">BLOCKCHAIN TRANSACTION</p><h3 class="hp-stat-card__value">3 Block</h3></div></div>
          </div>

          <div class="hp-card mb-4">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Grafik Omset</h3>
              <select class="hp-select"><option>Bulanan</option></select>
            </div>
            <div class="hp-chart"><div class="hp-chart__y-axis"><span>Rp 900k</span><span>Rp 800k</span><span>Rp 700k</span><span>Rp 600k</span><span>Rp 500k</span><span>Rp 400k</span><span>Rp 300k</span><span>Rp 200k</span><span>Rp 100k</span></div><div class="hp-chart__bars"><div v-for="(val, index) in chartData" :key="index" class="hp-chart__bar-wrap"><div class="hp-chart__bar" :style="{ height: val.height + '%' }"></div><span class="hp-chart__label">{{ val.label }}</span></div></div></div>
          </div>

          <div class="hp-card">
            <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Monitoring Produk AI</h3></div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>KODE PRODUK</th><th>NAMA PRODUK</th><th>JENIS PRODUK</th><th>STOK</th><th>INFORMASI</th><th>AKSI</th></tr></thead>
                <tbody>
                  <tr v-for="(item, i) in monitoringData" :key="i">
                    <td><strong>{{ item.kode }}</strong></td>
                    <td><strong>{{ item.nama }}</strong></td>
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.stok }}</strong></td>
                    <td :class="item.isRed ? 'text-red' : ''"><strong>{{ item.info }}</strong></td>
                    <td><button @click="showDetailModal = true" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- ===== MODAL DETAIL PRODUK ===== -->
    <Transition name="hp-fade">
      <div v-if="showDetailModal" class="hp-modal-overlay" @click="showDetailModal = false">
        <div class="hp-modal hp-modal--lg" @click.stop>
          <div class="hp-modal__header">
            <button @click="showDetailModal = false" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            <h2 class="hp-modal__title">Monitoring Produk AI</h2>
          </div>
          <div class="hp-modal__body">
            <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=600&h=300" class="hp-product-img-large" />
            <h3 class="hp-text-center" style="font-size: 22px; font-weight: 800; color: #19462D; margin: 20px 0;">Mie Sedap Goreng</h3>
            <div class="hp-grid-3">
              <div class="hp-form-group"><label>KODE PRODUK</label><div class="hp-input-mock">TX-076-01</div></div>
              <div class="hp-form-group"><label>JENIS PRODUK</label><div class="hp-input-mock">Makanan</div></div>
              <div class="hp-form-group"><label>STOK</label><div class="hp-input-mock">30 Pcs</div></div>
            </div>
            <div class="hp-form-group" style="margin-top: 16px;"><label>INFORMASI</label><div class="hp-input-mock hp-input-mock--large text-red">3 Hari Lagi Produk Ini Tidak Layak Makan</div></div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })
import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)
const currentView = ref('dashboard')
const showDetailModal = ref(false)

const menus = [
  { id: 'dashboard', label: 'Dashboard', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>' },
  { id: 'pengguna', label: 'Pengguna', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { id: 'supplier', label: 'Supplier', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
  { id: 'produk', label: 'Produk', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
  { id: 'kasir', label: 'Kasir', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>' },
  { id: 'transaksi', label: 'Transaksi', icon: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
  { id: 'kas', label: 'Kas', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>' }
]

const currentMenuLabel = computed(() => menus.find(m => m.id === currentView.value)?.label || 'Dashboard')
function changeView(id) { currentView.value = id; mobileMenuOpen.value = false }

const chartData = [
  { label: 'Jan', height: 50 }, { label: 'Feb', height: 60 }, { label: 'Mar', height: 68 }, { label: 'Apr', height: 75 },
  { label: 'Mei', height: 58 }, { label: 'Jun', height: 68 }, { label: 'Jul', height: 62 }, { label: 'Agst', height: 70 },
  { label: 'Sep', height: 62 }, { label: 'Oct', height: 50 }, { label: 'Nov', height: 70 }, { label: 'Des', height: 62 }
]
const monitoringData = [
  { kode: 'TX-076-01', nama: 'Mie Sedap Goreng', jenis: 'Makanan', stok: '30 PCS', info: '3 Hari Lagi Expired', isRed: true },
  { kode: 'DD-987-37', nama: 'Pasta Gigi Closeup', jenis: 'Cosmetic', stok: '5 PCS', info: 'Stok Menipis', isRed: true },
  { kode: 'TY-055-45', nama: 'Selai Kacang', jenis: 'Makanan', stok: '7 PCS', info: '7 Hari Lagi Expired', isRed: true },
  { kode: 'KI-547-12', nama: 'Tepung Segitiga', jenis: 'Makanan', stok: '3 PCS', info: 'Stok Menipis', isRed: true },
  { kode: 'CV-346-66', nama: 'Mie Gaga', jenis: 'Makanan', stok: '4 PCS', info: 'Stok Menipis', isRed: true },
]
</script>

<style scoped>
/* ===== VARIABLES & GLOBALS ===== */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

.hp-wrapper { min-height: 100vh; background: #F4FBF7; font-family: 'Outfit', sans-serif; color: #1f2937; position: relative; overflow-x: hidden; }
.hp-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40; }
@media (min-width: 1024px) { .hp-overlay { display: none; } }

/* ===== SIDEBAR ===== */
.hp-sidebar { position: fixed; top: 0; left: 0; height: 100%; width: 280px; background: #19462D; z-index: 50; transition: transform 0.3s ease; display: flex; flex-direction: column; justify-content: space-between; }
.hp-sidebar--closed { transform: translateX(-100%); }
.hp-sidebar--open { transform: translateX(0); }
@media (min-width: 1024px) { .hp-sidebar { transform: translateX(0) !important; } }
.hp-sidebar__top { padding-top: 32px; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none; }
.hp-sidebar__top::-webkit-scrollbar { display: none; }
.hp-logo { text-align: center; margin-bottom: 32px; color: #fff; }
.hp-logo__text { font-size: 36px; font-weight: 800; letter-spacing: 2px; margin: 0; line-height: 1; }
.hp-logo__text span { position: relative; }
.hp-logo__text span::after { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 3px; background: #fff; transform: translateY(-50%); }
.hp-logo__sub { font-size: 10px; letter-spacing: 4px; opacity: 0.8; margin-left: 60px; }
.hp-user-info { padding: 0 32px; margin-bottom: 32px; }
.hp-user-info__label { font-size: 10px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.hp-user-info__name { font-size: 20px; font-weight: 700; color: #fff; margin: 0 0 8px 0; }
.hp-user-info__badge { display: inline-block; padding: 4px 12px; background: #22C55E; color: #fff; font-size: 10px; font-weight: 600; border-radius: 4px; letter-spacing: 1px; }

/* Nav */
.hp-nav { display: flex; flex-direction: column; padding-left: 20px; }
.hp-nav__btn { position: relative; width: 100%; background: transparent; border: none; cursor: pointer; padding: 0; margin-bottom: 4px; text-align: left; }
.hp-nav__btn-inner { display: flex; align-items: center; gap: 16px; padding: 14px 24px; color: #fff; font-size: 15px; font-weight: 600; border-radius: 30px 0 0 30px; transition: all 0.2s; }
.hp-nav__btn svg { width: 20px; height: 20px; display: block; opacity: 0.9; flex-shrink: 0; }
.hp-nav__btn--active > .hp-nav__btn-inner { background: #F4FBF7; color: #19462D; }

.hp-nav-group { margin-bottom: 4px; }
.hp-nav__btn--parent .hp-nav__btn-inner { border-radius: 0; padding: 14px 24px; }
.hp-nav-arrow { margin-left: auto; transition: transform 0.3s; }
.hp-nav-arrow--open { transform: rotate(180deg); }
.hp-nav-sub { padding-left: 30px; }
.hp-nav__btn--sub .hp-nav__btn-inner { padding: 12px 24px; font-size: 14px; }

/* Kurva Tab Aktif */
.hp-nav__btn-curve-top, .hp-nav__btn-curve-bottom { position: absolute; right: 0; width: 30px; height: 30px; background: transparent; pointer-events: none; }
.hp-nav__btn-curve-top { top: -30px; }
.hp-nav__btn-curve-bottom { bottom: -30px; }
.hp-nav__btn--active > .hp-nav__btn-curve-top { border-bottom-right-radius: 30px; box-shadow: 10px 10px 0 10px #F4FBF7; }
.hp-nav__btn--active > .hp-nav__btn-curve-bottom { border-top-right-radius: 30px; box-shadow: 10px -10px 0 10px #F4FBF7; }

/* Sidebar Bottom */
.hp-sidebar__bottom { padding: 24px 32px; background: #143D25; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.hp-auth-info__label { font-size: 10px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 6px; margin: 0 0 4px 0; }
.hp-auth-info__name { font-size: 14px; font-weight: 700; color: #fff; margin: 0; }
.hp-logout-btn { background: none; border: none; cursor: pointer; padding: 4px; }

/* General Utilities */
.hp-dot { width: 8px; height: 8px; border-radius: 50%; background: #10B981; display: inline-block; flex-shrink: 0; }
.hp-dot--blue { background: #3B82F6; }
.hp-dot--red { background: #EF4444; }
.hp-dot--dark { background: #19462D; }
.hp-bg-light-green { background: #DCFCE7; }
.hp-bg-light-blue { background: #DBEAFE; }
.hp-bg-light-red { background: #FEE2E2; }
.hp-bg-dark-green { background: #19462D; }
.hp-bg-blue { background: #3B82F6; }
.text-white { color: #fff; }
.text-red { color: #EF4444 !important; font-weight: 700; }
.mb-4 { margin-bottom: 24px; }

/* ===== MAIN CONTENT ===== */
.hp-main { min-height: 100vh; padding: 24px; }
@media (min-width: 1024px) { .hp-main { margin-left: 280px; padding: 32px 40px; } }

.hp-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
.hp-mobile-menu-btn { background: #fff; border: 1px solid #e5e7eb; padding: 8px; border-radius: 8px; cursor: pointer; margin-right: 16px; }
@media (min-width: 1024px) { .hp-mobile-menu-btn { display: none; } }
.hp-header__title-area { flex: 1; }
.hp-header__title { font-size: 28px; font-weight: 800; color: #19462D; margin: 0 0 4px 0; }
.hp-header__subtitle { font-size: 13px; color: #6b7280; margin: 0; }
.hp-header__status { display: flex; align-items: center; gap: 10px; background: #DBEAFE; color: #1E3A8A; padding: 10px 20px; border-radius: 30px; font-size: 12px; line-height: 1.2; text-align: left; }

.hp-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); border: 1px solid #f3f4f6; }
.hp-card__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.hp-card__title { font-size: 18px; font-weight: 700; color: #19462D; margin: 0; display: flex; align-items: center; gap: 10px; }

/* Stats Cards */
.hp-stats-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; }
.hp-stat-card { background: #fff; border-radius: 16px; padding: 24px; border: 1px solid #f3f4f6; display: flex; align-items: center; gap: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
.hp-stat-card--sm { padding: 16px; }
.hp-stat-card__icon { width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.hp-stat-card__icon svg { width: 28px; height: 28px; }
.hp-stat-card__label { font-size: 11px; font-weight: 700; color: #6b7280; margin: 0 0 4px 0; letter-spacing: 0.5px; }
.hp-stat-card__value { font-size: 24px; font-weight: 800; color: #1f2937; margin: 0; }

/* Dashboard Karyawan Grid */
.hp-dashboard-karyawan-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }

/* Inputs & Buttons */
.hp-select { padding: 8px 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #fff; font-family: inherit; font-size: 14px; font-weight: 500; color: #374151; cursor: pointer; outline: none; }
.hp-input { width: 100%; padding: 12px 16px; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-family: inherit; color: #1f2937; outline: none; background: #F9FAFB; }
.hp-input:focus { border-color: #19462D; background: #fff; }
.hp-input-row { display: flex; gap: 16px; align-items: center; }
.hp-filter-row { display: flex; gap: 16px; align-items: center; }
.hp-input-icon { position: relative; }
.hp-input-icon svg { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #9ca3af; width: 18px; height: 18px; }
.hp-input-icon input { padding-left: 44px; }

.hp-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer; border: none; font-family: inherit; transition: 0.2s; }
.hp-btn-full { width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 14px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; border: none; font-family: inherit; transition: 0.2s; }
.hp-btn-add { background: #3B82F6; color: #fff; border: none; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.hp-actions { display: flex; gap: 8px; justify-content: center; }
.hp-btn-icon { width: 32px; height: 32px; border-radius: 6px; border: none; display: inline-flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; transition: opacity 0.2s; }
.hp-btn-icon svg { width: 16px; height: 16px; }
.hp-btn-icon--blue { background: #3FA9F5; }
.hp-btn-icon--yellow { background: #FACC15; }
.hp-btn-icon--red { background: #F87171; }

/* Badges */
.hp-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; }
.hp-badge--blue { background: #DBEAFE; color: #2563EB; }
.hp-badge--red { background: #FEE2E2; color: #EF4444; }
.hp-badge--blue-light { background: #EFF6FF; color: #3B82F6; }
.hp-badge--yellow-light { background: #FEF9C3; color: #CA8A04; }
.hp-badge--blue-solid { background: #3B82F6; color: #fff; border-radius: 6px; padding: 6px 16px; }
.hp-badge--red-solid { background: #EF4444; color: #fff; border-radius: 6px; padding: 6px 16px; }

/* Chart Area */
.hp-chart { display: flex; height: 250px; position: relative; padding-left: 50px; }
.hp-chart__y-axis { position: absolute; left: 0; top: 0; bottom: 30px; display: flex; flex-direction: column; justify-content: space-between; font-size: 11px; color: #9ca3af; text-align: right; width: 60px; }
.hp-chart__y-axis span { display: inline-block; white-space: nowrap; }
.hp-chart__bars { flex: 1; display: flex; align-items: flex-end; justify-content: space-between; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; gap: 10px; }
.hp-chart__bar-wrap { flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }
.hp-chart__bar { width: 60%; background: #19462D; border-radius: 4px 4px 0 0; }
.hp-chart__label { font-size: 12px; font-weight: 700; color: #1f2937; margin-top: 12px; position: absolute; bottom: -24px; }

/* Tables */
.hp-table-wrap { overflow-x: auto; }
.hp-table { width: 100%; border-collapse: collapse; min-width: 600px; }
.hp-table th { background: #DCFCE7; color: #166534; font-size: 12px; font-weight: 800; text-align: left; padding: 16px; text-transform: uppercase; }
.hp-table th:first-child { border-radius: 8px 0 0 8px; }
.hp-table th:last-child { border-radius: 0 8px 8px 0; text-align: center; }
.hp-table td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
.hp-table td:last-child { text-align: center; }

/* Produk Grid */
.hp-product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
.hp-product-grid--sm { grid-template-columns: repeat(3, 1fr); }
.hp-product-card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; text-align: center; }
.hp-product-img { width: 100%; height: 120px; object-fit: contain; margin-bottom: 12px; }
.hp-product-name { font-size: 16px; font-weight: 800; color: #19462D; margin: 0 0 8px; }
.hp-product-meta { font-size: 12px; color: #6b7280; text-align: left; line-height: 1.6; margin-bottom: 12px; }
.hp-product-meta p { margin: 0; }
.hp-product-date { font-size: 12px; color: #9ca3af; }
.hp-pagination { display: flex; justify-content: center; gap: 8px; }
.hp-page-dot { width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 4px; background: #f3f4f6; font-size: 12px; font-weight: 700; color: #6b7280; cursor: pointer; }
.hp-page-dot--active { background: #19462D; color: #fff; }

/* Kasir Grid */
.hp-kasir-grid { display: grid; grid-template-columns: 350px 1fr; gap: 24px; }
@media (max-width: 1024px) { .hp-kasir-grid { grid-template-columns: 1fr; } }
.hp-kasir-cart { display: flex; flex-direction: column; }
.hp-cart-items { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
.hp-cart-item { display: flex; justify-content: space-between; align-items: center; padding-bottom: 16px; border-bottom: 1px dashed #e5e7eb; }
.hp-cart-name { font-size: 14px; font-weight: 700; color: #1f2937; margin: 0 0 4px; }
.hp-cart-price { font-size: 13px; color: #6b7280; margin: 0; }
.hp-qty-ctrl { display: flex; align-items: center; gap: 12px; }
.hp-qty-ctrl button { width: 24px; height: 24px; border-radius: 4px; border: none; background: #FEE2E2; color: #EF4444; font-weight: 700; cursor: pointer; }
.hp-qty-ctrl button.plus { background: #DCFCE7; color: #22C55E; }
.hp-qty-ctrl span { font-weight: 700; font-size: 14px; }
.hp-cart-summary { background: #F9FAFB; padding: 16px; border-radius: 12px; text-align: center; }
.hp-cart-summary p { font-size: 13px; font-weight: 700; color: #1f2937; margin: 0 0 4px; }
.hp-cart-summary h2 { font-size: 24px; font-weight: 800; color: #19462D; margin: 0 0 16px; }


/* ==================== POP UP MODALS ==================== */
.hp-modal-overlay { position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,0.5); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: 16px; }
.hp-modal { background: #fff; border-radius: 20px; width: 100%; max-width: 700px; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.hp-modal--sm { max-width: 450px; }
.hp-modal--lg { max-width: 800px; }

/* Scrollable Modal */
.hp-modal--scrollable { 
  max-height: 90vh; 
  display: flex; flex-direction: column; 
  padding: 0; 
  overflow: hidden; 
}
.hp-modal--scrollable .hp-modal__header {
  padding: 24px 32px; margin-bottom: 0; border-bottom: 1px solid #f3f4f6;
  background: #fff; z-index: 10;
}
.hp-modal--scrollable .hp-modal__body {
  padding: 24px 32px; overflow-y: auto; flex: 1;
}

.hp-modal__header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.hp-modal__close { background: none; border: none; cursor: pointer; color: #1f2937; padding: 0; display: flex; }
.hp-modal__close:hover { color: #EF4444; }
.hp-modal__title { font-size: 22px; font-weight: 800; color: #19462D; margin: 0; }

.hp-modal-box { border: 1px solid #f3f4f6; padding: 24px; border-radius: 16px; background: #F9FAFB; }
.hp-modal-box__title { font-size: 14px; font-weight: 800; color: #19462D; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px; text-transform: uppercase; }

.hp-grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 640px) { .hp-grid-2 { grid-template-columns: 1fr 1fr; } }
.hp-grid-3 { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 640px) { .hp-grid-3 { grid-template-columns: repeat(3, 1fr); } }

.hp-form-group label { display: block; font-size: 12px; font-weight: 800; color: #19462D; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }

.hp-input-mock { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; font-size: 14px; font-weight: 700; color: #1f2937; min-height: 48px; display: flex; align-items: center; word-break: break-all; }
.hp-input-mock--large { min-height: 100px; align-items: flex-start; line-height: 1.5; font-weight: 600; }

.hp-text-center { text-align: center; }
.hp-modal__msg { font-size: 20px; font-weight: 800; color: #19462D; margin: 10px 0 32px; }

.hp-btn-simpan { background: #19462D; color: #fff; border: none; width: 100%; max-width: 250px; padding: 14px; border-radius: 10px; font-size: 14px; font-weight: 800; cursor: pointer; transition: background 0.2s; margin: 0 auto; display: block; text-transform: uppercase; }
.hp-btn-simpan:hover { background: #113620; }
.hp-btn-outline { background: transparent; border: 1px solid #19462D; color: #19462D; padding: 14px; border-radius: 10px; font-size: 14px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; transition: background 0.2s; }
.hp-btn-outline:hover { background: #f9fafb; }
.hp-mt-6 { margin-top: 24px; }

.hp-btn-group {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 8px;
}
.hp-btn-action {
  flex: 1;
  padding: 14px 0;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}
.hp-btn-action:hover {
  transform: translateY(-1px);
}
.hp-btn-action--blue {
  background: #0ea5e9;
}
.hp-btn-action--blue:hover {
  background: #0284c7;
}
.hp-btn-action--red {
  background: #ef4444;
}
.hp-btn-action--red:hover {
  background: #dc2626;
}

.hp-product-img-large { width: 100%; max-width: 350px; height: auto; margin: 0 auto; display: block; object-fit: contain; }

.hp-badge-outline { display: inline-block; padding: 6px 14px; border-radius: 8px; font-size: 12px; font-weight: 800; border: 1px solid currentColor; }
.hp-badge-outline--orange { color: #F59E0B; background: #FEF3C7; border-color: #F59E0B; }

/* JSON Tables inside Aktifitas Modal */
.hp-json-tables { display: flex; flex-direction: column; gap: 24px; }
@media (min-width: 640px) { .hp-json-tables { flex-direction: row; } }
.hp-json-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.hp-json-table th { background: #f3f4f6; color: #1f2937; font-size: 12px; font-weight: 800; padding: 12px 16px; text-align: left; }
.hp-json-table td { padding: 12px 16px; font-size: 13px; font-weight: 600; color: #4b5563; border-top: 1px solid #f3f4f6; }

/* Animations */
.animate-fade { animation: fadeIn 0.3s ease-in-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.hp-fade-enter-active, .hp-fade-leave-active { transition: opacity 0.3s ease; }
.hp-fade-enter-from, .hp-fade-leave-to { opacity: 0; }
</style>