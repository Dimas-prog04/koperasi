<!-- components/admin/KasSection.vue -->
<template>
  <section class="page-section active" id="page-kas">
    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon green"><i class="fas fa-wallet"></i></div>
        <div class="stat-info">
          <span class="stat-label">TOTAL KAS</span>
          <span class="stat-value">Rp 650.000,00</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue"><i class="fas fa-arrow-down"></i></div>
        <div class="stat-info">
          <span class="stat-label">UANG MASUK</span>
          <span class="stat-value">Rp 700.000,00</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red"><i class="fas fa-arrow-up"></i></div>
        <div class="stat-info">
          <span class="stat-label">UANG KELUAR</span>
          <span class="stat-value">Rp 50.000,00</span>
        </div>
      </div>
    </div>

    <!-- Buku Kas -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Buku Kas</h3>
      </div>
      <div class="kas-toolbar">
        <div class="search-box"><input type="text" placeholder="Keterangan Transaksi..."></div>
        <div class="select-box"><select><option>Kategori</option></select><i class="fas fa-chevron-down"></i></div>
        <div class="search-box narrow"><input type="text" placeholder="Nominal..."></div>
        <button class="btn-blue"><i class="fas fa-plus"></i> CATAT KAS</button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>KETERANGAN TRANSAKSI</th>
              <th>JENIS</th>
              <th>NOMINAL</th>
              <th>WAKTU PENCATATAN</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 3" :key="i">
              <td>Saldo modal awal Usaha</td>
              <td><span class="badge-status online">Masuk</span></td>
              <td class="text-bold">Rp 700.000,00</td>
              <td>12-04-2026</td>
            </tr>
            <tr>
              <td>Beli Keperluan</td>
              <td><span class="badge-status offline">Keluar</span></td>
              <td class="text-bold">Rp 50.000,00</td>
              <td>13-04-2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>