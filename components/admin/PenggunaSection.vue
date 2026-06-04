<!-- components/admin/PenggunaSection.vue -->
<template>
  <section class="page-section active" id="page-pengguna">
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Akun Pengguna</h3>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>USERNAME</th><th>EMAIL</th><th>KONTAK</th><th>STATUS</th><th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>Giska678</td><td>giska678@gmail.com</td><td class="text-bold">0895-2345-6789</td>
              <td><span class="badge-status" :class="i === 3 ? 'offline' : 'online'">{{ i === 3 ? 'Offline' : 'Online' }}</span></td>
              <td><button class="action-btn view"><i class="fas fa-eye"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>