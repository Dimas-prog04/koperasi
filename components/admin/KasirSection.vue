<!-- components/admin/KasirSection.vue -->
<template>
  <section class="page-section active" id="page-kasir">
    <div class="content-card">
      <div class="kasir-layout">
        <!-- Cart -->
        <div class="kasir-cart">
          <div class="cart-header">
            <i class="fas fa-cash-register"></i>
            <span>Kasir</span>
          </div>
          <div class="cart-subtitle">Keranjang</div>
          <div class="cart-items">
            <div class="cart-item">
              <span class="cart-name">Mie Sedap Goreng</span>
              <span class="cart-price">Rp 4.000</span>
              <div class="cart-qty">
                <button class="qty-btn">-</button>
                <span>2</span>
                <button class="qty-btn">+</button>
              </div>
            </div>
            <div class="cart-item">
              <span class="cart-name">Selai Kacang</span>
              <span class="cart-price">Rp 12.000</span>
              <div class="cart-qty">
                <button class="qty-btn">-</button>
                <span>1</span>
                <button class="qty-btn">+</button>
              </div>
            </div>
            <div class="cart-item">
              <span class="cart-name">Pasta Gigi Closeup</span>
              <span class="cart-price">Rp 8.000</span>
              <div class="cart-qty">
                <button class="qty-btn">-</button>
                <span>1</span>
                <button class="qty-btn">+</button>
              </div>
            </div>
          </div>
          <div class="cart-total">
            <span class="total-label">Subtotal Tagihan</span>
            <span class="total-value">Rp 24.000,00</span>
          </div>
          <button class="btn-dark-full"><i class="fas fa-file-invoice"></i> Simpan Transaksi</button>
        </div>

        <!-- Product Selector -->
        <div class="kasir-products">
          <div class="produk-toolbar">
            <div class="search-box">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Cari Produk...">
            </div>
            <div class="select-box">
              <select><option>Kategori</option></select>
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div class="produk-grid small">
            <div class="produk-item" v-for="i in 6" :key="i">
              <div class="produk-img"><img src="https://placehold.co/100x100/fef3c7/d97706?text=Mie" alt=""></div>
              <span class="produk-name">Mie Sedap Goreng</span>
              <span class="produk-meta">Stok : 67 Pcs</span>
              <span class="produk-meta">Expired : 05-04-2027</span>
            </div>
          </div>
          <div class="pagination">
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
          </div>
          <button class="btn-dark-full"><i class="fas fa-cart-plus"></i> Masukkan Keranjang</button>
        </div>
      </div>
    </div>

    <!-- Transaksi Kasir Table -->
    <div class="content-card">
      <h3 class="card-title"><span class="bullet"></span> Transaksi Kasir</h3>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>QUANTITY</th>
              <th>TANGGAL</th>
              <th>WAKTU</th>
              <th>TOTAL TRANSAKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 6" :key="i">
              <td>4 Pcs</td>
              <td>12-03-2026</td>
              <td>09.00 AM</td>
              <td class="text-bold">Rp 24.000,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>