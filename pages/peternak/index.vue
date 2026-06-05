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
          <h2 class="hp-user-info__name">Peternak Suki</h2>
          <span class="hp-user-info__badge">PETERNAK</span>
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
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
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
          <span class="hp-dot hp-dot--green"></span>
          STATUS<br><strong style="color: #166534;">ONLINE</strong>
        </div>
      </header>

      <!-- Content Area -->
      <div class="hp-content">
        
        <!-- === VIEW: DASHBOARD === -->
        <div v-if="currentView === 'dashboard'" class="hp-view animate-fade">
          <div class="hp-card mb-4">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Hasil Ternak</h3>
              <select class="hp-select">
                <option>Bulanan</option>
              </select>
            </div>
            <div class="hp-chart">
              <div class="hp-chart__y-axis">
                <span>90 Ekor</span><span>80 Ekor</span><span>70 Ekor</span><span>60 Ekor</span><span>50 Ekor</span><span>40 Ekor</span><span>30 Ekor</span><span>20 Ekor</span><span>10 Ekor</span>
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
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Rekomendasi</h3>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS TERNAK</th><th>JUMLAH TERNAK</th><th>KESEHATAN TERNAK</th><th>INFORMASI</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in rekomendasiDashData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td><strong>{{ item.kesehatan }}</strong></td>
                    <td class="text-red"><strong>{{ item.info }}</strong></td>
                    <td><button @click="openDetail(item)" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === VIEW: KANDANG === -->
        <div v-else-if="currentView === 'kandang'" class="hp-view animate-fade">
          <div class="hp-card mb-4">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Kandang Ternak</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS TERNAK</th><th>KESEHATAN TERNAK</th><th>JUMLAH TERNAK</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in kandangData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.kesehatan }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
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
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Riwayat Kandang Ternak</h3>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS TERNAK</th><th>JUMLAH TERNAK</th><th>KESEHATAN TERNAK</th><th>INFORMASI</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in riwayatKandangData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td><strong>{{ item.kesehatan }}</strong></td>
                    <td class="text-red"><strong>{{ item.info }}</strong></td>
                    <td><button @click="openDetail(item)" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === VIEW: TERNAK === -->
        <div v-else-if="currentView === 'ternak'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Ternak</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS TERNAK</th><th>KESEHATAN TERNAK</th><th>JUMLAH TERNAK</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in kandangData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.kesehatan }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
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

        <!-- === VIEW: KUALITAS TERNAK === -->
        <div v-else-if="currentView === 'kualitas'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Kualitas Ternak</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS TERNAK</th><th>KESEHATAN TERNAK</th><th>JUMLAH TERNAK</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in kandangData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.kesehatan }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
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

        <!-- === VIEW: KONDISI KESEHATAN === -->
        <div v-else-if="currentView === 'kesehatan'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Kondisi Kesehatan</h3>
              <button class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS TERNAK</th><th>KESEHATAN TERNAK</th><th>JUMLAH TERNAK</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in kandangData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.kesehatan }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
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

        <!-- === VIEW: RIWAYAT KESEHATAN === -->
        <div v-else-if="currentView === 'riwayat-kesehatan'" class="hp-view animate-fade">
          <div class="hp-card">
            <div class="hp-card__header">
              <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Riwayat Kesehatan</h3>
            </div>
            <div class="hp-table-wrap">
              <table class="hp-table">
                <thead>
                  <tr><th>JENIS TERNAK</th><th>JUMLAH TERNAK</th><th>KESEHATAN TERNAK</th><th>INFORMASI</th><th>AKSI</th></tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in riwayatKandangData" :key="i">
                    <td><strong>{{ item.jenis }}</strong></td>
                    <td><strong>{{ item.jumlah }}</strong></td>
                    <td><strong>{{ item.kesehatan }}</strong></td>
                    <td class="text-red"><strong>{{ item.info }}</strong></td>
                    <td><button @click="openDetail(item)" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- === VIEW: REKOMENDASI PAKAN === -->
        <div v-else-if="currentView === 'rekomendasi'" class="hp-view animate-fade">
          
          <!-- Tombol Box Tambah Rekomendasi (Dashed Box - Selalu Tampil di Atas) -->
          <div class="hp-card hp-card--transparent" style="padding-bottom: 32px; border-bottom: 2px solid #e5e7eb; margin-bottom: 32px;">
            <div class="hp-dashed-box" @click="openRekomendasiModal">
              <h2 class="hp-dashed-box__title">Rekomendasi Pakan Ternak</h2>
              <div class="hp-dashed-box__circle">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                <svg class="hp-sparkle hp-sparkle--1" viewBox="0 0 24 24" fill="#84CC16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg class="hp-sparkle hp-sparkle--2" viewBox="0 0 24 24" fill="#84CC16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <p class="hp-dashed-box__text">Tekan Untuk Mendapatkan Rekomendasi Pakan</p>
            </div>
          </div>

          <!-- Tampilan List Riwayat Rekomendasi -->
          <div>
            <h3 style="font-size: 18px; font-weight: 700; color: #19462D; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
              <span class="hp-dot hp-dot--dark"></span> Riwayat Rekomendasi
            </h3>
            
            <div class="hp-rekomendasi-list">
              <div v-for="(item, i) in rekomendasiList" :key="i" class="hp-rek-item">
                <div class="hp-rek-item__left">
                  <img src="https://placehold.co/80x80/e2e8f0/19462d?text=Pakan" alt="pakan" class="hp-rek-item__img">
                  <div class="hp-rek-item__info">
                    <h3 class="hp-rek-item__title">{{ item.kandang }}</h3>
                    <p class="hp-rek-item__desc">{{ item.jenis }}</p>
                  </div>
                </div>
                <div class="hp-rek-item__mid">
                  <span class="hp-rek-item__berat">{{ item.berat }}</span>
                </div>
                <div class="hp-rek-item__right">
                  <button @click="openRekomendasiDetail" class="hp-btn-icon hp-btn-icon--dark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>

    <!-- ==================== POP UP MODALS ==================== -->

    <!-- 1. POP UP DETAIL (UMUM) -->
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
                <label>JENIS TERNAK</label>
                <div class="hp-input-mock">{{ selectedItem?.jenis || 'SAPI' }}</div>
              </div>
              <div class="hp-form-group">
                <label>JUMLAH TERNAK</label>
                <div class="hp-input-mock">{{ selectedItem?.jumlah || '20 EKOR' }}</div>
              </div>
              <div class="hp-form-group">
                <label>KESEHATAN TERNAK</label>
                <div class="hp-input-mock">{{ selectedItem?.kesehatan || 'KURANG BAIK' }}</div>
              </div>
            </div>
            <div class="hp-form-group" style="margin-top: 20px;">
              <label>INFORMASI</label>
              <div class="hp-input-mock hp-input-mock--large text-red">
                {{ selectedItem?.info || 'Beri Vitamin Pada Ternak Anda' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 2. POP UP EDIT -->
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

    <!-- 3. POP UP HAPUS -->
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

    <!-- 4. POP UP TAMBAH REKOMENDASI (Form Singkat) -->
    <Transition name="hp-fade">
      <div v-if="showRekomendasiModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal" @click.stop>
          <div class="hp-modal__header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">Rekomendasi Pakan</h2>
          </div>
          <div class="hp-modal__body">
            <div class="hp-modal-box">
              <h4 class="hp-modal-box__title"><span class="hp-dot hp-dot--dark"></span> Tambah Rekomendasi Pakan</h4>
              
              <div class="hp-form-group">
                <label>Kandang Ternak</label>
                <input type="text" placeholder="Contoh : kandang_ngawi" class="hp-input" />
              </div>

              <button @click="closeModals" class="hp-btn-simpan hp-mt-6">SIMPAN</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 5. POP UP DETAIL REKOMENDASI (Form Panjang/Scrollable) -->
    <Transition name="hp-fade">
      <div v-if="showDetailRekModal" class="hp-modal-overlay" @click="closeModals">
        <div class="hp-modal hp-modal--scrollable" @click.stop>
          <div class="hp-modal__header sticky-header">
            <button @click="closeModals" class="hp-modal__close">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 class="hp-modal__title">Detail Rekomendasi Pakan</h2>
          </div>
          <div class="hp-modal__body">
            
            <!-- Box 1 -->
            <div class="hp-modal-box hp-mb-4">
              <div class="hp-grid-2">
                <div class="hp-form-group">
                  <label>Kode Rekomendasi</label>
                  <div class="hp-input-mock">REC-009-01</div>
                </div>
                <div class="hp-form-group">
                  <label>Kode Hewan</label>
                  <div class="hp-input-mock">HWN-008</div>
                </div>
                <div class="hp-form-group">
                  <label>Kategori Hewan</label>
                  <div class="hp-input-mock">Starter Broiler</div>
                </div>
                <div class="hp-form-group">
                  <label>Tanggal Dibuat</label>
                  <div class="hp-input-mock">12-03-2026</div>
                </div>
              </div>
              <div class="hp-form-group" style="margin-top:16px;">
                <label>Dibuat Oleh</label>
                <div class="hp-input-mock">Dr. Ahmad Zaid</div>
              </div>
            </div>

            <!-- Box 2 -->
            <div class="hp-modal-box hp-mb-4">
              <div class="hp-grid-2">
                <div class="hp-form-group">
                  <label>Nama Pakan</label>
                  <div class="hp-input-mock">Pakan Finisher</div>
                </div>
                <div class="hp-form-group">
                  <label>Jenis Pakan</label>
                  <div class="hp-input-mock">Pellet</div>
                </div>
              </div>
              <div class="hp-form-group" style="margin-top:16px;">
                <label>Komposisi Bahan</label>
                <div class="hp-input-mock">Jagung, Dedak, Vitamin</div>
              </div>
            </div>

            <!-- Box 3 -->
            <div class="hp-modal-box hp-mb-4">
              <div class="hp-grid-2">
                <div class="hp-form-group">
                  <label>Porsi Perhari</label>
                  <div class="hp-input-mock">125,6 KG</div>
                </div>
                <div class="hp-form-group">
                  <label>Satuan Berat</label>
                  <div class="hp-input-mock">Kilogram</div>
                </div>
                <div class="hp-form-group">
                  <label>Frekuensi Pemberian</label>
                  <div class="hp-input-mock">2</div>
                </div>
                <div class="hp-form-group">
                  <label>Waktu Pemberian</label>
                  <div class="hp-input-mock">08.00 & 16.00</div>
                </div>
              </div>
              <div class="hp-form-group" style="margin-top:16px;">
                <label>Metode Pemberian</label>
                <div class="hp-input-mock">Restricted</div>
              </div>
            </div>

            <!-- Box 4 -->
            <div class="hp-modal-box hp-mb-4">
              <div class="hp-grid-2">
                <div class="hp-form-group">
                  <label>Protein Kasar</label>
                  <div class="hp-input-mock">18,8 %</div>
                </div>
                <div class="hp-form-group">
                  <label>Energi Metabolis</label>
                  <div class="hp-input-mock">3100 Kcal</div>
                </div>
                <div class="hp-form-group">
                  <label>Serat Kasar</label>
                  <div class="hp-input-mock">12%</div>
                </div>
                <div class="hp-form-group">
                  <label>Kalsium</label>
                  <div class="hp-input-mock">18%</div>
                </div>
              </div>
              <div class="hp-form-group" style="margin-top:16px;">
                <label>Fosfor</label>
                <div class="hp-input-mock">12%</div>
              </div>
            </div>

            <!-- Box 5 -->
            <div class="hp-modal-box">
              <div class="hp-grid-2">
                <div class="hp-form-group">
                  <label>Durasi Rekomendasi</label>
                  <div class="hp-input-mock">14 Hari</div>
                </div>
                <div class="hp-form-group">
                  <label>Status Aktif</label>
                  <div class="hp-input-mock">True</div>
                </div>
              </div>
              <div class="hp-form-group" style="margin-top:16px;">
                <label>Instruksi Khusus</label>
                <div class="hp-input-mock hp-input-mock--large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false 
})

