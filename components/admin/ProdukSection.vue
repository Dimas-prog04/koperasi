<template>
  <div class="hp-view animate-fade">
    <div class="hp-card mb-4">
      <div class="hp-filter-row mb-4">
        <div class="hp-input-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Cari Produk..." class="hp-input" />
        </div>
        <select class="hp-select">
          <option value="">Semua</option>
          <option value="login">Login</option>
          <option value="logout">Logout</option>
          <option value="create">Create</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </div>
      
      <div class="hp-product-grid mb-4">
        <div v-for="i in 6" :key="i" class="hp-product-card">
          <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=200&h=150" alt="Product" class="hp-product-img">
          <h4 class="hp-product-name">Mie Sedap Goreng</h4>
          <div class="hp-product-meta">
            <p>Kategori : Makanan</p><p>Harga Beli : Rp 2.500</p><p>Harga Jual : Rp 4.000</p><p>Stok : 67 Pcs</p><p>Expired : 05-04-2027</p>
          </div>
          <p class="hp-product-date">Tanggal Masuk : 05-04-2026</p>
        </div>
      </div>

      <div class="hp-pagination mb-4">
        <span class="hp-page-dot hp-page-dot--active">1</span><span class="hp-page-dot">2</span><span class="hp-page-dot">3</span>
      </div>

      <button @click="$emit('open-produk-modal')" class="hp-btn-full hp-bg-dark-green text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        Tambah Produk
      </button>
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
defineProps({ monitoringData: Array })
defineEmits(['open-produk-modal', 'open-product-detail'])
</script>