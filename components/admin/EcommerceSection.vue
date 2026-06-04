<!-- components/admin/EcommerceSection.vue -->
<template>
  <section class="page-section active" id="page-ecommerce">
    <!-- Kategori Produk -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Kategori Produk</h3>
      </div>
      <div class="kas-toolbar">
        <div class="search-box"><input type="text" placeholder="Masukkan Nama Produk..."></div>
        <div class="search-box"><input type="text" placeholder="Masukkan Nomor..."></div>
        <button class="btn-blue"><i class="fas fa-plus"></i> TAMBAH</button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>NOMOR</th><th>NAMA PRODUK</th><th>AKSI</th></tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td class="text-bold">01</td>
              <td>Mie Sedap Goreng</td>
              <td>
                <button class="action-btn edit"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Banner -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Banner</h3>
      </div>
      <div class="kas-toolbar">
        <div class="search-box"><input type="text" placeholder="Masukkan Nama Produk..."></div>
        <div class="search-box"><input type="text" placeholder="Masukkan Nomor..."></div>
        <button class="btn-blue"><i class="fas fa-plus"></i> TAMBAH</button>
      </div>
      <button class="btn-dark-full"><i class="fas fa-image"></i> Masukan Gambar</button>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>NOMOR</th><th>NAMA PRODUK</th><th>GAMBAR</th><th>AKSI</th></tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td class="text-bold">01</td>
              <td>Mie Sedap Goreng</td>
              <td><a href="#" class="link-blue">Mie_Sedap.jpg</a></td>
              <td>
                <button class="action-btn view"><i class="fas fa-eye"></i></button>
                <button class="action-btn edit"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>