import { ref, computed } from 'vue'

const currentView = ref('dashboard')
const mobileMenuOpen = ref(false)

// State Modals
const showDetailModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const showRekomendasiModal = ref(false)
const showDetailRekModal = ref(false)
const selectedItem = ref(null)

const menus = [
  { id: 'dashboard', label: 'Dashboard', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>' },
  { id: 'kandang', label: 'Kandang', icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>' },
  { id: 'ternak', label: 'Ternak', icon: '<path d="M3 10v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"/><path d="M7 6v4"/><path d="M17 6v4"/><path d="M5 6l2-2h10l2 2"/>' },
  { id: 'kualitas', label: 'Kualitas Ternak', icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' },
  { id: 'kesehatan', label: 'Kondisi Kesehatan', icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/>' },
  { id: 'riwayat-kesehatan', label: 'Riwayat Kesehatan', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
  { id: 'rekomendasi', label: 'Rekomendasi Pakan', icon: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
]

const currentMenuLabel = computed(() => {
  const found = menus.find(m => m.id === currentView.value)
  return found ? found.label : 'Dashboard'
})

function changeView(id) {
  currentView.value = id
  mobileMenuOpen.value = false
}

// === FUNGSI BUKA MODAL ===
function openDetail(item) {
  selectedItem.value = item
  showDetailModal.value = true
}
function openEdit() { showEditModal.value = true }
function openDelete() { showDeleteModal.value = true }
function openRekomendasiModal() { showRekomendasiModal.value = true }
function openRekomendasiDetail() { showDetailRekModal.value = true }

function closeModals() {
  showDetailModal.value = false
  showEditModal.value = false
  showDeleteModal.value = false
  showRekomendasiModal.value = false
  showDetailRekModal.value = false
  setTimeout(() => { selectedItem.value = null }, 300)
}

// === DATA DUMMY ===
const chartData = [
  { label: 'Jan', height: 50 }, { label: 'Feb', height: 60 },
  { label: 'Mar', height: 65 }, { label: 'Apr', height: 75 },
  { label: 'Mei', height: 55 }, { label: 'Jun', height: 65 },
  { label: 'Jul', height: 60 }, { label: 'Agst', height: 68 },
  { label: 'Sep', height: 60 }, { label: 'Oct', height: 50 },
  { label: 'Nov', height: 68 }, { label: 'Des', height: 60 },
]

const rekomendasiDashData = ref([
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
])

const kandangData = ref([
  { jenis: 'SAPI', kesehatan: 'Cukup Baik', jumlah: '20 Ekor' },
  { jenis: 'SAPI', kesehatan: 'Cukup Baik', jumlah: '20 Ekor' },
  { jenis: 'SAPI', kesehatan: 'Cukup Baik', jumlah: '20 Ekor' },
  { jenis: 'SAPI', kesehatan: 'Cukup Baik', jumlah: '20 Ekor' },
  { jenis: 'SAPI', kesehatan: 'Cukup Baik', jumlah: '20 Ekor' },
])

const riwayatKandangData = ref([
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
  { jenis: 'SAPI', jumlah: '20 Ekor', kesehatan: 'Kurang Baik', info: 'Beri Vitamin Pada ternak anda' },
])

const rekomendasiList = ref([
  { kandang: 'Kandang Ngawi', jenis: 'Menir Jagung Halus', berat: '500 gram' },
  { kandang: 'Kandang Ngawi', jenis: 'Menir Jagung Halus', berat: '500 gram' },
  { kandang: 'Kandang Ngawi', jenis: 'Menir Jagung Halus', berat: '500 gram' },
  { kandang: 'Kandang Ngawi', jenis: 'Menir Jagung Halus', berat: '500 gram' },
  { kandang: 'Kandang Ngawi', jenis: 'Menir Jagung Halus', berat: '500 gram' },
])

// Alias agar tabel lain ikut jalan
const ternakData = kandangData
const kualitasData = kandangData
const kondisiData = kandangData
const riwayatKesData = riwayatKandangData
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
.hp-sidebar__top { padding-top: 32px; overflow-y: auto; }
.hp-logo { text-align: center; margin-bottom: 32px; color: #fff; }
.hp-logo__text { font-size: 36px; font-weight: 800; letter-spacing: 2px; margin: 0; line-height: 1; }
.hp-logo__text span { position: relative; }
.hp-logo__text span::after { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 3px; background: #fff; transform: translateY(-50%); }
.hp-logo__sub { font-size: 10px; letter-spacing: 4px; opacity: 0.8; margin-left: 60px; }
.hp-user-info { padding: 0 32px; margin-bottom: 32px; }
.hp-user-info__label { font-size: 10px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.hp-user-info__name { font-size: 20px; font-weight: 700; color: #fff; margin: 0 0 8px 0; }
.hp-user-info__badge { display: inline-block; padding: 4px 12px; background: #113620; color: #fff; font-size: 10px; font-weight: 600; border-radius: 4px; letter-spacing: 1px; }

/* Nav */
.hp-nav { display: flex; flex-direction: column; padding-left: 20px; }
.hp-nav__btn { position: relative; width: 100%; background: transparent; border: none; cursor: pointer; padding: 0; margin-bottom: 4px; text-align: left; }
.hp-nav__btn-inner { display: flex; align-items: center; gap: 16px; padding: 16px 24px; color: #fff; font-size: 15px; font-weight: 600; border-radius: 30px 0 0 30px; transition: all 0.2s; }
.hp-nav__btn svg { width: 22px; height: 22px; display: block; opacity: 0.9; }
.hp-nav__btn--active .hp-nav__btn-inner { background: #F4FBF7; color: #19462D; }
.hp-nav__btn-curve-top, .hp-nav__btn-curve-bottom { position: absolute; right: 0; width: 30px; height: 30px; background: transparent; pointer-events: none; }
.hp-nav__btn-curve-top { top: -30px; }
.hp-nav__btn-curve-bottom { bottom: -30px; }
.hp-nav__btn--active .hp-nav__btn-curve-top { border-bottom-right-radius: 30px; box-shadow: 10px 10px 0 10px #F4FBF7; }
.hp-nav__btn--active .hp-nav__btn-curve-bottom { border-top-right-radius: 30px; box-shadow: 10px -10px 0 10px #F4FBF7; }
.hp-sidebar__bottom { padding: 24px 32px; background: #143D25; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; }
.hp-auth-info__label { font-size: 10px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 6px; margin: 0 0 4px 0; }
.hp-auth-info__name { font-size: 14px; font-weight: 700; color: #fff; margin: 0; }
.hp-logout-btn { background: none; border: none; cursor: pointer; padding: 4px; }
.hp-dot { width: 8px; height: 8px; border-radius: 50%; background: #10B981; display: inline-block; }
.hp-dot--green { background: #22C55E; }
.hp-dot--dark { background: #19462D; }

/* ===== MAIN CONTENT ===== */
.hp-main { min-height: 100vh; padding: 24px; }
@media (min-width: 1024px) { .hp-main { margin-left: 280px; padding: 40px; } }
.hp-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 32px; }
.hp-mobile-menu-btn { background: #fff; border: 1px solid #e5e7eb; padding: 8px; border-radius: 8px; cursor: pointer; margin-right: 16px; }
@media (min-width: 1024px) { .hp-mobile-menu-btn { display: none; } }
.hp-header__title-area { flex: 1; }
.hp-header__title { font-size: 28px; font-weight: 800; color: #19462D; margin: 0 0 4px 0; }
.hp-header__subtitle { font-size: 13px; color: #6b7280; margin: 0; }
.hp-header__status { display: flex; align-items: center; gap: 10px; background: #DCFCE7; color: #166534; padding: 10px 20px; border-radius: 30px; font-size: 12px; line-height: 1.2; text-align: left; }

.hp-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
.hp-card--transparent { background: transparent; box-shadow: none; padding: 0; display: flex; align-items: center; justify-content: center; }
.mb-4 { margin-bottom: 24px; }
.hp-card__header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.hp-card__title { font-size: 18px; font-weight: 700; color: #19462D; margin: 0; display: flex; align-items: center; gap: 10px; }

/* Dashboard Chart & Tables */
.hp-select { padding: 8px 16px; border-radius: 8px; border: 1px solid #e5e7eb; background: #fff; font-family: inherit; font-size: 14px; font-weight: 500; color: #374151; cursor: pointer; outline: none; }
.hp-btn-add { background: #3B82F6; color: #fff; border: none; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
.hp-btn-add:hover { background: #2563EB; }
.hp-chart { display: flex; height: 250px; position: relative; padding-left: 50px; }
.hp-chart__y-axis { position: absolute; left: 0; top: 0; bottom: 30px; display: flex; flex-direction: column; justify-content: space-between; font-size: 11px; color: #9ca3af; text-align: right; width: 40px; }
.hp-chart__bars { flex: 1; display: flex; align-items: flex-end; justify-content: space-between; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; gap: 10px; }
.hp-chart__bar-wrap { flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; }
.hp-chart__bar { width: 60%; background: #19462D; border-radius: 4px 4px 0 0; transition: height 0.5s ease-out; }
.hp-chart__label { font-size: 12px; font-weight: 600; color: #1f2937; margin-top: 12px; position: absolute; bottom: -24px; }

.hp-table-wrap { overflow-x: auto; }
.hp-table { width: 100%; border-collapse: collapse; min-width: 600px; }
.hp-table th { background: #DCFCE7; color: #166534; font-size: 13px; font-weight: 700; text-align: left; padding: 16px; }
.hp-table th:first-child { border-radius: 8px 0 0 8px; }
.hp-table th:last-child { border-radius: 0 8px 8px 0; text-align: center; }
.hp-table td { padding: 16px; border-bottom: 1px solid #f3f4f6; font-size: 14px; color: #1f2937; }
.hp-table td:last-child { text-align: center; }
.text-red { color: #EF4444 !important; font-weight: 600; }

.hp-actions { display: flex; gap: 8px; justify-content: center; }
.hp-btn-icon { width: 32px; height: 32px; border-radius: 6px; border: none; display: inline-flex; align-items: center; justify-content: center; color: #fff; cursor: pointer; transition: opacity 0.2s; }
.hp-btn-icon:hover { opacity: 0.8; }
.hp-btn-icon svg { width: 16px; height: 16px; }
.hp-btn-icon--blue { background: #3FA9F5; }
.hp-btn-icon--yellow { background: #FACC15; }
.hp-btn-icon--red { background: #F87171; }
.hp-btn-icon--dark { background: #19462D; }

/* List Rekomendasi (List View) */
.hp-rekomendasi-list { display: flex; flex-direction: column; gap: 16px; }
.hp-rek-item { display: flex; align-items: center; justify-content: space-between; background: #fff; padding: 16px 24px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
.hp-rek-item__left { display: flex; align-items: center; gap: 16px; flex: 2; }
.hp-rek-item__img { width: 48px; height: 48px; border-radius: 12px; object-fit: cover; }
.hp-rek-item__title { font-size: 16px; font-weight: 700; color: #1f2937; margin: 0 0 4px; }
.hp-rek-item__desc { font-size: 13px; color: #6b7280; margin: 0; }
.hp-rek-item__mid { flex: 1; text-align: left; }
.hp-rek-item__berat { font-size: 13px; font-weight: 700; color: #22C55E; }
.hp-rek-item__right { flex: 0; }

/* Dashed Box (Empty Rekomendasi Pakan) */
.hp-dashed-box { width: 100%; max-width: 800px; background: linear-gradient(180deg, #F0FDF4 0%, #DCFCE7 100%); border: 4px dashed #22C55E; border-radius: 24px; padding: 40px; text-align: center; cursor: pointer; transition: all 0.3s; margin: 0 auto; }
.hp-dashed-box:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(34,197,94,0.2); }
.hp-dashed-box__title { font-size: 24px; font-weight: 800; color: #166534; margin: 0 0 30px; }
.hp-dashed-box__circle { width: 80px; height: 80px; background: radial-gradient(circle, #84cc16 0%, #4d7c0f 100%); border-radius: 50%; margin: 0 auto 30px; display: flex; align-items: center; justify-content: center; color: #fff; position: relative; box-shadow: 0 10px 25px rgba(77,124,15,0.4); }
.hp-sparkle { position: absolute; width: 24px; height: 24px; }
.hp-sparkle--1 { top: 0; left: -10px; }
.hp-sparkle--2 { bottom: -10px; right: -10px; }
.hp-dashed-box__text { font-size: 15px; font-weight: 700; color: #166534; margin: 0; }


/* ==================== POP UP MODALS ==================== */
.hp-modal-overlay { position: fixed; inset: 0; z-index: 100; background: rgba(0,0,0,0.5); backdrop-filter: blur(2px); display: flex; align-items: center; justify-content: center; padding: 16px; }
.hp-modal { background: #fff; border-radius: 20px; width: 100%; max-width: 600px; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.hp-modal--sm { max-width: 450px; }

/* Scrollable Modal untuk Form Rekomendasi Panjang */
.hp-modal--scrollable { 
  max-width: 750px; 
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
.hp-mb-4 { margin-bottom: 16px; }
.hp-modal-box__title { font-size: 14px; font-weight: 800; color: #19462D; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px; }

.hp-grid-2 { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 640px) { .hp-grid-2 { grid-template-columns: 1fr 1fr; } }
.hp-detail-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
@media (min-width: 640px) { .hp-detail-grid { grid-template-columns: repeat(3, 1fr); } }

.hp-form-group label { display: block; font-size: 12px; font-weight: 800; color: #19462D; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
.hp-input { width: 100%; padding: 14px 16px; border: 1px solid #e5e7eb; border-radius: 10px; font-size: 14px; font-family: inherit; color: #1f2937; outline: none; transition: border-color 0.2s; }
.hp-input:focus { border-color: #19462D; }

.hp-input-mock { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; font-size: 14px; font-weight: 600; color: #1f2937; min-height: 48px; display: flex; align-items: center; }
.hp-input-mock--large { min-height: 100px; align-items: flex-start; line-height: 1.5; font-weight: 500; }

.hp-text-center { text-align: center; }
.hp-modal__msg { font-size: 20px; font-weight: 800; color: #19462D; margin: 10px 0 32px; }

.hp-btn-simpan { background: #19462D; color: #fff; border: none; width: 100%; max-width: 200px; padding: 14px; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.2s; margin: 0 auto; display: block; }
.hp-btn-simpan:hover { background: #113620; }
.hp-mt-6 { margin-top: 24px; }

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

.hp-fade-enter-active, .hp-fade-leave-active { transition: opacity 0.3s ease; }
.hp-fade-enter-from, .hp-fade-leave-to { opacity: 0; }
</style>