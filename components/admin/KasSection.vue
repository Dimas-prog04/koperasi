<template>
  <div class="hp-view animate-fade">
    <div class="hp-stats-row mb-4">
      <div class="hp-stat-card"><div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9h20"/></svg></div><div><p class="hp-stat-card__label">TOTAL KAS</p><h3 class="hp-stat-card__value">Rp 650.000,00</h3></div></div>
      <div class="hp-stat-card"><div class="hp-stat-card__icon hp-bg-light-blue"><svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg></div><div><p class="hp-stat-card__label">UANG MASUK</p><h3 class="hp-stat-card__value">Rp 700.000,00</h3></div></div>
      <div class="hp-stat-card"><div class="hp-stat-card__icon hp-bg-light-red"><svg viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2"><path d="M9 21H3v-6"/><path d="M15 3h6v6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg></div><div><p class="hp-stat-card__label">UANG KELUAR</p><h3 class="hp-stat-card__value">Rp 50.000,00</h3></div></div>
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
</template>
<script setup>
defineProps({ kasData: Array })
</script>