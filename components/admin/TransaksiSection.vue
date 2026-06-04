<!-- components/admin/TransaksiSection.vue -->
<template>
  <section class="page-section active" id="page-transaksi">
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Transaksi</h3>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID TRANSAKSI</th>
              <th>TANGGAL</th>
              <th>METODE</th>
              <th>QUANTITY</th>
              <th>TOTAL TRANSAKSI</th>
              <th>JENIS TRANSAKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 4" :key="i">
              <td>TX-334-55</td>
              <td>12-03-2026</td>
              <td><span class="badge-status online">Online Market</span></td>
              <td>4 Pcs</td>
              <td class="text-bold">Rp 24.000,00</td>
              <td><span class="badge-status online">E-Wallet</span></td>
            </tr>
            <tr>
              <td>TX-334-55</td>
              <td>12-03-2026</td>
              <td><span class="badge-status warning">Kasir Offline</span></td>
              <td>4 Pcs</td>
              <td class="text-bold">Rp 24.000,00</td>
              <td><span class="badge-status cash">Cash</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>