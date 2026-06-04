<<template>
  <section class="page-section active" id="page-kas">
    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon bg-green">💰</div>
        <div class="stat-info">
          <div class="stat-label">Total Kas</div>
          <div class="stat-value">Rp 650.000,00</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-blue">📥</div>
        <div class="stat-info">
          <div class="stat-label">Uang Masuk</div>
          <div class="stat-value">Rp 700.000,00</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-red">📤</div>
        <div class="stat-info">
          <div class="stat-label">Uang Keluar</div>
          <div class="stat-value">Rp 50.000,00</div>
        </div>
      </div>
    </div>

    <!-- Buku Kas -->
    <div class="content-card">
      <h2 class="section-title"><span class="bullet">•</span> Buku Kas</h2>
      <div class="filter-bar">
        <input class="form-input flex-1" type="text" placeholder="Keterangan Transaksi...">
        <select class="form-input"><option>Kategori</option><option>Masuk</option><option>Keluar</option></select>
        <input class="form-input w-140" type="text" placeholder="Nominal...">
        <button class="btn-blue">
          <span>+</span> CATAT KAS
        </button>
      </div>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Keterangan Transaksi</th>
              <th>Jenis</th>
              <th>Nominal</th>
              <th>Waktu Pencatatan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(k, i) in kasData" :key="i">
              <td>{{ k.keterangan }}</td>
              <td><span class="badge" :class="k.jenis === 'Masuk' ? 'badge-blue' : 'badge-red'">{{ k.jenis }}</span></td>
              <td class="fw-semibold">Rp {{ k.nominal.toLocaleString() }},00</td>
              <td>{{ k.waktu }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const kasData = ref([
  { keterangan: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 700000, waktu: '12-04-2026' },
  { keterangan: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 700000, waktu: '12-04-2026' },
  { keterangan: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 700000, waktu: '12-04-2026' },
  { keterangan: 'Beli Keperluan', jenis: 'Keluar', nominal: 50000, waktu: '13-04-2026' },
])
</script>