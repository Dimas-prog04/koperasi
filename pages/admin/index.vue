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
          <h2 class="hp-user-info__name">Admin Suki SUPER</h2>
          <span class="hp-user-info__badge">ADMIN</span>
        </div>

        <nav class="hp-nav">
          <template v-for="menu in menus" :key="menu.id">
            <button 
              v-if="!menu.sub"
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

            <div v-else class="hp-nav-group">
              <button @click="isAkunOpen = !isAkunOpen" class="hp-nav__btn hp-nav__btn--parent">
                <div class="hp-nav__btn-inner" style="border-radius: 0;">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="menu.icon"></svg>
                  <span>{{ menu.label }}</span>
                  <svg :class="['hp-nav-arrow', isAkunOpen ? 'hp-nav-arrow--open' : '']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                </div>
              </button>
              
              <div v-show="isAkunOpen" class="hp-nav-sub">
                <button 
                  v-for="sub in menu.sub" :key="sub.id"
                  @click="changeView(sub.id)" 
                  :class="['hp-nav__btn hp-nav__btn--sub', currentView === sub.id ? 'hp-nav__btn--active' : '']"
                >
                  <div class="hp-nav__btn-curve-top"></div>
                  <div class="hp-nav__btn-inner">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="sub.icon"></svg>
                    <span>{{ sub.label }}</span>
                  </div>
                  <div class="hp-nav__btn-curve-bottom"></div>
                </button>
              </div>
            </div>
          </template>
        </nav>
      </div>

      <div class="hp-sidebar__bottom">
        <div class="hp-auth-info">
          <p class="hp-auth-info__label"><span class="hp-dot"></span> LOGGED IN AS</p>
          <h3 class="hp-auth-info__name">Admin Suki SUPER</h3>
        </div>
        <button class="hp-logout-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
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
          STATUS<br><strong style="color: #1E3A8A;">ONLINE</strong>
        </div>
      </header>

      <div class="hp-content">
        <AdminDashboardSection 
          v-if="currentView === 'dashboard'" 
          :chartData="chartData" 
          :monitoringData="monitoringData" 
          @open-product-detail="openProductDetail" 
        />
        <AdminKaryawanSection 
          v-else-if="currentView === 'karyawan'" 
          :karyawanData="karyawanData" 
          @open-karyawan-modal="showKaryawanModal = true" 
          @open-edit="openEdit" 
          @open-delete="openDelete" 
        />
        <AdminPenggunaSection 
          v-else-if="currentView === 'pengguna'" 
          :penggunaData="penggunaData" 
          @open-pengguna-modal="showPenggunaModal = true" 
        />
        <AdminSupplierSection 
          v-else-if="currentView === 'supplier'" 
          :supplierData="supplierData" 
          @open-supplier-modal="showSupplierModal = true" 
          @open-edit="openEdit" 
          @open-delete="openDelete" 
        />
        <AdminProdukSection 
          v-else-if="currentView === 'produk'" 
          :monitoringData="monitoringData" 
          @open-produk-modal="showProdukModal = true" 
          @open-product-detail="openProductDetail" 
        />
        <AdminKasirSection 
          v-else-if="currentView === 'kasir'" 
        />
        <AdminTransaksiSection 
          v-else-if="currentView === 'transaksi'" 
          :transaksiData="transaksiData" 
        />
        <AdminKasSection 
          v-else-if="currentView === 'kas'" 
          :kasData="kasData" 
        />
        <AdminAktifitasSection 
          v-else-if="currentView === 'aktifitas'" 
          :aktifitasData="aktifitasData" 
          @open-aktifitas-modal="showAktifitasModal = true" 
        />
        <AdminCustomEcomerceSection 
          v-else-if="currentView === 'custom-ecomerce'" 
          @open-product-detail="openProductDetail" 
          @open-edit="openEdit" 
          @open-delete="openDelete" 
        />
      </div>
    </main>

    <Transition name="hp-fade">
      <div v-if="showProductDetailModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--lg" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">{{ detailModalType === 'banner' ? 'Banner' : 'Monitoring Produk AI' }}</h2>
          </div>
          <div class="hp-modal__body">
            <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=600&h=300" alt="Product Large" class="hp-product-img-large" />
            <h3 class="hp-text-center" style="font-size: 22px; font-weight: 800; color: #19462D; margin: 20px 0;">Mie Sedap Goreng</h3>
            <div class="hp-grid-3">
              <div class="hp-form-group"><label>KODE PRODUK</label><div class="hp-input-mock">TX-076-01</div></div>
              <div class="hp-form-group"><label>JENIS PRODUK</label><div class="hp-input-mock">Makanan</div></div>
              <div class="hp-form-group"><label>STOK</label><div class="hp-input-mock">30 Pcs</div></div>
            </div>
            <div v-if="detailModalType !== 'banner'" class="hp-form-group" style="margin-top: 16px;">
              <label>INFORMASI</label>
              <div class="hp-input-mock hp-input-mock--large text-red">3 Hari Lagi Produk Ini Tidak Layak Makan</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showKaryawanModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            <h2 class="hp-modal__title">Akun Karyawan</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-modal-box">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> TAMBAH KARYAWAN BARU</h4>
              <div class="hp-grid-2">
                <div class="hp-form-group"><label>USERNAME</label><input type="text" placeholder="Contoh : admin_koperasi" class="hp-input" /></div>
                <div class="hp-form-group"><label>NAMA LENGKAP</label><input type="text" placeholder="Contoh : ujang kedu.." class="hp-input" /></div>
              </div>
              <div class="hp-form-group" style="margin-top: 16px;"><label>KONTAK</label><input type="text" placeholder="Contoh : 08966...." class="hp-input" /></div>
              <button @click="closeModals" class="hp-btn-simpan hp-mt-6">SIMPAN AKUN</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showPenggunaModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            <h2 class="hp-modal__title">Akun Pengguna</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-grid-3">
              <div class="hp-form-group"><label>USERNAME</label><div class="hp-input-mock">Giska678</div></div>
              <div class="hp-form-group"><label>EMAIL</label><div class="hp-input-mock">giska678@gmail.com</div></div>
              <div class="hp-form-group"><label>KONTAK</label><div class="hp-input-mock">0895-7892-1234</div></div>
            </div>
            <div class="hp-form-group" style="margin-top: 16px;">
              <label>STATUS</label>
              <div><span class="hp-badge hp-badge--blue" style="font-size: 14px; padding: 10px 20px;">Online</span></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showSupplierModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            <h2 class="hp-modal__title">Akun Supplier</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-modal-box">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> TAMBAH SUPPLIER BARU</h4>
              <div class="hp-grid-2">
                <div class="hp-form-group"><label>NAMA SUPPLIER</label><input type="text" placeholder="Contoh : admin_koperasi" class="hp-input" /></div>
                <div class="hp-form-group"><label>ALAMAT WILAYAH</label><input type="text" placeholder="Contoh : ujung kedu.." class="hp-input" /></div>
                <div class="hp-form-group"><label>KONTAK</label><input type="text" placeholder="Contoh : 08966...." class="hp-input" /></div>
                <div class="hp-form-group"><label>KOMODITAS</label><select class="hp-input"><option>Pilih Komoditas</option></select></div>
              </div>
              <button @click="closeModals" class="hp-btn-simpan hp-mt-6">SIMPAN AKUN</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showProdukModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--scrollable" @click.stop>
          <div class="hp-modal__header sticky-header">
            <button @click="closeModals" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            <h2 class="hp-modal__title">Tambah Produk</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-modal-box">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> TAMBAH PRODUK BARU</h4>
              <div class="hp-grid-2">
                <div class="hp-form-group"><label>NAMA PRODUK</label><input type="text" placeholder="Contoh : Mie Goreng" class="hp-input" /></div>
                <div class="hp-form-group"><label>HARGA JUAL</label><input type="text" placeholder="Contoh : Rp 23.000,00.." class="hp-input" /></div>
                <div class="hp-form-group"><label>HARGA BELI</label><input type="text" placeholder="Contoh : Rp 23.000,00.." class="hp-input" /></div>
                <div class="hp-form-group"><label>KATEGORI</label><select class="hp-input"><option>Pilih Komoditas</option></select></div>
                <div class="hp-form-group"><label>STOK</label><input type="text" placeholder="Contoh : 23 Pcs" class="hp-input" /></div>
                <div class="hp-form-group"><label>EXPIRED</label><select class="hp-input"><option>Tanggal</option></select></div>
                <div class="hp-form-group"><label>INPUT BERAT</label><input type="text" class="hp-input" /></div>
                <div class="hp-form-group"><label>SATUAN BERAT</label><select class="hp-input"><option>Pilih Satuan Berat</option></select></div>
              </div>
              <button class="hp-btn-outline hp-mt-6" style="width: 100%; justify-content: center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> Masukan Gambar</button>
              <button @click="closeModals" class="hp-btn-simpan hp-mt-6" style="max-width: 100%;">SIMPAN PRODUK</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showAktifitasModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--scrollable" style="max-width: 800px;" @click.stop>
          <div class="hp-modal__header sticky-header">
            <button @click="closeModals" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            <h2 class="hp-modal__title">Detail Log Aktifitas</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-modal-box mb-4">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> INFORMASI UTAMA</h4>
              <div class="hp-grid-3">
                <div class="hp-form-group"><label>JUDUL AKTIFITAS</label><div class="hp-input-mock">Penghapusan Tabel</div></div>
                <div class="hp-form-group"><label>TABEL TERDAMPAK</label><div class="hp-input-mock">Tabel_Produk</div></div>
                <div class="hp-form-group"><label>NAMA PENGGUNA</label><div class="hp-input-mock">Giska678</div></div>
              </div>
              <div class="hp-grid-3" style="margin-top: 16px;">
                <div class="hp-form-group" style="grid-column: span 2;"><label>DESKRIPSI LENGKAP</label><div class="hp-input-mock hp-input-mock--large">Tabel data produk TX-678-01 Telah di hapus</div></div>
                <div class="hp-form-group"><label>TIPE AKSI</label><div class="hp-badge-outline hp-badge-outline--orange">UPDATED</div></div>
              </div>
            </div>
            <div class="hp-modal-box mb-4">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> JEJAK KREDENSIAL & LOKASI</h4>
              <div class="hp-grid-3">
                <div class="hp-form-group"><label>IP ADDRESS</label><div class="hp-input-mock">Penghapusan Tabel</div></div>
                <div class="hp-form-group"><label>KORDINAT LOKASI (LAT)</label><div class="hp-input-mock">Tabel_Produk</div></div>
                <div class="hp-form-group"><label>KORDINAT LOKASI (LONG)</label><div class="hp-input-mock">Giska678</div></div>
              </div>
              <div class="hp-form-group" style="margin-top: 16px;"><label>USER AGENT (BROWSER/OS)</label><div class="hp-input-mock">CHROME,2342343, LINUX</div></div>
            </div>
            <div class="hp-modal-box mb-4">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> PERBANDINGAN DATA (JSON)</h4>
              <div class="hp-json-tables">
                <table class="hp-json-table">
                  <thead><tr><th colspan="2">Data Lama (Old)</th></tr><tr><th>Key</th><th>Value</th></tr></thead>
                  <tbody><tr><td>status</td><td>Pending</td></tr><tr><td>updated_at</td><td>2026-05-23T03:31:45.000000Z</td></tr></tbody>
                </table>
                <table class="hp-json-table">
                  <thead><tr><th colspan="2">Data Baru (New)</th></tr><tr><th>Key</th><th>Value</th></tr></thead>
                  <tbody><tr><td>status</td><td>Diterima</td></tr><tr><td>updated_at</td><td>2026-05-23 06:12:33</td></tr></tbody>
                </table>
              </div>
            </div>
            <div class="hp-modal-box">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> INTEGRITAS KEAMANAN</h4>
              <div class="hp-form-group"><label>TRANSACTION HASH</label><div class="hp-input-mock" style="letter-spacing: 1px;">768789654I83YFHVB J6R5E</div></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="hp-fade">
      <div v-if="showEditModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--sm" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
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
            <button @click="closeModals" class="hp-modal__close"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
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
// HARAP PASTIKAN FILE CSS INI ADA DI FOLDER TERSEBUT
import '~/assets/css/admin-page.css'

