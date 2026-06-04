<!-- components/admin/ProdukSection.vue -->
<template>
  <section class="page-section active" id="page-produk">
    <div class="content-card">
      <div class="produk-toolbar">
        <div class="search-box"><i class="fas fa-search"></i><input type="text" placeholder="Cari Produk..."></div>
        <div class="select-box"><select><option>Kategori</option></select><i class="fas fa-chevron-down"></i></div>
      </div>
      <div class="produk-layout">
        <div class="produk-grid">
          <div class="produk-item" v-for="i in 6" :key="i">
            <div class="produk-img"><img src="https://placehold.co/120x120/fef3c7/d97706?text=Mie+Sedap" alt="Produk"></div>
            <span class="produk-name">Mie Sedap Goreng</span>
            <span class="produk-meta">Stok : 67 Pcs</span>
            <span class="produk-meta">Expired : 05-04-2027</span>
          </div>
        </div>
        <div class="produk-detail">
          <div class="produk-detail-img"><img src="https://placehold.co/200x200/fef3c7/d97706?text=Mie+Sedap" alt="Detail"></div>
          <h4>Mie Sedap Goreng</h4>
          <div class="detail-rows">
            <div class="detail-row"><span>Kategori</span><span>: Makanan</span></div>
            <div class="detail-row"><span>Harga Beli</span><span>: Rp 2.500</span></div>
            <div class="detail-row"><span>Harga Jual</span><span>: Rp 4.000</span></div>
            <div class="detail-row"><span>Stok</span><span>: 67 Pcs</span></div>
            <div class="detail-row"><span>Expired</span><span>: 05-04-2027</span></div>
            <div class="detail-row"><span>Tanggal Masuk</span><span>: 05-04-2026</span></div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">3</button>
      </div>
      <button class="btn-dark-full"><i class="fas fa-plus-circle"></i> Tambah Produk</button>
    </div>
  </section>
</template>