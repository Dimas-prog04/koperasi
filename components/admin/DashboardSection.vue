<template>
  <div class="hp-view animate-fade">
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
          <div class="hp-chart__y-label">Rp 900</div><div class="hp-chart__y-label">Rp 800</div><div class="hp-chart__y-label">Rp 700</div>
          <div class="hp-chart__y-label">Rp 600</div><div class="hp-chart__y-label">Rp 500</div><div class="hp-chart__y-label">Rp 400</div>
          <div class="hp-chart__y-label">Rp 300</div><div class="hp-chart__y-label">Rp 200</div><div class="hp-chart__y-label">Rp 100</div>
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
              <td><button @click="$emit('open-product-detail', 'monitoring')" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ chartData: Array, monitoringData: Array })
defineEmits(['open-product-detail'])
</script>