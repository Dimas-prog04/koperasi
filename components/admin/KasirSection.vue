<template>
  <div class="hp-view animate-fade">
    <div class="hp-kasir-grid mb-4">
      <div class="hp-card hp-kasir-cart">
        <div class="hp-card__header"><h3 class="hp-card__title"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19462D" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Kasir</h3></div>
        <p class="hp-text-center" style="font-size: 13px; font-weight: 700; color: #19462D; margin-bottom: 16px;">Keranjang</p>
        <div class="hp-cart-items">
          <div class="hp-cart-item">
            <div><p class="hp-cart-name">Mie Sedap Goreng</p><p class="hp-cart-price">Rp 4.000</p></div>
            <div class="hp-qty-ctrl"><button>-</button><span>2</span><button class="plus">+</button></div>
          </div>
          <div class="hp-cart-item">
            <div><p class="hp-cart-name">Selai Kacang</p><p class="hp-cart-price">Rp 12.000</p></div>
            <div class="hp-qty-ctrl"><button>-</button><span>1</span><button class="plus">+</button></div>
          </div>
          <div class="hp-cart-item">
            <div><p class="hp-cart-name">Pasta Gigi Closeup</p><p class="hp-cart-price">Rp 8.000</p></div>
            <div class="hp-qty-ctrl"><button>-</button><span>1</span><button class="plus">+</button></div>
          </div>
        </div>
        <div class="hp-cart-summary">
          <p>Subtotal Tagihan</p><h2>Rp 24.000,00</h2>
          <button class="hp-btn-full hp-bg-dark-green text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Simpan Transaksi
          </button>
        </div>
      </div>
      <div class="hp-kasir-products">
        <div class="hp-filter-row mb-4">
          <div class="hp-input-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Cari Produk..." class="hp-input" />
          </div>
          <select class="hp-select"><option>Kategori</option></select>
        </div>
        <div class="hp-product-grid hp-product-grid--sm mb-4">
          <div v-for="i in 6" :key="i" class="hp-product-card">
            <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=150&h=100" alt="Product" class="hp-product-img">
            <h4 class="hp-product-name">Mie Sedap Goreng</h4>
            <div class="hp-product-meta"><p>Stok : 67 Pcs</p><p>Expired : 05-04-2027</p></div>
          </div>
        </div>
        <div class="hp-pagination mb-4">
          <span class="hp-page-dot hp-page-dot--active">1</span><span class="hp-page-dot">2</span><span class="hp-page-dot">3</span>
        </div>
        <button class="hp-btn-full hp-bg-dark-green text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Masukan Keranjang
        </button>
      </div>
    </div>
    <div class="hp-card">
      <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Transaksi Kasir</h3></div>
      <div class="hp-table-wrap">
        <table class="hp-table">
          <thead><tr><th>QUANTITY</th><th>TANGGAL</th><th>WAKTU</th><th>TOTAL TRANSAKSI</th></tr></thead>
          <tbody>
            <tr v-for="i in 6" :key="i"><td><strong>4 Pcs</strong></td><td><strong>12-03-2026</strong></td><td><strong>09.00 AM</strong></td><td><strong>Rp 24.000,00</strong></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>