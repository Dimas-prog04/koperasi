<template>
  <div class="hp-view animate-fade">
    <div class="hp-dashboard-karyawan-grid mb-4">
      <div class="hp-stat-card hp-stat-card--sm" v-for="i in 3" :key="i">
        <div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <div><h4 class="hp-stat-card__value" style="font-size:16px;">Dashboard Karyawan {{ i }}</h4><p class="hp-stat-card__label" style="display:flex; align-items:center; gap:4px;"><span class="hp-dot hp-dot--blue" style="width:6px;height:6px;"></span> STATUS <strong style="color:#1E3A8A">ONLINE</strong></p></div>
      </div>
      <div class="hp-stat-card hp-stat-card--sm">
        <div class="hp-stat-card__icon hp-bg-light-green"><svg viewBox="0 0 24 24" fill="none" stroke="#166534" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <div><h4 class="hp-stat-card__value" style="font-size:16px;">Dashboard Karyawan 4</h4><p class="hp-stat-card__label" style="display:flex; align-items:center; gap:4px;"><span class="hp-dot hp-dot--red" style="width:6px;height:6px;"></span> STATUS <span class="hp-badge hp-badge--red" style="padding:2px 6px; font-size:10px;">Offline</span></p></div>
      </div>
    </div>

    <div class="hp-card">
      <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Aktifitas</h3></div>
      <div class="hp-filter-row mb-4">
        <div class="hp-input-icon" style="flex:1;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Cari Hash..." class="hp-input" />
        </div>
        <select class="hp-select"><option>Kategori</option></select>
      </div>
      <div class="hp-table-wrap">
        <table class="hp-table">
          <thead><tr><th>JUDUL AKTIFITAS</th><th>HASH</th><th>TANGGAL</th><th>WAKTU PENCATATAN</th><th>AKSI</th></tr></thead>
          <tbody>
            <tr v-for="(item, i) in aktifitasData" :key="i">
              <td><strong>{{ item.judul }}</strong></td>
              <td style="font-size: 13px; color: #4b5563;"><em>{{ item.hash }}</em></td>
              <td><strong>{{ item.tanggal }}</strong></td>
              <td><strong>{{ item.waktu }}</strong></td>
              <td><button @click="$emit('open-aktifitas-modal')" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ aktifitasData: Array })
defineEmits(['open-aktifitas-modal'])
</script>