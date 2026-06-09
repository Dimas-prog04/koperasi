<template>
  <div class="lp-wrapper">
    
    <!-- ===== NAVBAR ===== -->
    <nav :class="['lp-navbar', { 'lp-navbar--scrolled': isScrolled }]">
      <div class="lp-container lp-navbar__inner">
        <!-- Left Links (Desktop) -->
        <div class="lp-nav-links lp-hide-mobile">
          <a href="#" class="lp-nav-link">Beranda</a>
          <a href="#" class="lp-nav-link">Fitur AI</a>
          <a href="#" class="lp-nav-link">Harga</a>
          <a href="#" class="lp-nav-link">Testimoni</a>
        </div>

        <!-- Center Logo -->
        <div class="lp-logo">
          <h1 class="lp-logo__text">H<span>E</span>LPIN</h1>
          <span class="lp-logo__sub">SERVICES</span>
        </div>

        <!-- Right CTA (Desktop) -->
        <div class="lp-nav-actions lp-hide-mobile">
          <a href="#" class="lp-nav-link">Masuk</a>
          <button class="lp-btn lp-btn--dark">Mulai Gratis</button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="lp-nav-toggle" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      <Transition name="fade-slide">
        <div v-if="mobileMenuOpen" class="lp-mobile-menu">
          <a href="#" class="lp-mobile-link">Beranda</a>
          <a href="#" class="lp-mobile-link">Fitur AI</a>
          <a href="#" class="lp-mobile-link">Harga</a>
          <a href="#" class="lp-mobile-link">Testimoni</a>
          <div class="lp-mobile-actions">
            <a href="#" class="lp-mobile-link">Masuk</a>
            <button class="lp-btn lp-btn--dark lp-btn--full">Mulai Gratis</button>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- ===== HERO SECTION ===== -->
    <section class="lp-hero">
      <div class="lp-hero__bg-grid"></div>
      <div class="lp-container lp-hero__inner">
        
        <!-- Hero Text -->
        <div class="lp-hero__content scroll-reveal">
          <div class="lp-badge">
            <svg class="lp-sparkle-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Generasi AI Tercepat v99.0
          </div>
          <h1 class="lp-hero__title">
            Koperasi Maju<br>Berbasis AI,<br>
            <span class="lp-text-lime">Akselerasi Bisnis.</span>
          </h1>
          <p class="lp-hero__desc">
            Platform <strong>Koperasi AI tercanggih</strong> yang mengubah Pencatatan Manual menjadi <strong>Otomatis</strong> dalam beberapa waktu. Tanpa ribet, siap pakai, dan <strong>otomatis dioptimalkan.</strong>
          </p>
          <div class="lp-hero__actions">
            <button class="lp-btn lp-btn--dark lp-btn--large">Mulai Coba Gratis</button>
            <button class="lp-btn lp-btn--white lp-btn--large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              Lihat Demo
            </button>
          </div>
        </div>

        <!-- Hero Illustration -->
        <div class="lp-hero__illustration scroll-reveal" style="transition-delay: 0.2s;">
          <!-- Floating Social Icons -->
          <div class="lp-float-icon lp-float-1"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG"></div>
          <div class="lp-float-icon lp-float-2"><img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok"></div>
          <div class="lp-float-icon lp-float-3"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn"></div>
          <div class="lp-float-icon lp-float-4"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube"></div>
          <div class="lp-float-icon lp-float-5"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt="Facebook"></div>

          <!-- Abstract Window UI -->
          <div class="lp-ui-window">
            <div class="lp-ui-window__header">
              <span class="lp-dot lp-dot--green"></span><span class="lp-dot lp-dot--yellow"></span><span class="lp-dot lp-dot--red"></span>
            </div>
            <div class="lp-ui-window__progress"></div>
            <div class="lp-ui-window__body">
              <div class="lp-ui-window__sidebar">
                <div class="lp-ui-skeleton-line"></div>
                <div class="lp-ui-skeleton-line" style="width: 70%;"></div>
                <div class="lp-ui-skeleton-box"></div>
              </div>
              <div class="lp-ui-window__content">
                <div class="lp-spinner"></div>
                <p class="lp-ui-loading-text">Menyelesaikan Masalah....</p>
                <p class="lp-ui-sub-text">Menyusun struktur & asset virtual</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== MITRA SECTION ===== -->
    <section class="lp-partners scroll-reveal">
      <div class="lp-container">
        <div class="lp-section-header">
          <span class="lp-section-badge">MITRA</span>
          <h2 class="lp-section-title">Telah Digunakan Oleh</h2>
        </div>
        <div class="lp-partners__logos">
          <!-- BUMN Mock Logos -->
          <div v-for="i in 5" :key="i" class="lp-partner-logo">
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Kementerian_BUMN_Logo.svg" alt="BUMN" class="lp-partner-img">
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FEATURES SECTION ===== -->
    <section class="lp-features scroll-reveal">
      <div class="lp-container">
        <div class="lp-section-header">
          <span class="lp-section-badge">FITUR MASA DEPAN KOPERASI</span>
          <h2 class="lp-section-title">Otomatisasi Menggunakan AI</h2>
        </div>

        <div class="lp-feature-carousel">
          
          <!-- Arrow Left -->
          <button @click="rotateFeature(-1)" class="lp-carousel-arrow lp-carousel-arrow--left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 19L6 12l7-7"/><path d="M6 12h12"/></svg>
          </button>

          <!-- Cards Container -->
          <div class="lp-feature-cards">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              :class="['lp-feature-card', getCardClass(index)]"
            >
              <div class="lp-feature-card__header">
                <div :class="['lp-feature-icon', { 'lp-feature-icon--lime': activeFeature === index }]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <div class="lp-feature-tags">
                  <span :class="['lp-tag', { 'lp-tag--lime': activeFeature === index }]">Generative AI</span>
                  <span :class="['lp-tag', { 'lp-tag--lime': activeFeature === index }]">10 Minute</span>
                  <span :class="['lp-tag', { 'lp-tag--lime': activeFeature === index }]">Easy to use</span>
                </div>
              </div>
              <h3 class="lp-feature-card__title">{{ feature.title }}</h3>
              <p class="lp-feature-card__desc">{{ feature.desc }}</p>
            </div>
          </div>

          <!-- Arrow Right -->
          <button @click="rotateFeature(1)" class="lp-carousel-arrow lp-carousel-arrow--right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5l7 7-7 7"/><path d="M18 12H6"/></svg>
          </button>

        </div>

        <!-- Feature Dots -->
        <div class="lp-carousel-dots">
          <span 
            v-for="(_, index) in features" 
            :key="index"
            :class="['lp-dot-indicator', { 'lp-dot-indicator--active': activeFeature === index }]"
            @click="activeFeature = index"
          ></span>
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIAL SECTION ===== -->
    <section class="lp-testimonials scroll-reveal">
      <div class="lp-container">
        <div class="lp-section-header">
          <span class="lp-section-badge">TESTIMONI</span>
          <h2 class="lp-section-title">Kisah Sukses Koperasi Bersama Kami</h2>
        </div>

        <div class="lp-testimonial-grid">
          <!-- Left: Map -->
          <div class="lp-testimonial-map">
            <!-- Peta Google Maps Mockup -->
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=500" alt="Map" class="lp-map-img">
            
            <div :class="['lp-map-pin', { 'lp-map-pin--active': activeTesti === 0 }]" style="top: 35%; left: 30%;">
              <img src="https://i.pravatar.cc/100?img=5" alt="User">
            </div>
            <div :class="['lp-map-pin', { 'lp-map-pin--active': activeTesti === 1 }]" style="top: 55%; left: 60%;">
              <img src="https://i.pravatar.cc/100?img=9" alt="User">
            </div>
            <div :class="['lp-map-pin', { 'lp-map-pin--active': activeTesti === 2 }]" style="top: 25%; left: 75%;">
              <img src="https://i.pravatar.cc/100?img=12" alt="User">
            </div>
          </div>

          <!-- Right: Review Card -->
          <div class="lp-testimonial-content">
            <div class="lp-review-card">
              <div class="lp-review-user">
                <img :src="testimonials[activeTesti].img" alt="User" class="lp-review-avatar">
                <div>
                  <h4 class="lp-review-name">{{ testimonials[activeTesti].name }}</h4>
                  <p class="lp-review-role">{{ testimonials[activeTesti].role }}</p>
                </div>
              </div>
              <p class="lp-review-text">"{{ testimonials[activeTesti].text }}"</p>
              <div class="lp-review-stars">
                <svg v-for="s in 5" :key="s" width="20" height="20" viewBox="0 0 24 24" fill="#FACC15"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
            </div>
            
            <!-- Controls -->
            <div class="lp-review-controls">
              <button @click="prevTesti" class="lp-ctrl-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
              <div class="lp-carousel-dots">
                <span v-for="(t, i) in testimonials" :key="i" :class="['lp-dot-indicator', { 'lp-dot-indicator--active': i === activeTesti }]"></span>
              </div>
              <button @click="nextTesti" class="lp-ctrl-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== STATS SECTION ===== -->
    <section class="lp-stats scroll-reveal">
      <div class="lp-container">
        <div class="lp-stats-card">
          <div class="lp-stat-item">
            <h2 class="lp-stat-number">150k+</h2>
            <p class="lp-stat-label">Koperasi Digital<br>Terbantu</p>
          </div>
          <div class="lp-stat-divider"></div>
          <div class="lp-stat-item">
            <h2 class="lp-stat-number">Rp 2.4T</h2>
            <p class="lp-stat-label">Transaksi Terproses</p>
          </div>
          <div class="lp-stat-divider"></div>
          <div class="lp-stat-item">
            <h2 class="lp-stat-number">3x Lipat</h2>
            <p class="lp-stat-label">Efisiensi Biaya Operasional</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA SECTION ===== -->
    <section class="lp-cta scroll-reveal">
      <div class="lp-container">
        <div class="lp-section-header">
          <span class="lp-section-badge">COBA SEKARANG</span>
        </div>
        <div class="lp-cta-card">
          <h2 class="lp-cta-title">Coba Keajaiban AI Sekarang</h2>
          <p class="lp-cta-desc">Biarkan AI yang bekerja untuk anda, anda cukup duduk dan bersantai</p>
          <button class="lp-btn lp-btn--gradient lp-btn--large lp-btn--shadow">
            <svg class="lp-sparkle-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Mulai
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({
  layout: false // Matikan layout default (jika ada)
})