import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)
const isAkunOpen = ref(true)
const currentView = ref('dashboard')

// ==== MODAL STATES ====
const showProductDetailModal = ref(false)
const detailModalType = ref('monitoring')
const showKaryawanModal = ref(false)
const showPenggunaModal = ref(false)
const showSupplierModal = ref(false)
const showProdukModal = ref(false)
const showAktifitasModal = ref(false)

const showEditModal = ref(false)
const showDeleteModal = ref(false)

function openEdit() { showEditModal.value = true }
function openDelete() { showDeleteModal.value = true }
function openProductDetail(type) {
  detailModalType.value = type
  showProductDetailModal.value = true
}

function closeModals() {
  showProductDetailModal.value = false
  showKaryawanModal.value = false
  showPenggunaModal.value = false
  showSupplierModal.value = false
  showProdukModal.value = false
  showAktifitasModal.value = false
  showEditModal.value = false
  showDeleteModal.value = false
}

// ==== NAV MENUS ====
const menus = [
  { id: 'dashboard', label: 'Dashboard', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>' },
  { 
    id: 'akun', label: 'Akun', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    sub: [
      { id: 'karyawan', label: 'Karyawan', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
      { id: 'pengguna', label: 'Pengguna', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' }
    ]
  },
  { id: 'supplier', label: 'Supplier', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
  { id: 'produk', label: 'Produk', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
  { id: 'kasir', label: 'Kasir', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>' },
  { id: 'transaksi', label: 'Transaksi', icon: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
  { id: 'kas', label: 'Kas', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>' },
  { id: 'aktifitas', label: 'Aktifitas', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
  { id: 'custom-ecomerce', label: 'Custom Ecomerce', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' }
]

const currentMenuLabel = computed(() => {
  let label = 'Dashboard'
  menus.forEach(m => {
    if (m.id === currentView.value) label = m.label
    if (m.sub) {
      m.sub.forEach(s => { if (s.id === currentView.value) label = `Akun ${s.label}` })
    }
  })
  return label
})

function changeView(id) {
  currentView.value = id
  mobileMenuOpen.value = false
}

// ==== DUMMY DATA ====
const chartData = [
  { label: 'Jan', height: 50, displayValue: 'Rp 405k' }, { label: 'Feb', height: 60, displayValue: 'Rp 630k' }, { label: 'Mar', height: 68, displayValue: 'Rp 702k' }, { label: 'Apr', height: 75, displayValue: 'Rp 765k' },
  { label: 'Mei', height: 58, displayValue: 'Rp 585k' }, { label: 'Jun', height: 68, displayValue: 'Rp 720k' }, { label: 'Jul', height: 62, displayValue: 'Rp 630k' }, { label: 'Agst', height: 70, displayValue: 'Rp 792k' },
  { label: 'Sep', height: 62, displayValue: 'Rp 648k' }, { label: 'Oct', height: 50, displayValue: 'Rp 450k' }, { label: 'Nov', height: 70, displayValue: 'Rp 738k' }, { label: 'Des', height: 62, displayValue: 'Rp 675k' }
]

const monitoringData = [
  { kode: 'TX-076-01', nama: 'Mie Sedap Goreng', jenis: 'Makanan', stok: '30 PCS', info: '3 Hari Lagi Expired', isRed: true },
  { kode: 'DD-987-37', nama: 'Pasta Gigi Closeup', jenis: 'Cosmetic', stok: '5 PCS', info: 'Stok Menipis', isRed: true },
  { kode: 'TY-055-45', nama: 'Selai Kacang', jenis: 'Makanan', stok: '7 PCS', info: '7 Hari Lagi Expired', isRed: true },
  { kode: 'KI-547-12', nama: 'Tepung Segitiga', jenis: 'Makanan', stok: '3 PCS', info: 'Stok Menipis', isRed: true },
  { kode: 'CV-346-66', nama: 'Mie Gaga', jenis: 'Makanan', stok: '4 PCS', info: 'Stok Menipis', isRed: true },
]

const karyawanData = [
  { username: 'admin_konsumen', nama: 'Andi Wijaya Kusuma', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'admin_produsen', nama: 'Siti Aminah', kontak: '0895-2345-6789', status: 'Offline' },
  { username: 'admin_jasa', nama: 'Yayan Ruhyan', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'karyawan_1', nama: 'Henriyanto', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'supplier_1', nama: 'Rudi Masud', kontak: '0895-2345-6789', status: 'Online' }
]

const penggunaData = [
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Offline' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
]

const supplierData = [
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
]

const transaksiData = [
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Kasir Offline', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'Cash' },
]

const kasData = [
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Beli Keperluan', jenis: 'Keluar', nominal: 'Rp 50.000,00', waktu: '13-04-2026' },
]

const aktifitasData = [
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
]
</script>