<<template>
  <section class="page-section active" id="page-pengguna">
    <div class="content-card">
      <h2 class="section-title"><span class="bullet">•</span> Akun Pengguna</h2>
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Kontak</th>
              <th class="text-center">Status</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in penggunaData" :key="i">
              <td class="fw-medium">{{ item.username }}</td>
              <td>{{ item.email }}</td>
              <td class="fw-semibold">{{ item.kontak }}</td>
              <td class="text-center">
                <span class="badge" :class="item.status === 'Online' ? 'badge-blue' : 'badge-red'">
                  {{ item.status }}
                </span>
              </td>
              <td class="text-center">
                <button class="btn-icon btn-blue" @click="openView(item)">
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

    <!-- Modal View -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-box modal-lg">
        <button class="modal-close" @click="showModal = false">×</button>
        <h3 class="modal-title">Akun Pengguna</h3>
        <div class="modal-info-grid">
          <div>
            <label class="modal-label">Username</label>
            <div class="modal-field">{{ selectedItem.username }}</div>
          </div>
          <div>
            <label class="modal-label">Email</label>
            <div class="modal-field">{{ selectedItem.email }}</div>
          </div>
          <div>
            <label class="modal-label">Kontak</label>
            <div class="modal-field">{{ selectedItem.kontak }}</div>
          </div>
        </div>
        <div class="mt-16">
          <label class="modal-label">Status</label>
          <span class="badge" :class="selectedItem.status === 'Online' ? 'badge-blue' : 'badge-red'">
            {{ selectedItem.status }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const penggunaData = ref([
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'Andi99', email: 'andi99@gmail.com', kontak: '0895-2345-6788', status: 'Online' },
  { username: 'Budi123', email: 'budi123@gmail.com', kontak: '0895-2345-6787', status: 'Offline' },
  { username: 'Sari09', email: 'sari09@gmail.com', kontak: '0895-2345-6786', status: 'Online' },
  { username: 'Rudi77', email: 'rudi77@gmail.com', kontak: '0895-2345-6785', status: 'Online' },
])

const showModal = ref(false)
const selectedItem = ref({})

function openView(item) {
  selectedItem.value = { ...item }
  showModal.value = true
}
</script>