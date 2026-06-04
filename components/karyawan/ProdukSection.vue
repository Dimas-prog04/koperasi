<<template>
  <section class="page-section active" id="page-produk">
    <div class="content-card">
      <div class="section-header">
        <h2><span class="bullet">•</span> Daftar Produk</h2>
        <div class="filter-group">
          <input class="form-input" type="text" placeholder="Cari Produk...">
          <select class="form-input"><option>Kategori</option><option>Makanan</option><option>Cosmetic</option></select>
        </div>
      </div>

      <div class="product-grid">
        <div v-for="(p, i) in produkList" :key="i" class="product-card">
          <div class="product-img">🍜</div>
          <div class="product-name">{{ p.nama }}</div>
          <div class="product-meta">Stok : {{ p.stok }} Pcs</div>
          <div class="product-meta">Expired : {{ p.expired }}</div>
        </div>
      </div>

      <h2 class="section-title"><span class="bullet">•</span> Monitoring Produk AI</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama</th>
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

    <!-- Modal Detail -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-box modal-md">
        <button class="modal-close" @click="showModal = false">×</button>
        <h3 class="modal-title">Monitoring Produk AI</h3>
        <div class="modal-img">🍜</div>
        <div class="modal-product-name">{{ selectedItem.nama }}</div>
        <div class="modal-info-grid">
          <div>
            <label class="modal-label">Kode</label>
            <div class="modal-field">{{ selectedItem.kode }}</div>
          </div>
          <div>
            <label class="modal-label">Jenis</label>
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

const produkList = ref([
  { nama: 'Mie Sedap Goreng', stok: '67', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', stok: '67', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', stok: '67', expired: '05-04-2027' },
  { nama: 'Mie Sedap Goreng', stok: '67', expired: '05-04-2027' },
])

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