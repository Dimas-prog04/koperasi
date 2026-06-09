import { ref, computed } from 'vue'

export const mobileMenuOpen = ref(false)
export const isAkunOpen = ref(true)
export const currentView = ref('dashboard')

// ==== MODAL STATES ====
export const showProductDetailModal = ref(false)
export const detailModalType = ref('monitoring')
export const showKaryawanModal = ref(false)
export const showPenggunaModal = ref(false)
export const showSupplierModal = ref(false)
export const showProdukModal = ref(false)
export const showAktifitasModal = ref(false)
export const showEditModal = ref(false)
export const showDeleteModal = ref(false)

export function openEdit() { showEditModal.value = true }
export function openDelete() { showDeleteModal.value = true }
export function openProductDetail(type) {
  detailModalType.value = type
  showProductDetailModal.value = true
}

export function closeModals() {
  showProductDetailModal.value = false
  showKaryawanModal.value = false
  showPenggunaModal.value = false
  showSupplierModal.value = false
  showProdukModal.value = false
  showAktifitasModal.value = false
  showEditModal.value = false
  showDeleteModal.value = false
}

// ==== NAV MENUS ====
export const menus = [
  { id: 'dashboard', label: 'Dashboard', icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>' },
  { 
    id: 'akun', label: 'Akun', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    sub: [
      { id: 'karyawan', label: 'Karyawan', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
      { id: 'pengguna', label: 'Pengguna', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' }
    ]
  },
  { id: 'supplier', label: 'Supplier', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>' },
  { id: 'produk', label: 'Produk', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
  { id: 'kasir', label: 'Kasir', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>' },
  { id: 'transaksi', label: 'Transaksi', icon: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
  { id: 'kas', label: 'Kas', icon: '<circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>' },
  { id: 'aktifitas', label: 'Aktifitas', icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>' },
  { id: 'custom-ecomerce', label: 'Custom Ecomerce', icon: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' }
]

export const currentMenuLabel = computed(() => {
  let label = 'Dashboard'
  menus.forEach(m => {
    if (m.id === currentView.value) label = m.label
    if (m.sub) {
      m.sub.forEach(s => { if (s.id === currentView.value) label = `Akun ${s.label}` })
    }
  })
  return label
})

export function changeView(id) {
  currentView.value = id
  mobileMenuOpen.value = false
}

// ==== DUMMY DATA ====
export const chartData = [
  { label: 'Jan', height: 50, displayValue: 'Rp 405k' }, { label: 'Feb', height: 60, displayValue: 'Rp 630k' }, { label: 'Mar', height: 68, displayValue: 'Rp 702k' }, { label: 'Apr', height: 75, displayValue: 'Rp 765k' },
  { label: 'Mei', height: 58, displayValue: 'Rp 585k' }, { label: 'Jun', height: 68, displayValue: 'Rp 720k' }, { label: 'Jul', height: 62, displayValue: 'Rp 630k' }, { label: 'Agst', height: 70, displayValue: 'Rp 792k' },
  { label: 'Sep', height: 62, displayValue: 'Rp 648k' }, { label: 'Oct', height: 50, displayValue: 'Rp 450k' }, { label: 'Nov', height: 70, displayValue: 'Rp 738k' }, { label: 'Des', height: 62, displayValue: 'Rp 675k' }
]

export const monitoringData = [
  { kode: 'TX-076-01', nama: 'Mie Sedap Goreng', jenis: 'Makanan', stok: '30 PCS', info: '3 Hari Lagi Expired', isRed: true },
  { kode: 'DD-987-37', nama: 'Pasta Gigi Closeup', jenis: 'Cosmetic', stok: '5 PCS', info: 'Stok Menipis', isRed: true },
  { kode: 'TY-055-45', nama: 'Selai Kacang', jenis: 'Makanan', stok: '7 PCS', info: '7 Hari Lagi Expired', isRed: true },
  { kode: 'KI-547-12', nama: 'Tepung Segitiga', jenis: 'Makanan', stok: '3 PCS', info: 'Stok Menipis', isRed: true },
  { kode: 'CV-346-66', nama: 'Mie Gaga', jenis: 'Makanan', stok: '4 PCS', info: 'Stok Menipis', isRed: true },
]

export const karyawanData = [
  { username: 'admin_konsumen', nama: 'Andi Wijaya Kusuma', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'admin_produsen', nama: 'Siti Aminah', kontak: '0895-2345-6789', status: 'Offline' },
  { username: 'admin_jasa', nama: 'Yayan Ruhyan', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'karyawan_1', nama: 'Henriyanto', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'supplier_1', nama: 'Rudi Masud', kontak: '0895-2345-6789', status: 'Online' }
]

export const penggunaData = [
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Offline' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
  { username: 'Giska678', email: 'giska678@gmail.com', kontak: '0895-2345-6789', status: 'Online' },
]

export const supplierData = [
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
  { nama: 'Gudang Jaya', kontak: '0895-2345-6789', komoditas: 'Sembako', alamat: 'Samarinda Seberang' },
]

export const transaksiData = [
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Online Market', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'E-Wallet' },
  { id: 'TX-334-55', tanggal: '12-03-2026', metode: 'Kasir Offline', qty: '4 Pcs', total: 'Rp 24.000,00', jenis: 'Cash' },
]

export const kasData = [
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Saldo modal awal Usaha', jenis: 'Masuk', nominal: 'Rp 700.000,00', waktu: '12-04-2026' },
  { ket: 'Beli Keperluan', jenis: 'Keluar', nominal: 'Rp 50.000,00', waktu: '13-04-2026' },
]

export const aktifitasData = [
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
  { judul: 'Saldo modal awal Usaha', hash: '7866898DGHBRYUTYHJKN', tanggal: '12-04-2026', waktu: '09.00 AM' },
]