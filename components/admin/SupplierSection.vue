<!-- components/admin/SupplierSection.vue -->
<template>
  <section class="page-section active" id="page-supplier">
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Supplier</h3>
        <button class="btn-add"><i class="fas fa-plus"></i></button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>NAMA SUPPLIER</th><th>KONTAK/TELEPON</th><th>KOMODITAS</th><th>ALAMAT WILAYAH</th><th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>Gudang Jaya</td><td class="text-bold">0895-2345-6789</td>
              <td><span class="badge-komoditas">Sembako</span></td><td>Samarinda Seberang</td>
              <td>
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