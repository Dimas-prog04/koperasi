<<template>
  <div class="user-app">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="logo-box">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>LOGO</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-item active" @click="activeView = 'home'">
          <span class="icon">⊞</span>
          <span>Beranda</span>
        </div>
        <div class="nav-item" @click="kategoriOpen = !kategoriOpen">
          <span class="icon">▼</span>
          <span>Kategori</span>
        </div>
        <div v-if="kategoriOpen" class="sub-nav">
          <div class="sub-item" v-for="cat in categories" :key="cat.name">
            <span>{{ cat.icon }}</span>
            <span>{{ cat.name }}</span>
          </div>
        </div>
        <div class="nav-item" @click="activeView = 'home'">
          <span class="icon">📦</span>
          <span>Produk</span>
        </div>
        <div class="nav-item" @click="activeView = 'checkout'">
          <span class="icon">🛒</span>
          <span>Pesanan</span>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="user-profile">
          <div class="avatar">👤</div>
          <span class="user-name">Giska678</span>
          <button class="btn-logout">→</button>
        </div>
      </div>
    </aside>

    <!-- MAIN -->
    <main class="main-content" v-if="activeView === 'home'">
      <div class="search-bar">
        <div class="search-input">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Cari Pakan Ternak" v-model="searchQuery">
        </div>
        <select class="select-category">
          <option>Kategori</option>
          <option>Pakan Pokok</option>
          <option>Pakan Penguat</option>
          <option>Pakan Suplemen</option>
        </select>
      </div>

      <div class="banner">
        <div class="banner-content">
          <div class="banner-icon">🌿</div>
          <div class="banner-text">
            <div>Pakan</div>
            <div class="bold">Pokok</div>
          </div>
        </div>
        <div class="banner-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>

      <div class="category-cards">
        <div class="cat-card" v-for="cat in categoryCards" :key="cat.name">
          <div class="cat-icon">{{ cat.icon }}</div>
          <div class="cat-name">{{ cat.name }}</div>
          <div class="cat-label">Produk</div>
        </div>
      </div>

      <!-- Grid 2 kolom tetap -->
      <div class="products-grid">
        <div class="product-card" v-for="product in filteredProducts" :key="product.id">
          <div class="product-badge">👍</div>
          <div class="product-img">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-info">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-weight">{{ product.weight }}</div>
            <div class="product-tag">{{ product.tag }}</div>
            <div class="product-price">Rp {{ product.price.toLocaleString() }},00</div>
            <button class="btn-add-cart" @click="addToCart(product)">
              <span>🛒</span> Masukkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- CHECKOUT -->
    <main class="main-content checkout-view" v-if="activeView === 'checkout'">
      <button class="btn-back" @click="activeView = 'home'">← Kembali</button>
      <div class="checkout-layout">
        <div class="cart-list">
          <h3>Keranjang</h3>
          <div class="cart-item" v-for="item in keranjang" :key="item.id">
            <img :src="item.image" class="cart-thumb">
            <div class="cart-detail">
              <div class="cart-name">{{ item.name }}</div>
              <div class="cart-weight">{{ item.weight }}</div>
              <div class="cart-price">Rp {{ item.price.toLocaleString() }}</div>
            </div>
            <div class="cart-qty">x{{ item.qty }}</div>
          </div>
        </div>
        <div class="checkout-summary">
          <h3>Ringkasan</h3>
          <div class="summary-card">
            <div class="summary-row">
              <span>Opsi Pengiriman</span>
              <span class="link" @click="openLocation">Pilih Lokasi ▶</span>
            </div>
            <div class="summary-row">
              <span>Metode Pembayaran</span>
              <span class="link" @click="showPaymentModal = true">Pilih ▶</span>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-row">
              <span>Total Semua</span>
              <span>Rp {{ totalHarga.toLocaleString() }}</span>
            </div>
            <div class="summary-row">
              <span>Diskon</span>
              <span>12%</span>
            </div>
            <div class="summary-row total">
              <span>Total</span>
              <span>Rp {{ (totalHarga * 0.88).toLocaleString() }}</span>
            </div>
            <button class="btn-checkout" @click="showPaymentModal = true">
              <span>🛒</span> Checkout
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- CART PANEL -->
    <aside class="cart-panel" v-if="activeView === 'home'">
      <div class="cart-header">
        <span class="cart-icon">🛒</span>
        <h3>Keranjang</h3>
      </div>
      <div class="cart-badge">Isi Keranjang</div>
      <div class="cart-items">
        <div class="cart-row" v-for="item in keranjang" :key="item.id">
          <img :src="item.image" class="cart-row-img">
          <div class="cart-row-info">
            <div class="cart-row-name">{{ item.name }}</div>
            <div class="cart-row-weight">{{ item.weight }}</div>
            <div class="cart-row-meta">
              <span class="price">Rp {{ item.price.toLocaleString() }} x {{ item.qty }}</span>
              <span class="total">Rp {{ (item.price * item.qty).toLocaleString() }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-footer">
        <div class="cart-total-row">
          <span>Total Semua</span>
          <span>Rp {{ totalHarga.toLocaleString() }}</span>
        </div>
        <div class="cart-total-row">
          <span>Diskon</span>
          <span>12%</span>
        </div>
        <div class="cart-total-row grand">
          <span>Total</span>
          <span>Rp {{ (totalHarga * 0.88).toLocaleString() }}</span>
        </div>
        <button class="btn-checkout" @click="activeView = 'checkout'">
          <span>☑️</span> Checkout
        </button>
      </div>
    </aside>

    <!-- MODALS -->
    <div class="modal-overlay" v-if="showLocationModal" @click.self="showLocationModal = false">
      <div class="modal-box">
        <button class="modal-close" @click="showLocationModal = false">×</button>
        <div v-if="locationStep === 1" class="location-step">
          <h3>Pilih Lokasi</h3>
          <button class="btn-location" @click="locationStep = 2">
            <span>📍</span> Cek Lokasi Sekarang
          </button>
          <button class="btn-location" @click="locationStep = 3">
            <span>📍</span> Mengambil Lokasi Anda
          </button>
        </div>
        <div v-if="locationStep === 2" class="location-step">
          <h3>Pilih Lokasi</h3>
          <div class="map-box">
            <div class="map-placeholder">
              <div class="map-pin">📍</div>
            </div>
          </div>
          <button class="btn-submit" @click="showLocationModal = false">Simpan Lokasi</button>
        </div>
        <div v-if="locationStep === 3" class="location-step text-center">
          <div class="spinner">⏳</div>
          <p>Mengambil Lokasi Anda</p>
        </div>
      </div>
    </div>

    <div class="modal-overlay" v-if="showPaymentModal" @click.self="showPaymentModal = false">
      <div class="modal-box payment-box">
        <button class="modal-close" @click="showPaymentModal = false">×</button>
        <h3>Pembayaran</h3>
        <div class="payment-methods">
          <div class="payment-row" v-for="method in paymentMethods" :key="method.name" @click="selectedPayment = method.name">
            <div class="payment-radio" :class="{ active: selectedPayment === method.name }"></div>
            <img :src="method.logo" class="payment-logo">
            <span class="payment-name">{{ method.name }}</span>
          </div>
        </div>
        <button class="btn-submit" @click="processPayment">Bayar Sekarang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeView = ref('home')
const searchQuery = ref('')
const kategoriOpen = ref(false)
const showLocationModal = ref(false)
const locationStep = ref(1)
const showPaymentModal = ref(false)
const selectedPayment = ref('')

const categories = ref([
  { name: 'Pakan Pokok', icon: '🌿' },
  { name: 'Pakan Penguat', icon: '🌱' },
  { name: 'Pakan Suplemen', icon: '💊' },
])

const categoryCards = ref([
  { name: 'Pakan Pokok', icon: '🌿' },
  { name: 'Pakan Penguat', icon: '🌱' },
  { name: 'Pakan Suplemen', icon: '💊' },
])

const products = ref([
  { id: 1, name: 'Menir Jagung Super Halus', weight: '500 Gram', tag: 'Pakan Pokok', price: 23000, image: 'https://placehold.co/400x250/e8f5e9/1a3c2a?text=Jagung' },
  { id: 2, name: 'Menir Jagung Super Halus', weight: '500 Gram', tag: 'Pakan Pokok', price: 23000, image: 'https://placehold.co/400x250/e8f5e9/1a3c2a?text=Jagung' },
  { id: 3, name: 'Menir Jagung Super Halus', weight: '500 Gram', tag: 'Pakan Pokok', price: 23000, image: 'https://placehold.co/400x250/e8f5e9/1a3c2a?text=Jagung' },
  { id: 4, name: 'Menir Jagung Super Halus', weight: '500 Gram', tag: 'Pakan Pokok', price: 23000, image: 'https://placehold.co/400x250/e8f5e9/1a3c2a?text=Jagung' },
  { id: 5, name: 'Menir Jagung Super Halus', weight: '500 Gram', tag: 'Pakan Pokok', price: 23000, image: 'https://placehold.co/400x250/e8f5e9/1a3c2a?text=Jagung' },
  { id: 6, name: 'Menir Jagung Super Halus', weight: '500 Gram', tag: 'Pakan Pokok', price: 23000, image: 'https://placehold.co/400x250/e8f5e9/1a3c2a?text=Jagung' },
])

const keranjang = ref([
  { id: 1, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J' },
  { id: 2, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J' },
  { id: 3, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J' },
  { id: 4, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J' },
  { id: 5, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J' },
  { id: 6, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J' },
  { id: 7, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J' },
])

const paymentMethods = ref([
  { name: 'QRIS', logo: 'https://placehold.co/60x30/e8f5e9/1a3c2a?text=QRIS' },
  { name: 'BCA', logo: 'https://placehold.co/60x30/e8f5e9/1a3c2a?text=BCA' },
  { name: 'BRI', logo: 'https://placehold.co/60x30/e8f5e9/1a3c2a?text=BRI' },
  { name: 'BNI', logo: 'https://placehold.co/60x30/e8f5e9/1a3c2a?text=BNI' },
  { name: 'Mandiri', logo: 'https://placehold.co/60x30/e8f5e9/1a3c2a?text=Mandiri' },
  { name: 'Gopay', logo: 'https://placehold.co/60x30/e8f5e9/1a3c2a?text=Gopay' },
])

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value
  return products.value.filter(p => p.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const totalHarga = computed(() => {
  return keranjang.value.reduce((sum, item) => sum + (item.price * item.qty), 0)
})

function addToCart(product) {
  const existing = keranjang.value.find(item => item.id === product.id)
  if (existing) {
    existing.qty++
  } else {
    keranjang.value.push({
      ...product,
      qty: 1,
      image: 'https://placehold.co/60x60/e8f5e9/1a3c2a?text=J'
    })
  }
}

function openLocation() {
  locationStep.value = 1
  showLocationModal.value = true
}

function processPayment() {
  if (!selectedPayment.value) {
    alert('Silakan pilih metode pembayaran!')
    return
  }
  alert(`Pembayaran berhasil via ${selectedPayment.value}!`)
  showPaymentModal.value = false
  activeView.value = 'home'
  keranjang.value = []
}
</script>

<style scoped>
/* ===== RESET ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== LAYOUT ===== */
.user-app {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f0f7f0;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  overflow: hidden;
}

/* ===== SIDEBAR ===== */
.sidebar {
  width: 220px;
  flex-shrink: 0;
  background: #1a3c2a;
  display: flex;
  flex-direction: column;
  color: white;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
}

.sidebar-nav {
  flex: 1;
  padding: 16px 12px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  transition: all 0.2s;
}

.nav-item:hover {
  background: rgba(255,255,255,0.05);
}

.nav-item.active {
  background: #f0f7f0;
  color: #1a3c2a;
}

.icon {
  font-size: 16px;
  width: 22px;
  text-align: center;
}

.sub-nav {
  padding-left: 36px;
  padding-bottom: 8px;
}

.sub-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  font-size: 13px;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.1);
  padding: 10px 14px;
  border-radius: 10px;
}

.avatar {
  width: 28px;
  height: 28px;
  background: #4ade80;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.user-name {
  font-size: 13px;
  font-weight: 600;
}

.btn-logout {
  margin-left: auto;
  background: none;
  border: none;
  color: #f87171;
  cursor: pointer;
  font-size: 16px;
}

/* ===== MAIN CONTENT ===== */
.main-content {
  flex: 1;
  min-width: 0;
  padding: 24px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.search-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border: 1px solid #e0e6e0;
  border-radius: 12px;
  padding: 10px 16px;
}

.search-icon {
  font-size: 16px;
  color: #8a9a8a;
}

.search-input input {
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  background: transparent;
  color: #555;
}

.select-category {
  padding: 10px 16px;
  border: 1px solid #e0e6e0;
  border-radius: 12px;
  background: white;
  font-size: 14px;
  outline: none;
  min-width: 120px;
  color: #555;
}

/* Banner */
.banner {
  background: #1a3c2a;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
}

.banner-icon {
  font-size: 64px;
  opacity: 0.9;
}

.banner-text {
  font-size: 40px;
  font-weight: 300;
  line-height: 1.1;
}

.banner-text .bold {
  font-weight: 700;
}

.banner-dots {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
}

.dot.active {
  background: white;
}

/* Category Cards */
.category-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
}

.cat-card {
  background: white;
  border-radius: 16px;
  padding: 18px;
  text-align: center;
  border: 1px solid #e8ece8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  cursor: pointer;
  transition: transform 0.2s;
}

.cat-card:hover {
  transform: translateY(-4px);
}

.cat-icon {
  width: 44px;
  height: 44px;
  background: #e8f5e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-size: 22px;
}

.cat-name {
  font-size: 15px;
  font-weight: 700;
  color: #1a3c2a;
  margin-bottom: 2px;
}

.cat-label {
  font-size: 11px;
  color: #8a9a8a;
}

/* ===== PRODUCTS GRID - 2 KOLOM TETAP ===== */
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.product-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #e8ece8;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 30px;
  height: 30px;
  background: #1a3c2a;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  z-index: 2;
}

.product-img {
  width: 100%;
  height: 160px;
  background: #f5f7f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

/* 🔥 FIX: Gambar tidak boleh melebihi container */
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  max-width: 100%;
}

.product-info {
  padding: 14px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 13px;
  font-weight: 700;
  color: #1a3c2a;
  margin-bottom: 2px;
  line-height: 1.3;
}

.product-weight {
  font-size: 11px;
  color: #8a9a8a;
  margin-bottom: 6px;
}

.product-tag {
  display: inline-block;
  background: #1a3c2a;
  color: white;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 8px;
  width: fit-content;
}

.product-price {
  font-size: 16px;
  font-weight: 700;
  color: #1a3c2a;
  margin-bottom: 10px;
  margin-top: auto;
}

.btn-add-cart {
  width: 100%;
  padding: 10px;
  background: #a5f3c4;
  color: #1a3c2a;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.2s;
}

.btn-add-cart:hover {
  background: #86efac;
}

/* ===== CART PANEL ===== */
.cart-panel {
  width: 300px;
  flex-shrink: 0;
  background: white;
  border-left: 1px solid #e8ece8;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.cart-header {
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #f0f2f0;
  flex-shrink: 0;
}

.cart-icon {
  font-size: 20px;
}

.cart-header h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1a3c2a;
  margin: 0;
}

.cart-badge {
  margin: 14px 20px 0;
  background: #1a3c2a;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  width: fit-content;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 14px 20px;
}

.cart-row {
  display: flex;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f2f0;
}

.cart-row-img {
  width: 52px;
  height: 52px;
  border-radius: 8px;
  object-fit: cover;
  background: #f5f7f5;
  flex-shrink: 0;
}

.cart-row-info {
  flex: 1;
  min-width: 0;
}

.cart-row-name {
  font-size: 12px;
  font-weight: 600;
  color: #1a3c2a;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cart-row-weight {
  font-size: 10px;
  color: #8a9a8a;
  margin-bottom: 4px;
}

.cart-row-meta {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  gap: 8px;
}

.cart-row-meta .price {
  color: #555;
}

.cart-row-meta .total {
  color: #1a3c2a;
  font-weight: 600;
  white-space: nowrap;
}

.cart-footer {
  padding: 16px 20px;
  border-top: 1px solid #f0f2f0;
  background: #fafcfa;
  flex-shrink: 0;
}

.cart-total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 12px;
  color: #555;
}

.cart-total-row.grand {
  font-size: 15px;
  font-weight: 700;
  color: #1a3c2a;
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px solid #e0e6e0;
  margin-bottom: 12px;
}

.btn-checkout {
  width: 100%;
  padding: 12px;
  background: #1a3c2a;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* ===== CHECKOUT ===== */
.checkout-view {
  padding: 24px;
}

.btn-back {
  margin-bottom: 16px;
  padding: 8px 16px;
  background: white;
  border: 1px solid #e0e6e0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #1a3c2a;
  font-weight: 500;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.cart-list h3,
.checkout-summary h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1a3c2a;
  margin-bottom: 14px;
}

.cart-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: white;
  border-radius: 12px;
  margin-bottom: 10px;
  border: 1px solid #e8ece8;
  align-items: center;
}

.cart-thumb {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
}

.cart-detail {
  flex: 1;
  min-width: 0;
}

.cart-detail .cart-name {
  font-size: 13px;
  font-weight: 600;
  color: #1a3c2a;
  margin-bottom: 2px;
}

.cart-detail .cart-weight {
  font-size: 11px;
  color: #8a9a8a;
}

.cart-detail .cart-price {
  font-size: 13px;
  font-weight: 700;
  color: #1a3c2a;
  margin-top: 4px;
}

.cart-qty {
  font-size: 13px;
  font-weight: 600;
  color: #555;
  padding: 4px 10px;
  background: #f5f7f5;
  border-radius: 6px;
  flex-shrink: 0;
}

.summary-card {
  background: white;
  border-radius: 16px;
  border: 1px solid #e8ece8;
  padding: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  font-size: 13px;
  color: #555;
  align-items: center;
}

.summary-row .link {
  color: #1a3c2a;
  font-weight: 600;
  cursor: pointer;
  font-size: 12px;
}

.summary-divider {
  height: 1px;
  background: #f0f2f0;
  margin: 14px 0;
}

.summary-row.total {
  font-size: 16px;
  font-weight: 700;
  color: #1a3c2a;
}

/* ===== MODALS ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-box {
  background: white;
  border-radius: 16px;
  padding: 24px 28px;
  width: 100%;
  max-width: 400px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.modal-close {
  position: absolute;
  top: 16px;
  left: 16px;
  background: none;
  border: none;
  font-size: 22px;
  color: #1a3c2a;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-step h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1a3c2a;
  margin: 0 0 20px 36px;
}

.btn-location {
  width: 100%;
  padding: 12px;
  background: #1a3c2a;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.map-box {
  width: 100%;
  height: 180px;
  background: #e8f5e9;
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #c8e6c9 0%, #e8f5e9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-pin {
  font-size: 40px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.spinner {
  font-size: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
  display: inline-block;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.text-center {
  text-align: center;
}

.btn-submit {
  width: 100%;
  padding: 12px;
  background: #1a3c2a;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.payment-box {
  max-width: 440px;
}

.payment-box h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1a3c2a;
  margin: 0 0 16px 36px;
}

.payment-methods {
  margin-bottom: 16px;
}

.payment-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border: 1px solid #e0e6e0;
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.payment-row:hover {
  background: #fafcfa;
  border-color: #1a3c2a;
}

.payment-radio {
  width: 18px;
  height: 18px;
  border: 2px solid #e0e6e0;
  border-radius: 50%;
  flex-shrink: 0;
}

.payment-radio.active {
  border-color: #1a3c2a;
  background: #1a3c2a;
  box-shadow: inset 0 0 0 3px white;
}

.payment-logo {
  width: 50px;
  height: 26px;
  object-fit: contain;
  border-radius: 4px;
}

.payment-name {
  font-size: 13px;
  font-weight: 600;
  color: #1a3c2a;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .cart-panel {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 50;
    box-shadow: -4px 0 20px rgba(0,0,0,0.1);
    transform: translateX(100%);
    transition: transform 0.3s;
  }
  .cart-panel.open {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .user-app {
    flex-direction: column;
    height: auto;
    overflow: auto;
  }

  .sidebar {
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 10px;
    order: 2;
  }

  .sidebar-header,
  .sidebar-footer {
    display: none;
  }

  .sidebar-nav {
    display: flex;
    overflow-x: auto;
    padding: 0;
    gap: 8px;
    width: 100%;
  }

  .nav-item {
    white-space: nowrap;
    margin-bottom: 0;
  }

  .sub-nav {
    display: none;
  }

  .main-content {
    padding: 16px;
    order: 1;
    height: auto;
    min-width: auto;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .category-cards {
    grid-template-columns: 1fr;
  }

  .checkout-layout {
    grid-template-columns: 1fr;
  }

  .banner-text {
    font-size: 28px;
  }

  .banner-icon {
    font-size: 48px;
  }

  .cart-panel {
    width: 100%;
    position: static;
    height: auto;
    order: 3;
    border-left: none;
    border-top: 1px solid #e8ece8;
    transform: none;
  }
}
</style>