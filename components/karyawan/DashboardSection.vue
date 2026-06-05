<<template>
  <section class="page-section active" id="page-dashboard">
    <!-- Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon bg-green">🛒</div>
        <div class="stat-info">
          <div class="stat-label">Total Omset Penjualan</div>
          <div class="stat-value">Rp 650.000,00</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-green">⊞</div>
        <div class="stat-info">
          <div class="stat-label">Koleksi Produk</div>
          <div class="stat-value">6 Item</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon bg-green">🔗</div>
        <div class="stat-info">
          <div class="stat-label">Blockchain Transaction</div>
          <div class="stat-value">3 Block</div>
        </div>
      </div>
    </div>

    <!-- Grafik -->
    <div class="content-card">
      <div class="section-header">
        <h2><span class="bullet">•</span> Grafik Omset</h2>
        <select class="select-sm"><option>Bulanan</option></select>
      </div>
      <div class="chart-wrapper">
        <div class="chart-y-axis">
          <div class="y-label">Rp 900</div>
          <div class="y-label">Rp 700</div>
          <div class="y-label">Rp 500</div>
          <div class="y-label">Rp 300</div>
          <div class="y-label">Rp 100</div>
        </div>
        <div class="chart-container">
          <div v-for="(b, i) in chartData" :key="i" class="chart-bar-wrapper">
            <div class="chart-bar" :style="{ height: b.value + '%' }"></div>
            <span class="chart-label">{{ b.label }}</span>
            <span class="chart-value">{{ b.displayValue }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Monitoring -->
    <div class="content-card">
      <h2 class="section-title"><span class="bullet">•</span> Monitoring Produk AI</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Kode Produk</th>
              <th>Nama Produk</th>
              <th>Jenis</th>
              <th>Stok</th>
              <th>Informasi</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in monitoringData" :key="i">
              <td class="fw-medium">{{ item.kode }}</td>
              <td>{{ item.nama }}</td>
              <td>{{ item.jenis }}</td>
              <td class="fw-semibold">{{ item.stok }}</td>
              <td><span class="text-danger fw-semibold">{{ item.info }}</span></td>
              <td class="text-center">
                <button class="btn-icon btn-blue" @click="openDetail(item)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-box modal-md">
        <button class="modal-close" @click="showModal = false">×</button>
        <h3 class="modal-title">Monitoring Produk AI</h3>
        <div class="modal-img">🍜</div>
        <div class="modal-product-name">{{ selectedItem.nama }}</div>
        <div class="modal-info-grid">
          <div>
            <label class="modal-label">Kode Produk</label>
            <div class="modal-field">{{ selectedItem.kode }}</div>
          </div>
          <div>
            <label class="modal-label">Jenis Produk</label>
            <div class="modal-field">{{ selectedItem.jenis }}</div>
          </div>
          <div>
            <label class="modal-label">Stok</label>
            <div class="modal-field">{{ selectedItem.stok }}</div>
          </div>
        </div>
        <div class="mt-16">
          <label class="modal-label">Informasi</label>
          <div class="modal-field text-danger">{{ selectedItem.info }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const chartData = [
  { label: 'Jan', value: 45, displayValue: 'Rp 405k' },
  { label: 'Feb', value: 70, displayValue: 'Rp 630k' },
  { label: 'Mar', value: 78, displayValue: 'Rp 702k' },
  { label: 'Apr', value: 85, displayValue: 'Rp 765k' },
  { label: 'Mei', value: 65, displayValue: 'Rp 585k' },
  { label: 'Jun', value: 80, displayValue: 'Rp 720k' },
  { label: 'Jul', value: 70, displayValue: 'Rp 630k' },
  { label: 'Agst', value: 88, displayValue: 'Rp 792k' },
  { label: 'Sep', value: 72, displayValue: 'Rp 648k' },
  { label: 'Okt', value: 50, displayValue: 'Rp 450k' },
  { label: 'Nov', value: 82, displayValue: 'Rp 738k' },
  { label: 'Des', value: 75, displayValue: 'Rp 675k' }
]

const monitoringData = ref([
  { kode: 'TX-076-01', nama: 'Mie Sedap Goreng', jenis: 'Makanan', stok: '30 PCS', info: '3 Hari Lagi Expired' },
  { kode: 'DD-987-37', nama: 'Pasta Gigi Closeup', jenis: 'Cosmetic', stok: '5 PCS', info: 'Stok Menipis' },
  { kode: 'TY-055-45', nama: 'Selai Kacang', jenis: 'Makanan', stok: '7 PCS', info: '7 Hari Lagi Expired' },
  { kode: 'KI-547-12', nama: 'Tepung Segitiga', jenis: 'Makanan', stok: '3 PCS', info: 'Stok Menipis' },
  { kode: 'CV-346-66', nama: 'Mie Gaga', jenis: 'Makanan', stok: '4 PCS', info: 'Stok Menipis' },
])

const showModal = ref(false)
const selectedItem = ref({})

function openDetail(item) {
  selectedItem.value = { ...item }
  showModal.value = true
}
</script>