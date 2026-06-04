<<template>
  <section class="page-section active" id="page-karyawan">
    <!-- Page Header -->
    <div class="page-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
      <div>
        <h1 style="font-size: 24px; font-weight: 700; color: #1a3c2a; margin: 0; letter-spacing: -0.5px;">Akun Karyawan</h1>
        <p style="font-size: 13px; color: #8a9a8a; margin: 4px 0 0 0;">Dashboard dari sistem</p>
      </div>
      <div class="status-badge" style="background: #e8f4fd; color: #2196f3; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 6px; border: 1px solid #bbdefb;">
        <span style="width: 8px; height: 8px; background: #2196f3; border-radius: 50%; display: inline-block;"></span>
        STATUS ONLINE
      </div>
    </div>

    <!-- Main Content Card -->
    <div class="content-card" style="background: #ffffff; border-radius: 16px; border: 1px solid #e8ece8; padding: 24px; box-shadow: 0 2px 12px rgba(26, 60, 42, 0.06);">
      <!-- Card Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="font-size: 16px; font-weight: 700; color: #1a3c2a; margin: 0; display: flex; align-items: center; gap: 8px;">
          <span style="color: #1a3c2a; font-size: 20px; line-height: 1;">•</span>
          Akun Karyawan
        </h2>
        <button 
          @click="showAddModal = true"
          style="width: 36px; height: 36px; background: #2196f3; border: none; border-radius: 8px; color: white; font-size: 22px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3); transition: all 0.2s;"
          onmouseover="this.style.background='#1976d2'"
          onmouseout="this.style.background='#2196f3'"
        >
          +
        </button>
      </div>

      <!-- Data Table -->
      <div style="overflow-x: auto; border-radius: 12px; border: 1px solid #e8ece8;">
        <table class="data-table" style="width: 100%; border-collapse: separate; border-spacing: 0; font-size: 13px;">
          <thead>
            <tr style="background: #e8f5e9;">
              <th style="padding: 14px 16px; text-align: left; font-weight: 600; color: #1a3c2a; font-size: 11px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #d4edda;">Username</th>
              <th style="padding: 14px 16px; text-align: left; font-weight: 600; color: #1a3c2a; font-size: 11px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #d4edda;">Email</th>
              <th style="padding: 14px 16px; text-align: left; font-weight: 600; color: #1a3c2a; font-size: 11px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #d4edda;">Kontak</th>
              <th style="padding: 14px 16px; text-align: center; font-weight: 600; color: #1a3c2a; font-size: 11px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #d4edda;">Status</th>
              <th style="padding: 14px 16px; text-align: center; font-weight: 600; color: #1a3c2a; font-size: 11px; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #d4edda;">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(item, index) in karyawanData" 
              :key="index"
              style="transition: background 0.15s;"
              onmouseover="this.style.background='#fafcfa'"
              onmouseout="this.style.background='transparent'"
            >
              <td style="padding: 14px 16px; color: #555; border-bottom: 1px solid #f0f2f0; font-weight: 500;">{{ item.username }}</td>
              <td style="padding: 14px 16px; color: #555; border-bottom: 1px solid #f0f2f0;">{{ item.email }}</td>
              <td style="padding: 14px 16px; color: #1a3c2a; border-bottom: 1px solid #f0f2f0; font-weight: 600;">{{ item.kontak }}</td>
              <td style="padding: 14px 16px; border-bottom: 1px solid #f0f2f0; text-align: center;">
                <span 
                  class="badge-status"
                  :style="{
                    display: 'inline-block',
                    padding: '5px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    background: item.status === 'Online' ? '#e3f2fd' : '#ffebee',
                    color: item.status === 'Online' ? '#2196f3' : '#f44336',
                    border: item.status === 'Online' ? '1px solid #bbdefb' : '1px solid #ffcdd2'
                  }"
                >
                  {{ item.status }}
                </span>
              </td>
              <td style="padding: 14px 16px; border-bottom: 1px solid #f0f2f0; text-align: center;">
                <div style="display: flex; gap: 8px; justify-content: center;">
                  <button 
                    class="action-btn view"
                    @click="openView(item)"
                    style="width: 32px; height: 32px; border: none; border-radius: 8px; background: #2196f3; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.15s;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                  <button 
                    class="action-btn edit"
                    @click="openEdit(item)"
                    style="width: 32px; height: 32px; border: none; border-radius: 8px; background: #ffc107; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.15s;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                  <button 
                    class="action-btn delete"
                    @click="openDelete(item)"
                    style="width: 32px; height: 32px; border: none; border-radius: 8px; background: #f44336; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.15s;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- MODAL: Detail / View Karyawan -->
    <div v-if="showViewModal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;" @click.self="showViewModal = false">
      <div style="background: white; border-radius: 16px; padding: 28px 32px; width: 100%; max-width: 480px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); position: relative;">
        <button @click="showViewModal = false" style="position: absolute; top: 20px; left: 20px; background: none; border: none; font-size: 24px; color: #1a3c2a; cursor: pointer; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">×</button>
        <h3 style="font-size: 18px; font-weight: 700; color: #1a3c2a; margin: 0 0 24px 40px;">Akun Karyawan</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div>
            <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Username</label>
            <div style="background: #f5f7f5; padding: 10px 14px; border-radius: 10px; font-size: 13px; color: #555; font-weight: 500;">{{ selectedItem.username }}</div>
          </div>
          <div>
            <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Email</label>
            <div style="background: #f5f7f5; padding: 10px 14px; border-radius: 10px; font-size: 13px; color: #555; font-weight: 500;">{{ selectedItem.email }}</div>
          </div>
          <div>
            <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Kontak</label>
            <div style="background: #f5f7f5; padding: 10px 14px; border-radius: 10px; font-size: 13px; color: #555; font-weight: 500;">{{ selectedItem.kontak }}</div>
          </div>
        </div>
        
        <div>
          <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Status</label>
          <span :style="{
            display: 'inline-block',
            padding: '6px 18px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            background: selectedItem.status === 'Online' ? '#e3f2fd' : '#ffebee',
            color: selectedItem.status === 'Online' ? '#2196f3' : '#f44336'
          }">{{ selectedItem.status }}</span>
        </div>
      </div>
    </div>

    <!-- MODAL: Tambah / Edit Karyawan -->
    <div v-if="showAddModal || showEditModal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;" @click.self="closeFormModal">
      <div style="background: white; border-radius: 16px; padding: 28px 32px; width: 100%; max-width: 520px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); position: relative;">
        <button @click="closeFormModal" style="position: absolute; top: 20px; left: 20px; background: none; border: none; font-size: 24px; color: #1a3c2a; cursor: pointer; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">×</button>
        <h3 style="font-size: 18px; font-weight: 700; color: #1a3c2a; margin: 0 0 6px 40px;">{{ showEditModal ? 'Edit' : 'Tambah Karyawan' }}</h3>
        <p style="font-size: 12px; color: #8a9a8a; margin: 0 0 24px 40px;">{{ showEditModal ? 'Mengedit Informasi' : 'Tambah Karyawan Baru' }}</p>
        
        <form @submit.prevent="handleSave">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div>
              <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Nama Lengkap</label>
              <input v-model="formData.nama" type="text" placeholder="Contoh: Budi Santoso" required style="width: 100%; padding: 10px 14px; border: 1px solid #e0e6e0; border-radius: 10px; font-size: 13px; background: #fafcfa; outline: none; box-sizing: border-box;">
            </div>
            <div>
              <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Username</label>
              <input v-model="formData.username" type="text" placeholder="Contoh: budi123" required style="width: 100%; padding: 10px 14px; border: 1px solid #e0e6e0; border-radius: 10px; font-size: 13px; background: #fafcfa; outline: none; box-sizing: border-box;">
            </div>
            <div>
              <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Email</label>
              <input v-model="formData.email" type="email" placeholder="Contoh: email@gmail.com" required style="width: 100%; padding: 10px 14px; border: 1px solid #e0e6e0; border-radius: 10px; font-size: 13px; background: #fafcfa; outline: none; box-sizing: border-box;">
            </div>
            <div>
              <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Kontak</label>
              <input v-model="formData.kontak" type="text" placeholder="Contoh: 0895-2345-6789" required style="width: 100%; padding: 10px 14px; border: 1px solid #e0e6e0; border-radius: 10px; font-size: 13px; background: #fafcfa; outline: none; box-sizing: border-box;">
            </div>
            <div>
              <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Jabatan</label>
              <select v-model="formData.jabatan" required style="width: 100%; padding: 10px 14px; border: 1px solid #e0e6e0; border-radius: 10px; font-size: 13px; background: #fafcfa; outline: none; box-sizing: border-box; color: #555;">
                <option value="" disabled>Pilih Jabatan</option>
                <option value="Admin">Admin</option>
                <option value="Kasir">Kasir</option>
                <option value="Gudang">Gudang</option>
                <option value="Super Admin">Super Admin</option>
              </select>
            </div>
            <div>
              <label style="display: block; font-size: 11px; font-weight: 600; color: #1a3c2a; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Status</label>
              <select v-model="formData.status" required style="width: 100%; padding: 10px 14px; border: 1px solid #e0e6e0; border-radius: 10px; font-size: 13px; background: #fafcfa; outline: none; box-sizing: border-box; color: #555;">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>
          </div>
          
          <button type="submit" style="width: 100%; padding: 12px; background: #1a3c2a; color: white; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; margin-top: 8px; transition: background 0.2s;" onmouseover="this.style.background='#142e20'" onmouseout="this.style.background='#1a3c2a'">
            {{ showEditModal ? 'SIMPAN' : 'SIMPAN AKUN' }}
          </button>
        </form>
      </div>
    </div>

    <!-- MODAL: Hapus Konfirmasi -->
    <div v-if="showDeleteModal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;" @click.self="showDeleteModal = false">
      <div style="background: white; border-radius: 16px; padding: 28px 32px; width: 100%; max-width: 400px; box-shadow: 0 20px 60px rgba(0,0,0,0.2); position: relative; text-align: center;">
        <button @click="showDeleteModal = false" style="position: absolute; top: 20px; left: 20px; background: none; border: none; font-size: 24px; color: #1a3c2a; cursor: pointer; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">×</button>
        <h3 style="font-size: 18px; font-weight: 700; color: #1a3c2a; margin: 0 0 8px 40px; text-align: left;">Hapus</h3>
        <p style="font-size: 15px; color: #1a3c2a; font-weight: 600; margin: 24px 0 8px 0;">Menghapus Informasi ?</p>
        <p style="font-size: 12px; color: #8a9a8a; margin: 0 0 24px 0;">Data karyawan <strong style="color: #555;">{{ selectedItem.username }}</strong> akan dihapus permanen.</p>
        
        <div style="display: flex; gap: 12px; justify-content: center;">
          <button 
            @click="confirmDelete"
            style="padding: 10px 32px; background: #2196f3; color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s;"
            onmouseover="this.style.background='#1976d2'"
            onmouseout="this.style.background='#2196f3'"
          >
            YA
          </button>
          <button 
            @click="showDeleteModal = false"
            style="padding: 10px 32px; background: #f44336; color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; transition: background 0.2s;"
            onmouseover="this.style.background='#d32f2f'"
            onmouseout="this.style.background='#f44336'"
          >
            TIDAK
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ── Dummy Data Karyawan ──
const karyawanData = ref([
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', jabatan: 'Admin', status: 'Online' },
  { username: 'Budi123', email: 'budi123@gmail.com', kontak: '0895-2345-6788', jabatan: 'Kasir', status: 'Online' },
  { username: 'Andi99', email: 'andi99@gmail.com', kontak: '0895-2345-6787', jabatan: 'Gudang', status: 'Offline' },
  { username: 'Sari09', email: 'sari09@gmail.com', kontak: '0895-2345-6786', jabatan: 'Admin', status: 'Online' },
  { username: 'Rudi77', email: 'rudi77@gmail.com', kontak: '0895-2345-6785', jabatan: 'Kasir', status: 'Online' },
])

