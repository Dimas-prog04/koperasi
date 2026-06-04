// composables/useAdminNavigation.ts
import { ref, onMounted, watch } from 'vue'

export const useAdminNavigation = () => {
  // State Utama Navigasi & Autentikasi
  const adminPage = useState<string>('adminPage', () => 'dashboard')
  
  // 🔥 PERUBAHAN DI SINI: Gunakan useCookie agar sesi login tidak hilang saat refresh
  const userRole = useCookie<string | null>('userRole', { default: () => null })
  
  // State UI (Sidebar, Submenu, Modals)
  const isSidebarOpen = useState<boolean>('isSidebarOpen', () => false)
  const activeSubmenus = useState<Record<string, boolean>>('activeSubmenus', () => ({}))
  const activeModals = useState<Record<string, boolean>>('activeModals', () => ({}))

  // Data Statis untuk Judul Halaman
  const titles: Record<string, { h1: string; p: string }> = {
    dashboard: { h1: 'Dashboard', p: 'Dashboard dari sistem' },
    karyawan: { h1: 'Akun Karyawan', p: 'Dashboard dari sistem' },
    pengguna: { h1: 'Akun Pengguna', p: 'Dashboard dari sistem' },
    supplier: { h1: 'Akun Supplier', p: 'Dashboard dari sistem' },
    produk: { h1: 'Produk', p: 'Dashboard dari sistem' },
    kasir: { h1: 'Kasir', p: 'Dashboard dari sistem' },
    transaksi: { h1: 'Transaksi', p: 'Dashboard dari sistem' },
    kas: { h1: 'Kas', p: 'Dashboard dari sistem' },
    aktifitas: { h1: 'Aktifitas', p: 'Dashboard dari sistem' },
    ecommerce: { h1: 'Custom Ecommerce', p: 'Dashboard dari sistem' }
  }

  // Fungsi Proteksi Akses Login
  const checkAdminAccess = () => {
    onMounted(() => {
      if (!userRole.value) {
        alert('Akses ditolak! Anda harus login terlebih dahulu.')
        navigateTo('/')
      }
    })
  }

  // Fungsi Navigasi Halaman (Menggantikan fungsi navigate lama)
  const changePage = (pageName: string) => {
    adminPage.value = pageName
    isSidebarOpen.value = false // Tutup sidebar otomatis di mobile
  }

  // Fungsi Toggle Submenu Sidebar
  const toggleSubmenu = (menuKey: string) => {
    activeSubmenus.value[menuKey] = !activeSubmenus.value[menuKey]
  }

  // Fungsi Kontrol Modal
  const openModal = (modalId: string) => {
    activeModals.value[modalId] = true
  }
  const closeModal = (modalId: string) => {
    activeModals.value[modalId] = false
  }
  const submitModal = (modalId: string) => {
    activeModals.value[modalId] = false
    alert('Data berhasil disimpan!')
  }

  // Fungsi Toggle Sidebar Utama
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  // Logika Render Chart (Dipindahkan dari DOM manual ke reaktivitas Vue)
  const chartData = [50, 65, 70, 80, 60, 75, 65, 75, 65, 55, 75, 65]
  const chartLabels = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agst','Sep','Okt','Nov','Des']

  const renderChart = () => {
    // Karena kita memakai v-if, tunggu tick DOM selesai sebelum mengakses canvas/elemen chart
    setTimeout(() => {
      const container = document.getElementById('chartBars')
      if (!container) return
      container.innerHTML = ''
      
      chartData.forEach((val, i) => {
        const wrapper = document.createElement('div')
        wrapper.className = 'bar-wrapper'
        const bar = document.createElement('div')
        bar.className = 'bar'
        bar.style.height = '0%'
        const label = document.createElement('div')
        label.className = 'bar-label'
        label.textContent = chartLabels[i]
        
        wrapper.appendChild(bar)
        wrapper.appendChild(label)
        container.appendChild(wrapper)
        
        setTimeout(() => { 
          bar.style.height = (val / 90 * 100) + '%' 
        }, 100 + i * 50)
      })
    }, 150)
  }

  // Otomatis render chart setiap kali user masuk ke halaman dashboard
  watch(adminPage, (newPage) => {
    if (newPage === 'dashboard') {
      renderChart()
    }
  }, { immediate: true })

  return {
    adminPage,
    userRole,
    titles,
    isSidebarOpen,
    activeSubmenus,
    activeModals,
    checkAdminAccess,
    changePage,
    toggleSubmenu,
    openModal,
    closeModal,
    submitModal,
    toggleSidebar,
    renderChart
  }
}