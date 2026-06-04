<!-- components/admin/KaryawanSection.vue -->
<template>
  <section class="page-section active" id="page-karyawan">
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Akun Karyawan</h3>
        <button class="btn-add"><i class="fas fa-plus"></i></button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>USERNAME</th><th>NAMA LENGKAP</th><th>KONTAK</th><th>STATUS</th><th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>admin_konsumen</td><td>Andi Wijaya Kusuma</td><td class="text-bold">0895-2345-6789</td>
              <td><span class="badge-status online">Online</span></td>
              <td>
                <button class="action-btn edit"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>admin_produsen</td><td>Siti Aminah</td><td class="text-bold">0895-2345-6789</td>
              <td><span class="badge-status offline">Offline</span></td>
              <td>
                <button class="action-btn edit"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>admin_jasa</td><td>Yayan Ruhyan</td><td class="text-bold">0895-2345-6789</td>
              <td><span class="badge-status online">Online</span></td>
              <td>
                <button class="action-btn edit"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>karyawan_1</td><td>Henriyanto</td><td class="text-bold">0895-2345-6789</td>
              <td><span class="badge-status online">Online</span></td>
              <td>
                <button class="action-btn edit"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <td>supplier_1</td><td>Rudi Masud</td><td class="text-bold">0895-2345-6789</td>
              <td><span class="badge-status online">Online</span></td>
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