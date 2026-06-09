<template>
  <div class="hp-view animate-fade">
    <div class="hp-card">
      <div class="hp-card__header">
        <h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Akun Karyawan</h3>
        <button @click="$emit('open-karyawan-modal')" class="hp-btn-add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
      </div>
      <div class="hp-table-wrap">
        <table class="hp-table">
          <thead><tr><th>USERNAME</th><th>NAMA LENGKAP</th><th>KONTAK</th><th>STATUS</th><th>AKSI</th></tr></thead>
          <tbody>
            <tr v-for="(item, i) in karyawanData" :key="i">
              <td><strong>{{ item.username }}</strong></td>
              <td><strong>{{ item.nama }}</strong></td>
              <td><strong>{{ item.kontak }}</strong></td>
              <td><span :class="['hp-badge', item.status === 'Online' ? 'hp-badge--blue' : 'hp-badge--red']">{{ item.status }}</span></td>
              <td>
                <div class="hp-actions">
                  <button @click="$emit('open-edit')" class="hp-btn-icon hp-btn-icon--yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                  <button @click="$emit('open-delete')" class="hp-btn-icon hp-btn-icon--red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ karyawanData: Array })
defineEmits(['open-karyawan-modal', 'open-edit', 'open-delete'])
</script>