import { ref, onMounted, onUnmounted } from 'vue'

// ==== SCROLL NAVBAR EFFECT ====
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// ==== SCROLL REVEAL ANIMATION ====
let observer = null

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Setup Intersection Observer untuk efek masuk (fade in up)
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})

// ==== FEATURES CAROUSEL LOGIC ====
const activeFeature = ref(1)
const features = ref([
  {
    title: 'AI Problem Solver',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
  },
  {
    title: 'AI Problem Solver',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
  },
  {
    title: 'AI Problem Solver',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
  }
])

function rotateFeature(dir) {
  let newIndex = activeFeature.value + dir
  if (newIndex < 0) newIndex = features.value.length - 1
  if (newIndex >= features.value.length) newIndex = 0
  activeFeature.value = newIndex
}

function getCardClass(index) {
  if (index === activeFeature.value) return 'lp-feature-card--active'
  
  // Logika sederhana untuk posisi Kiri / Kanan berdasarkan activeIndex
  const isLeft = (index === activeFeature.value - 1) || (activeFeature.value === 0 && index === features.value.length - 1)
  if (isLeft) return 'lp-feature-card--left'
  
  return 'lp-feature-card--right'
}

// ==== TESTIMONIALS LOGIC ====
const activeTesti = ref(1)
const testimonials = ref([
  {
    name: 'Budi Santoso',
    role: 'Ketua Koperasi Unit Desa',
    text: 'Sistem pencatatan menjadi 3x lebih cepat. Anggota koperasi kami sangat puas dengan transparansi datanya.',
    img: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Siti Aminah',
    role: 'Ibu Rumah Tangga',
    text: 'Menghemat biaya sewa web developer puluhan juta, sangat disarankan untuk UMKM yang baru merintis!',
    img: 'https://i.pravatar.cc/100?img=9'
  },
  {
    name: 'Agus Wijaya',
    role: 'Pengusaha Retail',
    text: 'Sangat luar biasa! AI problem solvernya benar-benar memberikan rekomendasi bisnis yang akurat.',
    img: 'https://i.pravatar.cc/100?img=12'
  }
])

