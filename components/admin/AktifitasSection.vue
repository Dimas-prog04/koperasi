<!-- components/admin/AktifitasSection.vue -->
<template>
  <section class="page-section active" id="page-aktifitas">
    <!-- Employee Cards -->
    <div class="employee-grid">
      <div class="employee-card" v-for="i in 3" :key="i">
        <div class="employee-avatar"><i class="fas fa-user"></i></div>
        <div class="employee-info">
          <h4>Dashboard Karyawan {{ i }}</h4>
          <span class="badge-status online"><span class="status-dot-blue"></span> STATUS ONLINE</span>
        </div>
      </div>
      <div class="employee-card">
        <div class="employee-avatar"><i class="fas fa-user"></i></div>
        <div class="employee-info">
          <h4>Dashboard Karyawan 4</h4>
          <span class="badge-status offline"><span class="status-dot-red"></span> Status Offline</span>
        </div>
      </div>
    </div>

    <!-- Activity Table -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Aktifitas</h3>
      </div>
      <div class="kas-toolbar">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Cari Hash...">
        </div>
        <div class="select-box">
          <select><option>Kategori</option></select>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>JUDUL AKTIFITAS</th>
              <th>HASH</th>
              <th>TANGGAL</th>
              <th>WAKTU PENCATATAN</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>Saldo modal awal Usaha</td>
              <td>78668980GHBRYUTYIHJKN</td>
              <td>12-04-2026</td>
              <td>09.00 AM</td>
              <td><button class="action-btn view"><i class="fas fa-eye"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>