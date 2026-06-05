<template>
  <div class="hp-wrapper">
    <div v-if="mobileMenuOpen" class="hp-overlay" @click="mobileMenuOpen = false"></div>

    <aside :class="['hp-sidebar', mobileMenuOpen ? 'hp-sidebar--open' : 'hp-sidebar--closed']">
      <div class="hp-sidebar__top">
        <div class="hp-logo">
          <h1 class="hp-logo__text">H<span>E</span>LPIN</h1>
          <span class="hp-logo__sub">SERVICES</span>
        </div>

        <div class="hp-user-info">
          <p class="hp-user-info__label"><span class="hp-dot"></span> PENGGUNA AKTIF</p>
          <h2 class="hp-user-info__name">Petani Suki</h2>
          <span class="hp-user-info__badge">PETANI</span>
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="menu.icon"></svg>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </aside>

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
          STATUS<br><strong>ONLINE</strong>
        </div>
      </header>

      <div class="hp-content">
        
        <div v-if="currentView === 'dashboard'" class="hp-view animate-fade">
          <div class="hp-card mb-4">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Hasil Panen</h3>
              <select class="hp-select">
                <option>Bulanan</option>
              </select>
            </div>
            <div class="hp-chart">
              <div class="hp-chart__y-axis">
                <span>90 ton</span><span>80 ton</span><span>70 ton</span><span>60 ton</span><span>50 ton</span><span>40 ton</span><span>30 ton</span><span>20 ton</span><span>10 ton</span>
              </div>
              <div class="hp-chart__bars">
                <div v-for="(val, index) in chartData" :key="index" class="hp-chart__bar-wrap">
                  <div class="hp-chart__bar" :style="{ height: val.height + '%' }"></div>
                  <span class="hp-chart__label">{{ val.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Prediksi Panen Berikutnya</h3>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>TANGGAL PANEN</th><th>TANAMAN</th><th>JUMLAH</th><th>INFORMASI</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in prediksiPanen" :key="i">
                    <td><strong>{{ item.tanggal }}</strong></td>
                    <td><strong>{{ item.tanaman }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td class="text-red"><strong>{{ item.info }}</strong></td>
                    <td><button @click="openDetail(item)" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else-if="currentView === 'inventori'" class="hp-view animate-fade">
          <div class="hp-card mb-4">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Inventori</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>TANAMAN</th><th>JUMLAH PANEN</th><th>TANGGAL PANEN</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in inventoriData" :key="i">
                    <td><strong>{{ item.tanaman }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td><strong>{{ item.tanggal }}</strong></td>
                    <td>
                      <div class="hp-actions">
                        <button @click="openEdit" class="hp-btn-icon hp-btn-icon--yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                        <button @click="openDelete" class="hp-btn-icon hp-btn-icon--red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Prediksi Panen Berikutnya</h3>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>TANGGAL PANEN</th><th>TANAMAN</th><th>JUMLAH</th><th>INFORMASI</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in prediksiPanen" :key="i">
                    <td><strong>{{ item.tanggal }}</strong></td>
                    <td><strong>{{ item.tanaman }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td class="text-red"><strong>{{ item.info }}</strong></td>
                    <td><button @click="openDetail(item)" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else-if="currentView === 'lahan'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Lahan</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS LAHAN</th><th>LUAS LAHAN</th><th>TERAKHIR DIGUNAKAN</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in lahanData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.luas }}</strong></td>
                    <td><strong>{{ item.terakhir }}</strong></td>
                    <td>
                      <div class="hp-actions">
                        <button @click="openEdit" class="hp-btn-icon hp-btn-icon--yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                        <button @click="openDelete" class="hp-btn-icon hp-btn-icon--red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else-if="currentView === 'tanaman'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Tanaman</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>NAMA TANAMAN</th><th>JUMLAH BIBIT</th><th>LAHAN DIGUNAKAN</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in tanamanData" :key="i">
                    <td><strong>{{ item.nama }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td><strong>{{ item.lahan }}</strong></td>
                    <td>
                      <div class="hp-actions">
                        <button @click="openEdit" class="hp-btn-icon hp-btn-icon--yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                        <button @click="openDelete" class="hp-btn-icon hp-btn-icon--red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else-if="currentView === 'hasil-panen'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Hasil Panen</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>NAMA TANAMAN</th><th>JUMLAH PANEN</th><th>LAHAN DIGUNAKAN</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in hasilPanenData" :key="i">
                    <td><strong>{{ item.nama }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td><strong>{{ item.lahan }}</strong></td>
                    <td>
                      <div class="hp-actions">
                        <button @click="openEdit" class="hp-btn-icon hp-btn-icon--yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                        <button @click="openDelete" class="hp-btn-icon hp-btn-icon--red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div v-else-if="currentView === 'riwayat-panen'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Riwayat Panen</h3>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>TANGGAL PANEN</th><th>TANAMAN</th><th>JUMLAH</th><th>INFORMASI</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in riwayatData" :key="i">
                    <td><strong>{{ item.tanggal }}</strong></td>
                    <td><strong>{{ item.tanaman }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td class="text-red"><strong>{{ item.info }}</strong></td>
                    <td><button @click="openDetail(item)" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </main>

    <Transition name="hp-fade">
      <div v-if="showDetailModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">Detail</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-detail-grid">
              <div class="hp-form-group">
                <label>TANGGAL PANEN</label>
                <div class="hp-input-mock">{{ selectedItem?.tanggal || '12-03-2026' }}</div>
              </div>
              <div class="hp-form-group">
                <label>TANAMAN</label>
                <div class="hp-input-mock">{{ selectedItem?.tanaman || selectedItem?.nama || 'Jagung Manis' }}</div>
              </div>
              <div class="hp-form-group">
                <label>JUMLAH</label>
                <div class="hp-input-mock">{{ selectedItem?.jumlah || '10 TON' }}</div>
              </div>
            </div>
            <div class="hp-form-group" style="margin-top: 20px;">
              <label>INFORMASI</label>
              <div class="hp-input-mock hp-input-mock--large text-red">
                {{ selectedItem?.info || '3 Hari lagi anda akan melakukan panen' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showEditModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--sm" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">Edit</h2>
          </div>
          <div class="hp-modal__body hp-text-center">
            <h3 class="hp-modal__msg">Mengedit Informasi</h3>
            <button @click="closeModals" class="hp-btn-simpan">SIMPAN</button>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showDeleteModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--sm" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">Hapus</h2>
          </div>
          <div class="hp-modal__body hp-text-center">
            <h3 class="hp-modal__msg">Menghapus Informasi ?</h3>
            <div class="hp-btn-group">
              <button @click="closeModals" class="hp-btn-action hp-btn-action--blue">YA</button>
              <button @click="closeModals" class="hp-btn-action hp-btn-action--red">TIDAK</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false // Disable layout bawaan
})

import { ref, computed } from 'vue'

const currentView = ref('dashboard')
const mobileMenuOpen = ref(false)

// State Modal
const showDetailModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const selectedItem = ref(null)

const menus = [
  { id: 'dashboard', label: 'Dashboard', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>' },
  { id: 'inventori', label: 'Inventori', icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>' },
  { id: 'lahan', label: 'Lahan', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
  { id: 'tanaman', label: 'Tanaman', icon: '<path d="M11 20A7 7 0 0 1 4 13V6a2 2 0 0 1 2-2h7a7 7 0 0 1 7 7v7a2 2 0 0 1-2 2h-7z"/><path d="M11 20v-7a2 2 0 0 1 2-2h7"/>' },
  { id: 'hasil-panen', label: 'Hasil Panen', icon: '<path d="M20 6L9 17l-5-5"/>' },
  { id: 'riwayat-panen', label: 'Riwayat Panen', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
]

const currentMenuLabel = computed(() => {
  const found = menus.find(m => m.id === currentView.value)
  return found ? found.label : 'Dashboard'
})

function changeView(id) {
  currentView.value = id
  mobileMenuOpen.value = false
}

// === FUNGSI MODAL ===
function openDetail(item) {
  selectedItem.value = item
  showDetailModal.value = true
}

function openEdit() {
  showEditModal.value = true
}

function openDelete() {
  showDeleteModal.value = true
}

function closeModals() {
  showDetailModal.value = false
  showEditModal.value = false
  showDeleteModal.value = false
  setTimeout(() => {
    selectedItem.value = null
  }, 300)
}

// === DATA DUMMY ===
const chartData = [
  { label: 'Jan', height: 50 }, { label: 'Feb', height: 65 },
  { label: 'Mar', height: 70 }, { label: 'Apr', height: 80 },
  { label: 'Mei', height: 60 }, { label: 'Jun', height: 70 },
  { label: 'Jul', height: 65 }, { label: 'Agst', height: 75 },
  { label: 'Sep', height: 65 }, { label: 'Oct', height: 50 },
  { label: 'Nov', height: 75 }, { label: 'Des', height: 65 },
]

const prediksiPanen = ref([
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari lagi anda akan melakukan panen' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari lagi anda akan melakukan panen' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari lagi anda akan melakukan panen' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari lagi anda akan melakukan panen' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari lagi anda akan melakukan panen' },
])

const inventoriData = ref([
  { tanaman: 'Jagung Manis', jumlah: '10 TON', tanggal: '12-03-2026' },
  { tanaman: 'Jagung Manis', jumlah: '10 TON', tanggal: '12-03-2026' },
  { tanaman: 'Jagung Manis', jumlah: '10 TON', tanggal: '12-03-2026' },
  { tanaman: 'Jagung Manis', jumlah: '10 TON', tanggal: '12-03-2026' },
  { tanaman: 'Jagung Manis', jumlah: '10 TON', tanggal: '12-03-2026' },
])

const lahanData = ref([
  { jenis: 'Lahan Cabai', luas: '10 Hektar', terakhir: '12-03-2026' },
  { jenis: 'Lahan Wortel', luas: '10 Hektar', terakhir: '12-03-2026' },
  { jenis: 'Lahan kangkung', luas: '10 Hektar', terakhir: '12-03-2026' },
  { jenis: 'Lahan bayam', luas: '10 Hektar', terakhir: '12-03-2026' },
  { jenis: 'Lahan kol', luas: '10 Hektar', terakhir: '12-03-2026' },
])

const tanamanData = ref([
  { nama: 'Jagung Manis', jumlah: '1000 Bibit', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '1000 Bibit', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '1000 Bibit', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '1000 Bibit', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '1000 Bibit', lahan: 'Lahan Basah' },
])

const hasilPanenData = ref([
  { nama: 'Jagung Manis', jumlah: '10 TON', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '10 TON', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '10 TON', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '10 TON', lahan: 'Lahan Basah' },
  { nama: 'Jagung Manis', jumlah: '10 TON', lahan: 'Lahan Basah' },
])

const riwayatData = ref([
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari Yang Lalu' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari Yang Lalu' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari Yang Lalu' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari Yang Lalu' },
  { tanggal: '12-03-2026', tanaman: 'Jagung Manis', jumlah: '10 TON', info: '3 Hari Yang Lalu' },
])
</script>

<style scoped>
/* ===== VARIABLES & GLOBALS ===== */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

.hp-wrapper {
  min-height: 100vh;
  background: #F4FBF7; 
  font-family: 'Outfit', sans-serif; 
  color: #1f2937;
  position: relative;
  overflow-x: hidden;
}

.hp-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40;
}
@media (min-width: 1024px) { .hp-overlay { display: none; } }

/* ===== SIDEBAR ===== */
.hp-sidebar {
  position: fixed;
  top: 0; left: 0;
  height: 100%; width: 280px;
  background: #19462D; 
  z-index: 50;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hp-sidebar--closed { transform: translateX(-100%); }
.hp-sidebar--open { transform: translateX(0); }
@media (min-width: 1024px) { .hp-sidebar { transform: translateX(0) !important; } }

.hp-sidebar__top { padding-top: 32px; }

/* Logo */
.hp-logo {
  text-align: center;
  margin-bottom: 32px;
  color: #fff;
}
.hp-logo__text {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
  line-height: 1;
}
.hp-logo__text span {
  position: relative;
}
.hp-logo__text span::after {
  content: '';
  position: absolute;
  top: 50%; left: 0; right: 0;
  height: 3px;
  background: #fff;
  transform: translateY(-50%);
}
.hp-logo__sub {
  font-size: 10px;
  letter-spacing: 4px;
  opacity: 0.8;
  margin-left: 60px;
}

/* User Info */
.hp-user-info {
  padding: 0 32px;
  margin-bottom: 32px;
}
.hp-user-info__label {
  font-size: 10px; color: rgba(255,255,255,0.6);
  display: flex; align-items: center; gap: 6px;
  margin-bottom: 4px;
}
.hp-user-info__name {
  font-size: 20px; font-weight: 700; color: #fff;
  margin: 0 0 8px 0;
}
.hp-user-info__badge {
  display: inline-block;
  padding: 4px 12px;
  background: #113620;
  color: #fff;
  font-size: 10px; font-weight: 600;
  border-radius: 4px; letter-spacing: 1px;
}

/* Nav */
.hp-nav {
  display: flex; flex-direction: column;
  padding-left: 20px; 
}
.hp-nav__btn {
  position: relative;
  width: 100%;
  background: transparent;
  border: none; cursor: pointer;
  padding: 0; margin-bottom: 4px;
  text-align: left;
}
.hp-nav__btn-inner {
  display: flex; align-items: center; gap: 16px;
  padding: 16px 24px;
  color: #fff;
  font-size: 16px; font-weight: 600;
  border-radius: 30px 0 0 30px; 
  transition: all 0.2s;
}
.hp-nav__btn svg { width: 22px; height: 22px; display: block; opacity: 0.9; }

/* Efek Active Tab */
.hp-nav__btn--active .hp-nav__btn-inner {
  background: #F4FBF7; 
  color: #19462D; 
}
.hp-nav__btn-curve-top, .hp-nav__btn-curve-bottom {
  position: absolute; right: 0; width: 30px; height: 30px; background: transparent; pointer-events: none;
}
.hp-nav__btn-curve-top { top: -30px; }
.hp-nav__btn-curve-bottom { bottom: -30px; }
.hp-nav__btn--active .hp-nav__btn-curve-top {
  border-bottom-right-radius: 30px;
  box-shadow: 10px 10px 0 10px #F4FBF7;
}
.hp-nav__btn--active .hp-nav__btn-curve-bottom {
  border-top-right-radius: 30px;
  box-shadow: 10px -10px 0 10px #F4FBF7;
}

/* Sidebar Bottom */
.hp-sidebar__bottom {
  padding: 24px 32px;
  background: #143D25; 
  display: flex; align-items: center; justify-content: space-between;
}
.hp-auth-info__label {
  font-size: 10px; color: rgba(255,255,255,0.6);
  display: flex; align-items: center; gap: 6px; margin: 0 0 4px 0;
}
.hp-auth-info__name {
  font-size: 14px; font-weight: 700; color: #fff; margin: 0;
}
.hp-logout-btn {
  background: none; border: none; cursor: pointer; padding: 4px;
}

/* Dots */
.hp-dot { width: 8px; height: 8px; border-radius: 50%; background: #10B981; display: inline-block; }
.hp-dot--blue { background: #3B82F6; }
.hp-dot--dark { background: #19462D; }

/* ===== MAIN CONTENT ===== */
.hp-main {
  min-height: 100vh;
  padding: 24px;
}
@media (min-width: 1024px) {
  .hp-main { margin-left: 280px; padding: 40px; }
}

/* Header */
.hp-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 32px;
}
.hp-mobile-menu-btn {
  background: #fff; border: 1px solid #e5e7eb; padding: 8px; border-radius: 8px;
  cursor: pointer; margin-right: 16px;
}
@media (min-width: 1024px) { .hp-mobile-menu-btn { display: none; } }

.hp-header__title-area { flex: 1; }
.hp-header__title { font-size: 28px; font-weight: 800; color: #19462D; margin: 0 0 4px 0; }
.hp-header__subtitle { font-size: 13px; color: #6b7280; margin: 0; }

.hp-header__status {
  display: flex; align-items: center; gap: 10px;
  background: #DBEAFE; color: #1E3A8A;
  padding: 10px 20px; border-radius: 30px;
  font-size: 12px; line-height: 1.2; text-align: left;
}

/* Card */
.hp-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
}
.mb-4 { margin-bottom: 24px; }

.hp-card__header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 24px;
}
.hp-card__title {
  font-size: 18px; font-weight: 700; color: #19462D; margin: 0;
  display: flex; align-items: center; gap: 10px;
}

/* Buttons inside Card */
.hp-select {
  padding: 8px 16px; border-radius: 8px; border: 1px solid #e5e7eb;
  background: #fff; font-family: inherit; font-size: 14px; font-weight: 500;
  color: #374151; cursor: pointer; outline: none;
}
.hp-btn-add {
  background: #3B82F6; color: #fff; border: none;
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center; cursor: pointer;
}
.hp-btn-add:hover { background: #2563EB; }

/* Chart Area */
.hp-chart {
  display: flex; height: 250px; position: relative;
  padding-left: 50px; 
}
.hp-chart__y-axis {
  position: absolute; left: 0; top: 0; bottom: 30px;
  display: flex; flex-direction: column; justify-content: space-between;
  font-size: 11px; color: #9ca3af; text-align: right; width: 40px;
}
.hp-chart__bars {
  flex: 1; display: flex; align-items: flex-end; justify-content: space-between;
  border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; gap: 10px;
}
.hp-chart__bar-wrap {
  flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center;
}
.hp-chart__bar {
  width: 60%; background: #19462D; border-radius: 4px 4px 0 0;
  transition: height 0.5s ease-out;
}
.hp-chart__label {
  font-size: 12px; font-weight: 600; color: #1f2937; margin-top: 12px; position: absolute; bottom: -24px;
}

/* Tables */
.hp-table-wrap {
  overflow-x: auto;
}
.hp-table {
  width: 100%; border-collapse: collapse; min-width: 600px;
}
.hp-table th {
  background: #DCFCE7; 
  color: #166534;
  font-size: 13px; font-weight: 700; text-align: left;
  padding: 16px;
}
.hp-table th:first-child { border-radius: 8px 0 0 8px; }
.hp-table th:last-child { border-radius: 0 8px 8px 0; text-align: center; }

.hp-table td {
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
  font-size: 14px; color: #1f2937;
}
.hp-table td:last-child { text-align: center; }

.text-red { color: #EF4444 !important; font-weight: 600; }

/* Action Buttons */
.hp-actions {
  display: flex; gap: 8px; justify-content: center;
}
.hp-btn-icon {
  width: 32px; height: 32px; border-radius: 6px; border: none;
  display: inline-flex; align-items: center; justify-content: center;
  color: #fff; cursor: pointer; transition: opacity 0.2s;
}
.hp-btn-icon:hover { opacity: 0.8; }
.hp-btn-icon svg { width: 16px; height: 16px; }

.hp-btn-icon--blue { background: #3FA9F5; }
.hp-btn-icon--yellow { background: #FACC15; }
.hp-btn-icon--red { background: #F87171; }


/* ==================== POP UP MODALS ==================== */
.hp-modal-overlay {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.5); backdrop-filter: blur(2px);
  display: flex; align-items: center; justify-content: center;
  padding: 16px;
}
.hp-modal {
  background: #fff;
  border-radius: 20px;
  width: 100%; max-width: 600px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.hp-modal--sm { max-width: 450px; }

.hp-modal__header {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 24px;
}
.hp-modal__close {
  background: none; border: none; cursor: pointer;
  color: #1f2937; padding: 0; display: flex;
}
.hp-modal__close:hover { color: #EF4444; }
.hp-modal__title {
  font-size: 22px; font-weight: 800; color: #19462D; margin: 0;
}

/* Modal Form Grid */
.hp-detail-grid {
  display: grid; grid-template-columns: 1fr; gap: 16px;
}
@media (min-width: 640px) {
  .hp-detail-grid { grid-template-columns: repeat(3, 1fr); }
}
.hp-form-group label {
  display: block; font-size: 12px; font-weight: 800; color: #19462D;
  margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;
}
.hp-input-mock {
  background: #F9FAFB; border: 1px solid #F3F4F6;
  border-radius: 12px; padding: 14px 16px;
  font-size: 14px; font-weight: 600; color: #1f2937;
  min-height: 48px; display: flex; align-items: center;
}
.hp-input-mock--large {
  min-height: 120px; align-items: flex-start;
}

/* Modal Generic Texts & Buttons */
.hp-text-center { text-align: center; }
.hp-modal__msg {
  font-size: 20px; font-weight: 800; color: #19462D;
  margin: 10px 0 32px;
}
.hp-btn-simpan {
  background: #19462D; color: #fff; border: none;
  width: 100%; max-width: 200px; padding: 14px;
  border-radius: 10px; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: background 0.2s;
  margin: 0 auto; display: block;
}
.hp-btn-simpan:hover { background: #113620; }

.hp-btn-group {
  display: flex; gap: 16px; justify-content: center;
}
.hp-btn-action {
  flex: 1; padding: 14px; border: none; border-radius: 10px;
  color: #fff; font-size: 15px; font-weight: 700; cursor: pointer;
}
.hp-btn-action--blue { background: #0EA5E9; }
.hp-btn-action--blue:hover { background: #0284C7; }
.hp-btn-action--red { background: #EF4444; }
.hp-btn-action--red:hover { background: #DC2626; }

/* Transitions */
.hp-fade-enter-active, .hp-fade-leave-active { transition: opacity 0.3s ease; }
.hp-fade-enter-from, .hp-fade-leave-to { opacity: 0; }
</style>