// ── Modal States ──
const showViewModal = ref(false)
const showAddModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)

const selectedItem = ref({})
const editIndex = ref(-1)

const formData = reactive({
  nama: '',
  username: '',
  email: '',
  kontak: '',
  jabatan: '',
  status: 'Online'
})

// ── Actions ──
function openView(item) {
  selectedItem.value = { ...item }
  showViewModal.value = true
}

function openEdit(item) {
  selectedItem.value = { ...item }
  editIndex.value = karyawanData.value.findIndex(k => k.username === item.username)
  Object.assign(formData, item)
  showEditModal.value = true
}

function openDelete(item) {
  selectedItem.value = { ...item }
  showDeleteModal.value = true
}

function closeFormModal() {
  showAddModal.value = false
  showEditModal.value = false
  editIndex.value = -1
  resetForm()
}

function resetForm() {
  formData.nama = ''
  formData.username = ''
  formData.email = ''
  formData.kontak = ''
  formData.jabatan = ''
  formData.status = 'Online'
}

function handleSave() {
  if (showEditModal.value && editIndex.value !== -1) {
    karyawanData.value[editIndex.value] = { ...formData }
  } else {
    karyawanData.value.push({ ...formData })
  }
  closeFormModal()
}

function confirmDelete() {
  const idx = karyawanData.value.findIndex(k => k.username === selectedItem.value.username)
  if (idx !== -1) karyawanData.value.splice(idx, 1)
  showDeleteModal.value = false
}
</script>