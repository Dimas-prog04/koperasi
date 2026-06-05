<template>
  <div class="hp-wrapper">
    <!-- Overlay Mobile -->
    <div v-if="mobileMenuOpen" class="hp-overlay" @click="mobileMenuOpen = false"></div>

    <!-- ===== SIDEBAR ===== -->
    <aside :class="['hp-sidebar', mobileMenuOpen ? 'hp-sidebar--open' : 'hp-sidebar--closed']">
      <div class="hp-sidebar__top">
        <!-- Logo -->
        <div class="hp-logo">
          <h1 class="hp-logo__text">H<span>E</span>LPIN</h1>
          <span class="hp-logo__sub">SERVICES</span>
        </div>

        <!-- User Info -->
        <div class="hp-user-info">
          <p class="hp-user-info__label"><span class="hp-dot"></span> PENGGUNA AKTIF</p>
          <h2 class="hp-user-info__name">Karyawan Suki</h2>
          <span class="hp-user-info__badge">KARYAWAN</span>
        </div>

        <!-- Navigation -->
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

      <!-- Sidebar Bottom -->
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

    <!-- ===== MAIN CONTENT ===== -->
    <main class="hp-main">
      <!-- Header -->
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

      <!-- Content Area -->
      <div class="hp-content">
        
        <!-- === 1. VIEW: DASHBOARD === -->
        <div v-if="currentView === 'dashboard'" class="hp-view animate-fade">
          <div class="hp-stats-row mb-4">
            <div class="hp-stat-card">
              <div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9h20"/></svg></div>
              <div><p class="hp-stat-card__label">TOTAL OMZET PENJUALAN</p><h3 class="hp-stat-card__value">Rp 650.000,00</h3></div>
            </div>
            <div class="hp-stat-card">
              <div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></div>
              <div><p class="hp-stat-card__label">KOLEKSI PRODUK</p><h3 class="hp-stat-card__value">6 Item</h3></div>
            </div>
            <div class="hp-stat-card">
              <div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>
              <div><p class="hp-stat-card__label">BLOCKCHAIN TRANSACTION</p><h3 class="hp-stat-card__value">3 Block</h3></div>
            </div>
          </div>

          <div class="hp-card mb-4">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Grafik Omset</h3>
              <select class="hp-select"><option>Bulanan</option></select>
            </div>
            <div class="hp-chart">
              <div class="hp-chart__y-axis">
                <span>Rp 900k</span><span>Rp 800k</span><span>Rp 700k</span><span>Rp 600k</span><span>Rp 500k</span><span>Rp 400k</span><span>Rp 300k</span><span>Rp 200k</span><span>Rp 100k</span>
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
                    <td><button @click="openProductDetail" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === 2. VIEW: PENGGUNA === -->
        <div v-else-if="currentView === 'pengguna'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Akun Pengguna</h3>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>USERNAME</th><th>EMAIL</th><th>KONTAK</th><th>STATUS</th><th>AKSI</th></tr></thead>
                <tbody>
                  <tr v-for="(item, i) in penggunaData" :key="i">
                    <td><strong>{{ item.username }}</strong></td>
                    <td><strong>{{ item.email }}</strong></td>
                    <td><strong>{{ item.kontak }}</strong></td>
                    <td><span :class="['hp-badge', item.status === 'Online' ? 'hp-badge--blue-light' : 'hp-badge--red-light']">{{ item.status }}</span></td>
                    <td><button @click="openPenggunaDetail" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === 3. VIEW: SUPPLIER === -->
        <div v-else-if="currentView === 'supplier'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Supplier</h3>
              <button @click="openSupplierModal" class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>NAMA SUPPLIER</th><th>KONTAK/TELEPON</th><th>KOMODITAS</th><th>ALAMAT WILAYAH</th><th>AKSI</th></tr></thead>
                <tbody>
                  <tr v-for="(item, i) in supplierData" :key="i">
                    <td><strong>{{ item.nama }}</strong></td>
                    <td><strong>{{ item.kontak }}</strong></td>
                    <td><span class="hp-badge hp-badge--blue-light">{{ item.komoditas }}</span></td>
                    <td><strong>{{ item.alamat }}</strong></td>
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

        <!-- === 4. VIEW: PRODUK === -->
        <div v-else-if="currentView === 'produk'" class="hp-view animate-fade">
          <div class="hp-card mb-4">
            <div class="hp-filter-row mb-4">
              <div class="hp-input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" placeholder="Cari Produk..." class="hp-input" />
              </div>
              <select class="hp-select"><option>Kategori</option></select>
            </div>
            
            <div class="hp-product-grid mb-4">
              <div v-for="i in 6" :key="i" class="hp-product-card">
                <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=200&h=150" alt="Product" class="hp-product-img">
                <h4 class="hp-product-name">Mie Sedap Goreng</h4>
                <div class="hp-product-meta">
                  <p>Kategori : Makanan</p>
                  <p>Harga Beli : Rp 2.500</p>
                  <p>Harga Jual : Rp 4.000</p>
                  <p>Stok : 67 Pcs</p>
                  <p>Expired : 05-04-2027</p>
                </div>
                <p class="hp-product-date">Tanggal Masuk : 05-04-2026</p>
              </div>
            </div>

            <div class="hp-pagination mb-4">
              <span class="hp-page-dot hp-page-dot--active">1</span>
              <span class="hp-page-dot">2</span>
              <span class="hp-page-dot">3</span>
            </div>

            <button @click="openProdukModal" class="hp-btn-full hp-bg-dark-green text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              Tambah Produk
            </button>
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
                    <td><button @click="openProductDetail" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === 5. VIEW: KASIR (POS) === -->
        <div v-else-if="currentView === 'kasir'" class="hp-view animate-fade">
          <div class="hp-kasir-grid mb-4">
            <!-- Kasir Left: Cart -->
            <div class="hp-card hp-kasir-cart">
              <div class="hp-card__header"><h3 class="hp-card__title"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19462D" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Kasir</h3></div>
              <p class="hp-text-center" style="font-size: 13px; font-weight: 700; color: #19462D; margin-bottom: 16px;">Keranjang</p>
              <div class="hp-cart-items">
                <div class="hp-cart-item">
                  <div><p class="hp-cart-name">Mie Sedap Goreng</p><p class="hp-cart-price">Rp 4.000</p></div>
                  <div class="hp-qty-ctrl"><button>-</button><span>2</span><button class="plus">+</button></div>
                </div>
                <div class="hp-cart-item">
                  <div><p class="hp-cart-name">Selai Kacang</p><p class="hp-cart-price">Rp 12.000</p></div>
                  <div class="hp-qty-ctrl"><button>-</button><span>1</span><button class="plus">+</button></div>
                </div>
                <div class="hp-cart-item">
                  <div><p class="hp-cart-name">Pasta Gigi Closeup</p><p class="hp-cart-price">Rp 8.000</p></div>
                  <div class="hp-qty-ctrl"><button>-</button><span>1</span><button class="plus">+</button></div>
                </div>
              </div>
              <div class="hp-cart-summary">
                <p>Subtotal Tagihan</p>
                <h2>Rp 24.000,00</h2>
                <button class="hp-btn-full hp-bg-dark-green text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                  Simpan Transaksi
                </button>
              </div>
            </div>

            <!-- Kasir Right: Products -->
            <div class="hp-kasir-products">
              <div class="hp-filter-row mb-4">
                <div class="hp-input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <input type="text" placeholder="Cari Produk..." class="hp-input" />
                </div>
                <select class="hp-select"><option>Kategori</option></select>
              </div>
              <div class="hp-product-grid hp-product-grid--sm mb-4">
                <div v-for="i in 6" :key="i" class="hp-product-card">
                  <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=150&h=100" alt="Product" class="hp-product-img">
                  <h4 class="hp-product-name">Mie Sedap Goreng</h4>
                  <div class="hp-product-meta"><p>Stok : 67 Pcs</p><p>Expired : 05-04-2027</p></div>
                </div>
              </div>
              <div class="hp-pagination mb-4">
                <span class="hp-page-dot hp-page-dot--active">1</span><span class="hp-page-dot">2</span><span class="hp-page-dot">3</span>
              </div>
              <button class="hp-btn-full hp-bg-dark-green text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                Masukan Keranjang
              </button>
            </div>
          </div>
          <div class="hp-card">
            <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Transaksi Kasir</h3></div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>QUANTITY</th><th>TANGGAL</th><th>WAKTU</th><th>TOTAL TRANSAKSI</th></tr></thead>
                <tbody>
                  <tr v-for="i in 6" :key="i">
                    <td><strong>4 Pcs</strong></td>
                    <td><strong>12-03-2026</strong></td>
                    <td><strong>09.00 AM</strong></td>
                    <td><strong>Rp 24.000,00</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === 6. VIEW: TRANSAKSI === -->
        <div v-else-if="currentView === 'transaksi'" class="hp-view animate-fade">
          <div class="hp-card mb-4">
            <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Transaksi</h3></div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>ID TRANSAKSI</th><th>TANGGAL</th><th>METODE</th><th>QUANTITY</th><th>TOTAL TRANSAKSI</th><th>JENIS TRANSAKSI</th></tr></thead>
                <tbody>
                  <tr v-for="(item, i) in transaksiData" :key="i">
                    <td><strong>{{ item.id }}</strong></td>
                    <td><strong>{{ item.tanggal }}</strong></td>
                    <td><span :class="['hp-badge', item.metode === 'Kasir Offline' ? 'hp-badge--yellow-light' : 'hp-badge--blue-light']">{{ item.metode }}</span></td>
                    <td><strong>{{ item.qty }}</strong></td>
                    <td><strong>{{ item.total }}</strong></td>
                    <td><span :class="['hp-badge', item.jenis === 'Cash' ? 'hp-badge--yellow-light' : 'hp-badge--blue-light']">{{ item.jenis }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="hp-card mb-4">
            <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Pesanan</h3></div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>KODE PESANAN</th><th>PENGGUNA</th><th>TOTAL HARGA</th><th>STATUS PESANAN</th><th>AKSI</th></tr></thead>
                <tbody>
                  <tr v-for="(item, i) in pesananData" :key="i">
                    <td><strong>{{ item.kode }}</strong></td>
                    <td><strong>{{ item.pengguna }}</strong></td>
                    <td><strong>{{ item.total }}</strong></td>
                    <td><span :class="['hp-badge', getStatusBadgeClass(item.status)]">{{ item.status }}</span></td>
                    <td>
                      <div class="hp-actions">
                        <button @click="openEdit" class="hp-btn-icon hp-btn-icon--purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                        <button class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="hp-card">
            <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Pengguna Pesanan</h3></div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>KODE PESANAN</th><th>TOTAL HARGA</th><th>STATUS PESANAN</th><th>AKSI</th></tr></thead>
                <tbody>
                  <tr v-for="(item, i) in penggunaPesananData" :key="i">
                    <td><strong>{{ item.kode }}</strong></td>
                    <td><strong>{{ item.total }}</strong></td>
                    <td><span :class="['hp-badge', getStatusBadgeClass(item.status)]">{{ item.status }}</span></td>
                    <td>
                      <div class="hp-actions">
                        <button class="hp-btn-icon hp-btn-icon--green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></button>
                        <button class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === 7. VIEW: KAS === -->
        <div v-else-if="currentView === 'kas'" class="hp-view animate-fade">
          <div class="hp-stats-row mb-4">
            <div class="hp-stat-card">
              <div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9h20"/></svg></div>
              <div><p class="hp-stat-card__label">TOTAL KAS</p><h3 class="hp-stat-card__value">Rp 650.000,00</h3></div>
            </div>
            <div class="hp-stat-card">
              <div class="hp-stat-card__icon hp-bg-light-blue"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg></div>
              <div><p class="hp-stat-card__label">UANG MASUK</p><h3 class="hp-stat-card__value">Rp 700.000,00</h3></div>
            </div>
            <div class="hp-stat-card">
              <div class="hp-stat-card__icon hp-bg-light-red"><svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M9 21H3v-6"/><path d="M15 3h6v6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg></div>
              <div><p class="hp-stat-card__label">UANG KELUAR</p><h3 class="hp-stat-card__value">Rp 50.000,00</h3></div>
            </div>
          </div>

          <div class="hp-card">
            <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Buku Kas</h3></div>
            <div class="hp-input-row mb-4">
              <input type="text" placeholder="Keterangan Transaksi..." class="hp-input" style="flex:2;" />
              <select class="hp-select" style="flex:1;"><option>Kategori</option></select>
              <input type="text" placeholder="Nominal..." class="hp-input" style="flex:1;" />
              <button class="hp-btn hp-bg-blue text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> CATAT KAS</button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead><tr><th>KETERANGAN TRANSAKSI</th><th>JENIS</th><th>NOMINAL</th><th>WAKTU PENCATATAN</th></tr></thead>
                <tbody>
                  <tr v-for="(item, i) in kasData" :key="i">
                    <td><strong>{{ item.ket }}</strong></td>
                    <td><span :class="['hp-badge', item.jenis === 'Masuk' ? 'hp-badge--blue-solid' : 'hp-badge--red-solid']">{{ item.jenis }}</span></td>
                    <td><strong>{{ item.nominal }}</strong></td>
                    <td><strong>{{ item.waktu }}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- ==================== POP UP MODALS ==================== -->
    
    <!-- 1. MODAL DETAIL PRODUK (Monitoring) -->
    <Transition name="hp-fade">
      <div v-if="showProductDetailModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--lg" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">Monitoring Produk AI</h2>
          </div>
          <div class="hp-modal__body">
            <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=600&h=300" alt="Product Large" class="hp-product-img-large" />
            <h3 class="hp-text-center" style="font-size: 22px; font-weight: 800; color: #19462D; margin: 20px 0;">Mie Sedap Goreng</h3>
            
            <div class="hp-grid-3">
              <div class="hp-form-group">
                <label>KODE PRODUK</label>
                <div class="hp-input-mock">TX-076-01</div>
              </div>
              <div class="hp-form-group">
                <label>JENIS PRODUK</label>
                <div class="hp-input-mock">Makanan</div>
              </div>
              <div class="hp-form-group">
                <label>STOK</label>
                <div class="hp-input-mock">30 Pcs</div>
              </div>
            </div>

            <div class="hp-form-group" style="margin-top: 16px;">
              <label>INFORMASI</label>
              <div class="hp-input-mock hp-input-mock--large text-red">3 Hari Lagi Produk Ini Tidak Layak Makan</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 2. MODAL PENGGUNA (Detail Read Only) -->
    <Transition name="hp-fade">
      <div v-if="showPenggunaModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
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
              <div><span class="hp-badge hp-badge--blue-light" style="font-size: 14px; padding: 10px 20px;">Online</span></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 3. MODAL SUPPLIER (Tambah/Edit) -->
    <Transition name="hp-fade">
      <div v-if="showSupplierModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">Akun Supplier</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-modal-box">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> TAMBAH SUPPLIER BARU</h4>
              <div class="hp-grid-2">
                <div class="hp-form-group">
                  <label>NAMA SUPPLIER</label>
                  <input type="text" placeholder="Contoh : admin_koperasi" class="hp-input" />
                </div>
                <div class="hp-form-group">
                  <label>ALAMAT WILAYAH</label>
                  <input type="text" placeholder="Contoh : ujung kedu.." class="hp-input" />
                </div>
                <div class="hp-form-group">
                  <label>KONTAK</label>
                  <input type="text" placeholder="Contoh : 08966...." class="hp-input" />
                </div>
                <div class="hp-form-group">
                  <label>KOMODITAS</label>
                  <select class="hp-input"><option>Pilih Komoditas</option></select>
                </div>
              </div>
              <button @click="closeModals" class="hp-btn-simpan hp-mt-6">SIMPAN AKUN</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 4. MODAL TAMBAH PRODUK -->
    <Transition name="hp-fade">
      <div v-if="showProdukModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--scrollable" @click.stop>
          <div class="hp-modal__header sticky-header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
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
              <button class="hp-btn-outline hp-mt-6" style="width: 100%; justify-content: center;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Masukan Gambar
              </button>
              <button @click="closeModals" class="hp-btn-simpan hp-mt-6" style="max-width: 100%;">SIMPAN PRODUK</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 5. MODAL EDIT (GLOBAL) -->
    <Transition name="hp-fade">
      <div v-if="showEditModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--sm" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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

    <!-- 6. MODAL HAPUS (GLOBAL) -->
    <Transition name="hp-fade">
      <div v-if="showDeleteModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--sm" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
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
definePageMeta({ layout: false })
import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)
const currentView = ref('dashboard')