function nextTesti() {
  activeTesti.value = (activeTesti.value + 1) % testimonials.value.length
}
function prevTesti() {
  activeTesti.value = (activeTesti.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>

<style scoped>
/* ===== GOOGLE FONTS ===== */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

/* ===== VARIABLES & GLOBALS ===== */
.lp-wrapper {
  font-family: 'Outfit', sans-serif;
  background-color: #F4FCF7; /* Hijau super muda untuk background utama */
  color: #1f2937;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
}

/* Background Grid Lintas Seluruh Halaman (Opsional, tapi di desain terlihat di hero & fitur) */
.lp-wrapper::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, rgba(132, 204, 22, 0.07) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(132, 204, 22, 0.07) 1px, transparent 1px);
  z-index: 0;
  pointer-events: none;
}

.lp-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* Typography & Colors */
.lp-text-lime { color: #85C744; }
.lp-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; margin-right: 6px; }
.lp-dot--red { background-color: #EF4444; }
.lp-dot--yellow { background-color: #FACC15; }
.lp-dot--green { background-color: #22C55E; }
.lp-dot--dark { background-color: #19462D; }

/* ===== BUTTONS ===== */
.lp-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 10px 24px; border-radius: 50px; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: all 0.3s ease; border: none; font-family: inherit;
}
.lp-btn--large { padding: 14px 32px; font-size: 16px; }
.lp-btn--dark { background-color: #19462D; color: #fff; }
.lp-btn--dark:hover { background-color: #113620; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(25,70,45,0.2); }
.lp-btn--white { background-color: #fff; color: #19462D; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.lp-btn--white:hover { background-color: #f9fafb; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.08); }
.lp-btn--gradient { background: linear-gradient(135deg, #9DCD3B 0%, #72A023 100%); color: #fff; }
.lp-btn--gradient:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(133,199,68,0.4); }
.lp-btn--full { width: 100%; }
.lp-sparkle-icon { width: 18px; height: 18px; }

/* ===== NAVBAR ===== */
.lp-navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 20px 0; transition: all 0.3s ease;
  background: transparent;
}
.lp-navbar--scrolled {
  background: rgba(244, 252, 247, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.lp-navbar__inner { display: flex; align-items: center; justify-content: space-between; }

.lp-logo { text-align: center; color: #19462D; cursor: pointer; }
.lp-logo__text { font-size: 28px; font-weight: 800; letter-spacing: 1px; margin: 0; line-height: 1; }
.lp-logo__text span { position: relative; }
.lp-logo__text span::after { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 3px; background: #19462D; transform: translateY(-50%); }
.lp-logo__sub { font-size: 8px; letter-spacing: 4px; opacity: 0.8; margin-left: 45px; font-weight: 800; }

.lp-nav-links, .lp-nav-actions { display: flex; align-items: center; gap: 32px; }
.lp-nav-link { color: #19462D; text-decoration: none; font-size: 15px; font-weight: 700; transition: color 0.2s; }
.lp-nav-link:hover { color: #85C744; }

.lp-nav-toggle { background: none; border: none; cursor: pointer; color: #19462D; display: none; }

/* Mobile Menu */
.lp-mobile-menu {
  position: absolute; top: 100%; left: 0; right: 0;
  background: #fff; padding: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  display: flex; flex-direction: column; gap: 16px;
  border-top: 1px solid #f3f4f6;
}
.lp-mobile-link { color: #1f2937; text-decoration: none; font-size: 16px; font-weight: 700; padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
.lp-mobile-actions { margin-top: 10px; display: flex; flex-direction: column; gap: 12px; align-items: center; }

@media (max-width: 860px) {
  .lp-hide-mobile { display: none; }
  .lp-nav-toggle { display: block; }
}

/* ===== HERO SECTION ===== */
.lp-hero {
  position: relative; padding: 180px 0 80px; min-height: 100vh;
  display: flex; align-items: center;
}

.lp-hero__inner {
  display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center;
}
@media (max-width: 960px) {
  .lp-hero__inner { grid-template-columns: 1fr; text-align: center; }
}

.lp-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: #fff; border: 1px solid #e5e7eb; padding: 8px 18px;
  border-radius: 50px; font-size: 13px; font-weight: 800; color: #19462D;
  margin-bottom: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.03);
}
.lp-badge svg { color: #85C744; }

.lp-hero__title {
  font-size: 64px; font-weight: 800; line-height: 1.1; color: #19462D; margin: 0 0 24px; letter-spacing: -1px;
}
@media (max-width: 768px) { .lp-hero__title { font-size: 44px; } }

.lp-hero__desc {
  font-size: 18px; color: #4b5563; line-height: 1.6; margin: 0 0 40px; max-width: 550px; font-weight: 400;
}
@media (max-width: 960px) { .lp-hero__desc { margin-left: auto; margin-right: auto; } }

.lp-hero__actions { display: flex; gap: 16px; flex-wrap: wrap; }
@media (max-width: 960px) { .lp-hero__actions { justify-content: center; } }

/* Hero Right: Window UI */
.lp-hero__illustration { position: relative; width: 100%; max-width: 550px; margin: 0 auto; }
.lp-ui-window {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.05); border-radius: 20px; 
  box-shadow: 0 30px 60px rgba(25,70,45,0.08);
  overflow: hidden; aspect-ratio: 4/3; display: flex; flex-direction: column;
}
.lp-ui-window__header { padding: 16px 20px; background: #fff; display: flex; align-items: center; }
.lp-ui-window__progress { height: 4px; background: linear-gradient(90deg, #85C744 40%, #f3f4f6 40%); width: 100%; }
.lp-ui-window__body { display: flex; flex: 1; padding: 20px; gap: 20px; }
.lp-ui-window__sidebar { width: 30%; display: flex; flex-direction: column; gap: 12px; border-right: 1px solid #f3f4f6; padding-right: 20px; }
.lp-ui-skeleton-line { height: 10px; background: #e5e7eb; border-radius: 10px; width: 100%; }
.lp-ui-skeleton-box { height: 80px; background: #f3f4f6; border-radius: 10px; width: 100%; margin-top: auto; }
.lp-ui-window__content { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }

.lp-spinner {
  width: 50px; height: 50px; border: 4px solid #f3f4f6; border-top-color: #85C744;
  border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 24px;
}
@keyframes spin { to { transform: rotate(360deg); } }

.lp-ui-loading-text { font-size: 16px; font-weight: 800; color: #85C744; margin: 0 0 8px; }
.lp-ui-sub-text { font-size: 12px; font-weight: 500; color: #9ca3af; margin: 0; }

/* Floating Icons */
.lp-float-icon {
  position: absolute; width: 44px; height: 44px; background: #fff; border-radius: 12px;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  animation: float 6s ease-in-out infinite; z-index: 10; border: 1px solid #f3f4f6;
}
.lp-float-icon img { width: 22px; height: 22px; object-fit: contain; filter: opacity(0.8); transition: 0.3s; }
.lp-float-icon:hover img { filter: opacity(1); transform: scale(1.1); }

.lp-float-1 { top: -20px; left: -20px; animation-delay: 0s; }
.lp-float-2 { top: 15%; right: -25px; animation-delay: 1s; }
.lp-float-3 { bottom: 10%; left: -10px; animation-delay: 2s; }
.lp-float-4 { top: 50%; right: -40px; animation-delay: 3s; }
.lp-float-5 { bottom: -10px; right: 20px; animation-delay: 4s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* ===== GENERAL SECTIONS ===== */
.lp-section-header { text-align: center; margin-bottom: 60px; }
.lp-section-badge {
  display: inline-block; padding: 6px 20px; background: #ECFCCB; color: #4D7C0F;
  border-radius: 50px; font-size: 13px; font-weight: 800; letter-spacing: 1px; margin-bottom: 20px; text-transform: uppercase;
}
.lp-section-title { font-size: 38px; font-weight: 800; color: #19462D; margin: 0; }

/* ===== MITRA ===== */
.lp-partners { padding: 40px 0 80px; }
.lp-partners__logos {
  display: flex; align-items: center; justify-content: center; gap: 40px; flex-wrap: wrap;
  opacity: 0.6; filter: grayscale(100%);
}
.lp-partner-img { height: 50px; object-fit: contain; }

/* ===== FEATURES CAROUSEL ===== */
.lp-features { padding: 80px 0; }
.lp-feature-carousel {
  display: flex; align-items: center; justify-content: center; position: relative;
  max-width: 1100px; margin: 0 auto 40px; gap: 20px;
}
.lp-feature-cards {
  display: flex; align-items: center; justify-content: center; position: relative; width: 100%; height: 350px;
}

.lp-feature-card {
  position: absolute;
  background: #fff; border-radius: 24px; padding: 32px; box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); width: 350px;
  border: 1px solid #f3f4f6;
}
@media (max-width: 768px) {
  .lp-feature-card { width: 100%; max-width: 350px; }
  .lp-feature-card--left, .lp-feature-card--right { opacity: 0; pointer-events: none; } 
}

/* Posisi Kartu Kiri */
.lp-feature-card--left {
  transform: translateX(-60%) scale(0.85) rotate(-5deg); z-index: 1; opacity: 0.8;
}
/* Posisi Kartu Kanan */
.lp-feature-card--right {
  transform: translateX(60%) scale(0.85) rotate(5deg); z-index: 1; opacity: 0.8;
}
/* Posisi Kartu Aktif (Tengah) */
.lp-feature-card--active {
  transform: translateX(0) scale(1.05); z-index: 10; 
  box-shadow: 0 30px 60px rgba(133,199,68,0.15); 
}

.lp-feature-card__header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; }
.lp-feature-icon { width: 56px; height: 56px; border-radius: 50%; background: #f3f4f6; color: #6b7280; display: flex; align-items: center; justify-content: center; }
.lp-feature-icon svg { width: 28px; height: 28px; }
.lp-feature-icon--lime { background: #85C744; color: #fff; box-shadow: 0 10px 20px rgba(133,199,68,0.3); }

.lp-feature-tags { display: flex; flex-direction: column; gap: 6px; }
.lp-tag { font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; background: #f3f4f6; color: #6b7280; display: inline-block; width: max-content; }
.lp-tag--lime { background: #ECFCCB; color: #4D7C0F; }

.lp-feature-card__title { font-size: 22px; font-weight: 800; color: #19462D; margin: 0 0 12px; }
.lp-feature-card__desc { font-size: 14px; color: #6b7280; line-height: 1.6; margin: 0; font-weight: 500; }

.lp-carousel-arrow {
  width: 56px; height: 56px; border-radius: 50%; background: #85C744; color: #fff;
  border: none; display: flex; align-items: center; justify-content: center; cursor: pointer;
  z-index: 20; box-shadow: 0 10px 20px rgba(133,199,68,0.3); transition: 0.2s;
}
.lp-carousel-arrow:hover { background: #72A023; transform: scale(1.1); }
@media (max-width: 960px) { .lp-carousel-arrow { display: none; } } 

.lp-carousel-dots { display: flex; justify-content: center; gap: 8px; margin-top: 24px; }
.lp-dot-indicator { width: 10px; height: 10px; border-radius: 50%; background: #d1d5db; transition: 0.3s; cursor: pointer; }
.lp-dot-indicator--active { width: 28px; background: #19462D; border-radius: 10px; }

/* ===== TESTIMONIAL ===== */
.lp-testimonials { padding: 80px 0; }
.lp-testimonial-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
@media (max-width: 960px) { .lp-testimonial-grid { grid-template-columns: 1fr; } }

.lp-testimonial-map { position: relative; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); border: 4px solid #19462D; }
.lp-map-img { width: 100%; display: block; object-fit: cover; }
.lp-map-pin { position: absolute; width: 44px; height: 44px; border-radius: 50%; border: 3px solid #fff; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.2); transform: translate(-50%, -50%); transition: 0.3s; }
.lp-map-pin img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); }
.lp-map-pin--active { transform: translate(-50%, -50%) scale(1.3); border-color: #EF4444; z-index: 10; }
.lp-map-pin--active img { filter: grayscale(0); }

.lp-testimonial-content { display: flex; flex-direction: column; gap: 32px; }
.lp-review-card { background: #fff; padding: 40px; border-radius: 24px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
.lp-review-user { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.lp-review-avatar { width: 70px; height: 70px; border-radius: 50%; object-fit: cover; }
.lp-review-name { font-size: 20px; font-weight: 800; color: #19462D; margin: 0 0 4px; }
.lp-review-role { font-size: 15px; font-weight: 500; color: #6b7280; margin: 0; }
.lp-review-text { font-size: 18px; color: #4b5563; line-height: 1.6; font-style: italic; margin: 0 0 24px; }
.lp-review-stars { display: flex; gap: 6px; }

.lp-review-controls { display: flex; align-items: center; gap: 24px; }
.lp-ctrl-btn { width: 48px; height: 48px; border-radius: 50%; background: #85C744; color: #fff; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 5px 15px rgba(133,199,68,0.3); }
.lp-ctrl-btn:hover { background: #72A023; transform: scale(1.1); }

/* ===== STATS ===== */
.lp-stats { padding: 40px 0 80px; }
.lp-stats-card { background: #fff; border-radius: 24px; padding: 50px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 20px 40px rgba(0,0,0,0.03); border: 1px solid #f3f4f6; }
@media (max-width: 768px) { .lp-stats-card { flex-direction: column; gap: 40px; text-align: center; } .lp-stat-divider { display: none; } }

.lp-stat-item { flex: 1; text-align: center; }
.lp-stat-number { font-size: 54px; font-weight: 800; color: #85C744; margin: 0 0 8px; line-height: 1; }
.lp-stat-label { font-size: 16px; font-weight: 600; color: #4b5563; margin: 0; }
.lp-stat-divider { width: 2px; height: 80px; background: #e5e7eb; }

/* ===== CTA ===== */
.lp-cta { padding: 0 0 100px; }
.lp-cta-card { background: #fff; border-radius: 32px; padding: 80px 40px; text-align: center; box-shadow: 0 30px 60px rgba(25,70,45,0.05); max-width: 800px; margin: 0 auto; border: 1px solid #f3f4f6; }
.lp-cta-title { font-size: 40px; font-weight: 800; color: #19462D; margin: 0 0 16px; }
.lp-cta-desc { font-size: 18px; font-weight: 500; color: #6b7280; margin: 0 0 40px; }

/* ==== ANIMASI SCROLL REVEAL ==== */
.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Transisi Mobile Menu */
.fade-slide-enter-active,
.fade-slide-leave-active { transition: all 0.3s ease; }
.fade-slide-enter-from,
.fade-slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>

<style>
/* Reset landing page scrollbar to native browser defaults */
:root, body, .lp-wrapper {
  scrollbar-width: auto !important;
  scrollbar-color: auto !important;
}
.lp-wrapper::-webkit-scrollbar, .lp-wrapper *::-webkit-scrollbar {
  width: auto !important;
  height: auto !important;
}
.lp-wrapper::-webkit-scrollbar-track, .lp-wrapper *::-webkit-scrollbar-track {
  background: initial !important;
}
.lp-wrapper::-webkit-scrollbar-thumb, .lp-wrapper *::-webkit-scrollbar-thumb {
  background: initial !important;
  border: none !important;
  border-radius: 0 !important;
}
</style>