<<template>
  <section class="page-section active" id="page-transaksi">
    <!-- Tabel Transaksi -->
    <div class="content-card">
      <h2 class="section-title"><span class="bullet">•</span> Transaksi</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID Transaksi</th>
              <th>Tanggal</th>
              <th>Metode</th>
              <th>Quantity</th>
              <th>Total Transaksi</th>
              <th>Jenis Transaksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(t, i) in riwayatTransaksi" :key="i">
              <td class="fw-medium">{{ t.id }}</td>
              <td>{{ t.tanggal }}</td>
              <td><span class="badge" :class="t.metode === 'Online Market' ? 'badge-blue' : 'badge-orange'">{{ t.metode }}</span></td>
              <td>{{ t.qty }}</td>
              <td class="fw-semibold">Rp {{ t.total.toLocaleString() }},00</td>
              <td><span class="badge" :class="t.jenis === 'E-Wallet' ? 'badge-blue' : 'badge-orange'">{{ t.jenis }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tabel Pesanan -->
    <div class="content-card">
      <h2 class="section-title"><span class="bullet">•</span> Pesanan</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Kode Pesanan</th>
              <th>Pengguna</th>
              <th>Total Harga</th>
              <th>Status Pesanan</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in pesananData" :key="i">
              <td class="fw-medium">{{ p.kode }}</td>
              <td>{{ p.pengguna }}</td>
              <td class="fw-semibold">Rp {{ p.total.toLocaleString() }},00</td>
              <td><span class="badge" :class="getStatusClass(p.status)">{{ p.status }}</span></td>
              <td class="text-center">
                <div class="action-group">
                  <button class="btn-icon btn-purple" @click="openPengemasan(p)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button class="btn-icon btn-blue" @click="openInfo(p)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Tabel Pengguna Pesanan -->
    <div class="content-card">
      <h2 class="section-title"><span class="bullet">•</span> Pengguna Pesanan</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Kode Pesanan</th>
              <th>Total Harga</th>
              <th>Status Pesanan</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, i) in penggunaPesananData" :key="i">
              <td class="fw-medium">{{ p.kode }}</td>
              <td class="fw-semibold">Rp {{ p.total.toLocaleString() }},00</td>
              <td><span class="badge" :class="getStatusClass(p.status)">{{ p.status }}</span></td>
              <td class="text-center">
                <div class="action-group">
                  <button class="btn-icon btn-green" @click="openKonfirmasi(p)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </button>
                  <button class="btn-icon btn-blue" @click="openInfo(p)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal Info Pesanan -->
    <div v-if="showInfoModal" class="modal-overlay" @click.self="showInfoModal = false">
      <div class="modal-box modal-lg">
        <button class="modal-close" @click="showInfoModal = false">×</button>
        <h3 class="modal-title">Informasi Pesanan</h3>
        <div class="modal-info-grid">
          <div>
            <label class="modal-label">Kode Pesanan</label>
            <div class="modal-field">{{ selectedItem.kode }}</div>
          </div>
          <div>
            <label class="modal-label">Pengguna</label>
            <div class="modal-field">{{ selectedItem.pengguna || 'Giska678' }}</div>
          </div>
          <div>
            <label class="modal-label">Total Harga</label>
            <div class="modal-field">Rp {{ selectedItem.total?.toLocaleString() }},00</div>
          </div>
        </div>
        <div class="mt-16">
          <label class="modal-label">Status Pesanan</label>
          <span class="badge" :class="getStatusClass(selectedItem.status)">{{ selectedItem.status }}</span>
        </div>
      </div>
    </div>

    <!-- Modal Pengemasan -->
    <div v-if="showPengemasan" class="modal-overlay" @click.self="showPengemasan = false">
      <div class="modal-box modal-sm text-center">
        <button class="modal-close" @click="showPengemasan = false">×</button>
        <h3 class="modal-title">Pengemasan</h3>
        <p class="modal-text">Apakah Anda Yakin Menkemas Pesanan Ini ?</p>
        <div class="modal-actions">
          <button class="btn-blue-action" @click="showPengemasan = false">YA</button>
          <button class="btn-red-action" @click="showPengemasan = false">TIDAK</button>
        </div>
      </div>
    </div>

    <!-- Modal Konfirmasi Sampai -->
    <div v-if="showSampai" class="modal-overlay" @click.self="showSampai = false">
      <div class="modal-box modal-sm text-center">
        <button class="modal-close" @click="showSampai = false">×</button>
        <h3 class="modal-title">Pengemasan</h3>
        <p class="modal-text">Apakah Pesanan Sudah Benar Benar Sampai Tujuan ?</p>
        <div class="modal-actions">
          <button class="btn-blue-action" @click="showSampai = false">YA</button>
          <button class="btn-red-action" @click="showSampai = false">TIDAK</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const riwayatTransaksi = ref([
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 24000, jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 24000, jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 24000, jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 24000, jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Kasir Offline', qty: '4 Pcs', total: 24000, jenis: 'Cash' },
])

const pesananData = ref([
  { kode: 'DD-999-DA', pengguna: 'Giska678', total: 24000, status: 'Diterima' },
  { kode: 'DD-999-DA', pengguna: 'Giska678', total: 24000, status: 'Proses' },
  { kode: 'DD-999-DA', pengguna: 'Giska678', total: 24000, status: 'Dibuat' },
])

const penggunaPesananData = ref([
  { kode: 'DD-999-DA', total: 24000, status: 'Diterima' },
  { kode: 'DD-999-DA', total: 24000, status: 'Proses' },
  { kode: 'DD-999-DA', total: 24000, status: 'Dibuat' },
])

const showInfoModal = ref(false)
const showPengemasan = ref(false)
const showSampai = ref(false)
const selectedItem = ref({})

function getStatusClass(status) {
  if (status === 'Diterima') return 'badge-blue'
  if (status === 'Proses') return 'badge-orange'
  return 'badge-green'
}

function openInfo(item) {
  selectedItem.value = { ...item }
  showInfoModal.value = true
}

function openPengemasan(item) {
  selectedItem.value = { ...item }
  showPengemasan.value = true
}

function openKonfirmasi(item) {
  selectedItem.value = { ...item }
  showSampai.value = true
}
</script>