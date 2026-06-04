<<template>
  <section class="page-section active" id="page-kasir">
    <div class="kasir-layout">
      <!-- Keranjang -->
      <div class="content-card">
        <h2 class="section-title"><span class="bullet">🛒</span> Kasir</h2>
        <div class="cart-label">Keranjang</div>
        <div v-for="(item, i) in keranjang" :key="i" class="cart-item">
          <div>
            <div class="cart-name">{{ item.nama }}</div>
            <div class="cart-price">Rp {{ item.harga.toLocaleString() }}</div>
          </div>
          <div class="qty-control">
            <button class="qty-btn qty-minus" @click="item.qty > 1 ? item.qty-- : null">−</button>
            <span class="qty-value">{{ item.qty }}</span>
            <button class="qty-btn qty-plus" @click="item.qty++">+</button>
          </div>
        </div>
        <div class="cart-total">
          <div class="total-label">Subtotal Tagihan</div>
          <div class="total-value">Rp {{ subtotal.toLocaleString() }},00</div>
        </div>
        <button class="btn-full btn-dark">
          <span>💾</span> Simpan Transaksi
        </button>
      </div>

      <!-- Produk Grid -->
      <div>
        <div class="filter-group">
          <input class="form-input flex-1" type="text" placeholder="Cari Produk...">
          <select class="form-input"><option>Kategori</option></select>
        </div>
        <div class="product-grid-sm">
          <div v-for="(p, i) in produkKasir" :key="i" class="product-card-sm">
            <div class="product-img-sm">🍜</div>
            <div class="product-name-sm">{{ p.nama }}</div>
            <div class="product-meta">Expired : {{ p.expired }}</div>
          </div>
        </div>
        <button class="btn-full btn-dark">
          <span>🛒</span> Masukkan Keranjang
        </button>
      </div>
    </div>

    <!-- Riwayat Transaksi Kasir -->
    <div class="content-card mt-24">
      <h2 class="section-title"><span class="bullet">•</span> Transaksi Kasir</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Total Transaksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(t, i) in transaksiKasir" :key="i">
              <td>{{ t.qty }}</td>
              <td>{{ t.tanggal }}</td>
              <td>{{ t.waktu }}</td>
              <td class="fw-semibold">Rp {{ t.total.toLocaleString() }},00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'

const keranjang = reactive([
  { nama: 'Mie Sedap Goreng', harga: 4000, qty: 2 },
  { nama: 'Selai Kacang', harga: 12000, qty: 1 },
  { nama: 'Pasta Gigi Closeup', harga: 8000, qty: 1 },
])

const subtotal = computed(() => keranjang.reduce((sum, item) => sum + (item.harga * item.qty), 0))

const produkKasir = ref([
  { nama: 'Mie Sedap Goreng', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', expired: '05-04-2027' },
])

const transaksiKasir = ref([
  { qty: '4 Pcs', tanggal: '12-03-2026', waktu: '09.00 AM', total: 24000 },
  { qty: '4 Pcs', tanggal: '12-03-2026', waktu: '09.00 AM', total: 24000 },
  { qty: '4 Pcs', tanggal: '12-03-2026', waktu: '09.00 AM', total: 24000 },
  { qty: '4 Pcs', tanggal: '12-03-2026', waktu: '09.00 AM', total: 24000 },
  { qty: '4 Pcs', tanggal: '12-03-2026', waktu: '09.00 AM', total: 24000 },
  { qty: '4 Pcs', tanggal: '12-03-2026', waktu: '09.00 AM', total: 24000 },
])
</script>