<<template>
  <section class="page-section active" id="page-supplier">
    <div class="content-card">
      <div class="section-header">
        <h2><span class="bullet">•</span> Supplier</h2>
        <button class="btn-add" @click="openAdd">+</button>
      </div>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Nama Supplier</th>
              <th>Kontak/Telepon</th>
              <th>Komoditas</th>
              <th>Alamat Wilayah</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in supplierData" :key="i">
              <td>{{ item.nama }}</td>
              <td class="fw-semibold">{{ item.kontak }}</td>
              <td><span class="badge badge-blue">{{ item.komoditas }}</span></td>
              <td>{{ item.alamat }}</td>
              <td class="text-center">
                <div class="action-group">
                  <button class="btn-icon btn-yellow" @click="openEdit(item)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button class="btn-icon btn-red" @click="openDelete(item)">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal Add -->
    <div v-if="showAdd" class="modal-overlay" @click.self="showAdd = false">
      <div class="modal-box modal-xl">
        <button class="modal-close" @click="showAdd = false">×</button>
        <h3 class="modal-title">Akun Supplier</h3>
        <p class="modal-subtitle">Tambah Supplier Baru</p>
        <form @submit.prevent="saveAdd">
          <div class="form-grid">
            <div>
              <label class="form-label">Nama Supplier</label>
              <input v-model="form.nama" class="form-input" type="text" placeholder="Contoh: Gudang Jaya" required>
            </div>
            <div>
              <label class="form-label">Alamat Wilayah</label>
              <input v-model="form.alamat" class="form-input" type="text" placeholder="Contoh: Samarinda Seberang" required>
            </div>
            <div>
              <label class="form-label">Kontak</label>
              <input v-model="form.kontak" class="form-input" type="text" placeholder="Contoh: 0895-2345-6789" required>
            </div>
            <div>
              <label class="form-label">Komoditas</label>
              <select v-model="form.komoditas" class="form-input" required>
                <option value="" disabled>Pilih Komoditas</option>
                <option>Sembako</option>
                <option>Sayuran</option>
                <option>Minuman</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn-submit">SIMPAN AKUN</button>
        </form>
      </div>
    </div>

    <!-- Modal Edit -->
    <div v-if="showEdit" class="modal-overlay" @click.self="showEdit = false">
      <div class="modal-box modal-sm text-center">
        <button class="modal-close" @click="showEdit = false">×</button>
        <h3 class="modal-title">Edit</h3>
        <p class="modal-text">Mengedit Informasi</p>
        <button class="btn-submit" @click="showEdit = false">SIMPAN</button>
      </div>
    </div>

    <!-- Modal Delete -->
    <div v-if="showDelete" class="modal-overlay" @click.self="showDelete = false">
      <div class="modal-box modal-sm text-center">
        <button class="modal-close" @click="showDelete = false">×</button>
        <h3 class="modal-title">Hapus</h3>
        <p class="modal-text">Menghapus Informasi ?</p>
        <p class="modal-desc">Supplier <strong>{{ selectedItem.nama }}</strong> akan dihapus.</p>
        <div class="modal-actions">
          <button class="btn-blue-action" @click="confirmDelete">YA</button>
          <button class="btn-red-action" @click="showDelete = false">TIDAK</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const supplierData = ref([
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
])

const showAdd = ref(false)
const showEdit = ref(false)
const showDelete = ref(false)
const selectedItem = ref({})
const form = reactive({ nama: '', kontak: '', komoditas: '', alamat: '' })

function openAdd() {
  form.nama = ''
  form.kontak = ''
  form.komoditas = ''
  form.alamat = ''
  showAdd.value = true
}

function openEdit(item) {
  selectedItem.value = { ...item }
  showEdit.value = true
}

function openDelete(item) {
  selectedItem.value = { ...item }
  showDelete.value = true
}

function confirmDelete() {
  const idx = supplierData.value.findIndex(s => s.nama === selectedItem.value.nama && s.kontak === selectedItem.value.kontak)
  if (idx !== -1) supplierData.value.splice(idx, 1)
  showDelete.value = false
}

function saveAdd() {
  supplierData.value.push({ ...form })
  showAdd.value = false
}
</script>