// ==== MODAL STATES ====
const showProductDetailModal = ref(false)
const showPenggunaModal = ref(false)
const showSupplierModal = ref(false)
const showProdukModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)

// === FUNGSI PEMICU MODAL ===
function openProductDetail() { showProductDetailModal.value = true }
function openPenggunaDetail() { showPenggunaModal.value = true }
function openSupplierModal() { showSupplierModal.value = true }
function openProdukModal() { showProdukModal.value = true }
function openEdit() { showEditModal.value = true }
function openDelete() { showDeleteModal.value = true }

function closeModals() {
  showProductDetailModal.value = false
  showPenggunaModal.value = false
  showSupplierModal.value = false
  showProdukModal.value = false
  showEditModal.value = false
  showDeleteModal.value = false
}

// ==== NAV MENUS KARYAWAN (Tanpa Submenu Akun & Aktifitas) ====
const menus = [
  { id: 'dashboard', label: 'Dashboard', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>' },
  { id: 'pengguna', label: 'Pengguna', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { id: 'supplier', label: 'Supplier', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
  { id: 'produk', label: 'Produk', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
  { id: 'kasir', label: 'Kasir', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>' },
  { id: 'transaksi', label: 'Transaksi', icon: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
  { id: 'kas', label: 'Kas', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>' }
]

const currentMenuLabel = computed(() => {
  return menus.find(m => m.id === currentView.value)?.label || 'Dashboard'
})

function changeView(id) {
  currentView.value = id
  mobileMenuOpen.value = false
}

// === FUNGSI STATUS PESANAN ===
function getStatusBadgeClass(status) {
  if (status === 'Diterima') return 'hp-badge--blue-light'
  if (status === 'Proses') return 'hp-badge--yellow-light'
  if (status === 'Dibuat') return 'hp-badge--green-light'
  return 'hp-badge--blue-light'
}

// ==== DUMMY DATA ====
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

const pesananData = [
  { kode: 'DD-999-DA', pengguna: 'Giska678', total: 'Rp 24.000,00', status: 'Diterima' },
  { kode: 'DD-999-DA', pengguna: 'Giska678', total: 'Rp 24.000,00', status: 'Proses' },
  { kode: 'DD-999-DA', pengguna: 'Giska678', total: 'Rp 24.000,00', status: 'Dibuat' },
]

const penggunaPesananData = [
  { kode: 'DD-999-DA', total: 'Rp 24.000,00', status: 'Diterima' },
  { kode: 'DD-999-DA', total: 'Rp 24.000,00', status: 'Proses' },
  { kode: 'DD-999-DA', total: 'Rp 24.000,00', status: 'Dibuat' },
]

const kasData = [
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Beli Keperluan', jenis: 'Keluar', nominal: 'Rp 50.000,00', waktu: '13-04-2026' },
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
.hp-user-info__badge { display: inline-block; padding: 4px 12px; background: #166534; color: #fff; font-size: 10px; font-weight: 600; border-radius: 4px; letter-spacing: 1px; }

/* Nav */
.hp-nav { display: flex; flex-direction: column; padding-left: 20px; }
.hp-nav__btn { position: relative; width: 100%; background: transparent; border: none; cursor: pointer; padding: 0; margin-bottom: 4px; text-align: left; }
.hp-nav__btn-inner { display: flex; align-items: center; gap: 16px; padding: 14px 24px; color: #fff; font-size: 15px; font-weight: 600; border-radius: 30px 0 0 30px; transition: all 0.2s; }
.hp-nav__btn svg { width: 20px; height: 20px; display: block; opacity: 0.9; flex-shrink: 0; }
.hp-nav__btn--active > .hp-nav__btn-inner { background: #F4FBF7; color: #19462D; }

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
.hp-btn-icon--green { background: #22C55E; }
.hp-btn-icon--purple { background: #D946EF; }

/* Badges */
.hp-badge { display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; }
.hp-badge--blue-light { background: #EFF6FF; color: #3B82F6; border: 1px solid #BFDBFE; }
.hp-badge--red-light { background: #FEF2F2; color: #EF4444; border: 1px solid #FECACA; }
.hp-badge--yellow-light { background: #FEF9C3; color: #CA8A04; border: 1px solid #FEF08A; }
.hp-badge--green-light { background: #DCFCE7; color: #16A34A; border: 1px solid #BBF7D0; }
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

.hp-product-img-large { width: 100%; max-width: 350px; height: auto; margin: 0 auto; display: block; object-fit: contain; }

.hp-btn-group { display: flex; gap: 16px; justify-content: center; }
.hp-btn-action { flex: 1; padding: 14px; border: none; border-radius: 10px; color: #fff; font-size: 15px; font-weight: 700; cursor: pointer; }
.hp-btn-action--blue { background: #0EA5E9; }
.hp-btn-action--blue:hover { background: #0284C7; }
.hp-btn-action--red { background: #EF4444; }
.hp-btn-action--red:hover { background: #DC2626; }

/* Scrollbar Custom untuk modal yang scrollable */
.hp-modal__body::-webkit-scrollbar { width: 6px; }
.hp-modal__body::-webkit-scrollbar-track { background: transparent; }
.hp-modal__body::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }

/* Animations */
.animate-fade { animation: fadeIn 0.3s ease-in-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.hp-fade-enter-active, .hp-fade-leave-active { transition: opacity 0.3s ease; }
.hp-fade-enter-from, .hp-fade-leave-to { opacity: 0; }
</style>