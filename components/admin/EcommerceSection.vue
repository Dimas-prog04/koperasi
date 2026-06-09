<template>
  <div class="hp-view animate-fade">
    <div class="hp-card mb-4">
      <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Kategori Produk</h3></div>
      <div class="hp-input-row mb-4">
        <input type="text" placeholder="Masukan Nama Produk..." class="hp-input" style="flex:1;" />
        <input type="text" placeholder="Masukan Nomor..." class="hp-input" style="flex:1;" />
        <button class="hp-btn hp-bg-blue text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> TAMBAH</button>
      </div>
      <div class="hp-table-wrap">
        <table class="hp-table">
          <thead><tr><th>NOMOR</th><th>NAMA PRODUK</th><th>AKSI</th></tr></thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td><strong>01</strong></td>
              <td><strong>Mie Sedap Goreng</strong></td>
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

    <div class="hp-card">
      <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Banner</h3></div>
      <div class="hp-input-row mb-4">
        <input type="text" placeholder="Masukan Nama Produk..." class="hp-input" style="flex:1;" />
        <input type="text" placeholder="Masukan Nomor..." class="hp-input" style="flex:1;" />
        <button class="hp-btn hp-bg-blue text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> TAMBAH</button>
      </div>
      <button class="hp-btn-full hp-bg-dark-green text-white mb-4" style="border-radius: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> Masukan Gambar
      </button>
      <div class="hp-table-wrap">
        <table class="hp-table">
          <thead><tr><th>NOMOR</th><th>NAMA PRODUK</th><th>GAMBAR</th><th>AKSI</th></tr></thead>
          <tbody>
            <tr v-for="i in 6" :key="i">
              <td><strong>01</strong></td>
              <td><strong>Mie Sedap Goreng</strong></td>
              <td><a href="#" style="color: #3B82F6; font-weight: 700; text-decoration: none;">Mie_Sedap.jpg</a></td>
              <td>
                <div class="hp-actions">
                  <button @click="$emit('open-product-detail', 'banner')" class="hp-btn-icon hp-btn-icon--blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
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
defineEmits(['open-edit', 'open-delete', 'open-product-detail'])
</script> 