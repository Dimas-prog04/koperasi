<template>
  <div class="hp-view animate-fade">
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
              <td><span :class="['hp-badge', item.status === 'Online' ? 'hp-badge--blue' : 'hp-badge--red']">{{ item.status }}</span></td>
              <td><button @click="$emit('open-pengguna-modal')" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ penggunaData: Array })
defineEmits(['open-pengguna-modal'])
</script>