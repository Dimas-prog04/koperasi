<!-- components/admin/DashboardSection.vue -->
<template>
  <section class="page-section active" id="page-dashboard">
    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon green"><i class="fas fa-wallet"></i></div>
        <div class="stat-info">
          <span class="stat-label">TOTAL OMSET PENJUALAN</span>
          <span class="stat-value">Rp 650.000,00</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon lime"><i class="fas fa-boxes"></i></div>
        <div class="stat-info">
          <span class="stat-label">KOLEKSI PRODUK</span>
          <span class="stat-value">6 Item</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon mint"><i class="fas fa-link"></i></div>
        <div class="stat-info">
          <span class="stat-label">BLOCKCHAIN TRANSACTION</span>
          <span class="stat-value">3 Block</span>
        </div>
      </div>
    </div>

    <!-- Chart Card -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Grafik Omset</h3>
        <div class="dropdown">
          <button class="dropdown-btn">Bulanan <i class="fas fa-chevron-down"></i></button>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-y-axis">
          <span>Rp 900k</span><span>Rp 800k</span><span>Rp 700k</span><span>Rp 600k</span>
          <span>Rp 500k</span><span>Rp 400k</span><span>Rp 300k</span><span>Rp 200k</span><span>Rp 100k</span>
        </div>
        <div class="chart-bars">
          <div class="bar-wrapper"><div class="bar" style="height:45%"></div><span>Jan</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:65%"></div><span>Feb</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:72%"></div><span>Mar</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:85%"></div><span>Apr</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:55%"></div><span>Mei</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:70%"></div><span>Jun</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:62%"></div><span>Jul</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:78%"></div><span>Agst</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:60%"></div><span>Sep</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:50%"></div><span>Okt</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:75%"></div><span>Nov</span></div>
          <div class="bar-wrapper"><div class="bar" style="height:58%"></div><span>Des</span></div>
        </div>
      </div>
    </div>

    <!-- Monitoring Table -->
    <div class="content-card">
      <h3 class="card-title"><span class="bullet"></span> Monitoring Produk AI</h3>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>KODE PRODUK</th><th>NAMA PRODUK</th><th>JENIS PRODUK</th><th>STOK</th><th>INFORMASI</th><th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TX-076-01</td><td>Mie Sedap Goreng</td><td>Makanan</td><td>30 PCS</td>
              <td><span class="text-danger">3 Hari Lagi Expired</span></td>
              <td><button class="action-btn view"><i class="fas fa-eye"></i></button></td>
            </tr>
            <tr>
              <td>DD-987-37</td><td>Pasta Gigi Closeup</td><td>Cosmetic</td><td>5 PCS</td>
              <td><span class="text-danger">Stok Menipis</span></td>
              <td><button class="action-btn view"><i class="fas fa-eye"></i></button></td>
            </tr>
            <tr>
              <td>TY-055-45</td><td>Selai Kacang</td><td>Makanan</td><td>7 PCS</td>
              <td><span class="text-danger">7 Hari Lagi Expired</span></td>
              <td><button class="action-btn view"><i class="fas fa-eye"></i></button></td>
            </tr>
            <tr>
              <td>KI-547-12</td><td>Tepung Segitiga</td><td>Makanan</td><td>3 PCS</td>
              <td><span class="text-danger">Stok Menipis</span></td>
              <td><button class="action-btn view"><i class="fas fa-eye"></i></button></td>
            </tr>
            <tr>
              <td>CV-346-66</td><td>Mie Gaga</td><td>Makanan</td><td>4 PCS</td>
              <td><span class="text-danger">Stok Menipis</span></td>
              <td><button class="action-btn view"><i class="fas fa-eye"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>