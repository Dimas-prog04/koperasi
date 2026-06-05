<template>
  <div class="sp-wrapper">
    <div
      v-if="mobileMenuOpen || mobileCartOpen"
      class="sp-overlay"
      @click="closeMobileOverlays"
    />

    <aside
      :class="[
        'sp-sidebar',
        mobileMenuOpen ? 'sp-sidebar--open' : 'sp-sidebar--closed'
      ]"
    >
      <div class="sp-sidebar__inner">
        <div class="sp-logo">
          <div class="sp-logo__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <span class="sp-logo__text">LOGO</span>
        </div>

        <nav class="sp-nav">
          <button
            @click="currentView = 'dashboard'"
            :class="['sp-nav__btn', currentView === 'dashboard' ? 'sp-nav__btn--active' : '']"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
            </svg>
            <span>Beranda</span>
          </button>

          <div class="sp-nav__group">
            <button @click="categoryOpen = !categoryOpen" class="sp-nav__btn">
              <span>Kategori</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                :style="{ transform: categoryOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }"
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <div v-show="categoryOpen" class="sp-nav__sub">
              <button
                v-for="cat in categories"
                :key="cat.id"
                @click="selectedCategory = cat.id"
                :class="['sp-nav__sub-btn', selectedCategory === cat.id ? 'sp-nav__sub-btn--active' : '']"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="cat.svgPath"/>
                <span>{{ cat.name }}</span>
              </button>
            </div>
          </div>

          <button
            @click="currentView = 'products'"
            :class="['sp-nav__btn', currentView === 'products' ? 'sp-nav__btn--active' : '']"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            <span>Produk</span>
          </button>

          <button
            @click="currentView = 'orders'"
            :class="['sp-nav__btn', currentView === 'orders' ? 'sp-nav__btn--active' : '']"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              <path d="M9 14h6"/><path d="M9 10h6"/>
            </svg>
            <span>Pesanan</span>
          </button>
        </nav>
      </div>

      <div class="sp-user">
        <div class="sp-user__card">
          <div class="sp-user__avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <span class="sp-user__name">Giska678</span>
          <button class="sp-user__logout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </aside>

    <main class="sp-main">
      <header class="sp-header">
        <div class="sp-header__inner">
          <button @click="mobileMenuOpen = true" class="sp-header__menu-btn sp-hidden-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>

          <div class="sp-search">
            <div class="sp-search__box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sp-search__icon">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Cari Pakan Ternak"
                class="sp-search__input"
              >
            </div>
            <div class="sp-search__dropdown-wrap">
              <button @click="categoryDropdownOpen = !categoryDropdownOpen" class="sp-search__dropdown-btn">
                <span>{{ selectedCategoryLabel }}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div v-if="categoryDropdownOpen" class="sp-search__dropdown-menu">
                <button
                  v-for="cat in categories"
                  :key="cat.id"
                  @click="selectCategory(cat.id)"
                  class="sp-search__dropdown-item"
                >
                  {{ cat.name }}
                </button>
              </div>
            </div>
          </div>

          <button @click="mobileCartOpen = true" class="sp-header__cart-btn sp-hidden-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span v-if="cartItems.length > 0" class="sp-header__cart-badge">{{ cartItems.length }}</span>
          </button>
        </div>
      </header>

      <div v-if="currentView === 'dashboard'" class="sp-content">
        <div class="sp-hero">
          <div class="sp-hero__bg">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 20A7 7 0 0 1 4 13V6a2 2 0 0 1 2-2h7a7 7 0 0 1 7 7v7a2 2 0 0 1-2 2h-7z" opacity="0.1"/>
            </svg>
          </div>
          
          <!-- Bagian ini sudah diubah agar konten ke tengah -->
          <div class="sp-hero__content">
            <!-- Wadah untuk gambar PNG kamu nanti -->
            <div class="sp-hero__img-wrap">
              <!-- Ganti src di bawah ini dengan lokasi file .png kamu, misal: src="/images/logo-daun.png" -->
              <img src="https://placehold.co/100x100/ffffff/1B4D3E?text=Daun+PNG" alt="Logo Pakan Pokok" class="sp-hero__png">
            </div>
            
            <div class="sp-hero__text-wrap">
              <h1 class="sp-hero__title">Pakan</h1>
              <h2 class="sp-hero__subtitle">Pokok</h2>
            </div>
          </div>

          <div class="sp-hero__dots">
            <span class="sp-hero__dot sp-hero__dot--active"/>
            <span class="sp-hero__dot"/>
            <span class="sp-hero__dot"/>
            <span class="sp-hero__dot"/>
          </div>
        </div>

        <div class="sp-categories">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            :class="['sp-cat-card', selectedCategory === cat.id ? 'sp-cat-card--active' : '']"
          >
            <div :class="['sp-cat-card__icon', selectedCategory === cat.id ? 'sp-cat-card__icon--active' : '']">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="cat.svgPath"/>
            </div>
            <div>
              <h3 class="sp-cat-card__name">{{ cat.name }}</h3>
              <p class="sp-cat-card__count">{{ cat.count }} Produk</p>
            </div>
          </button>
        </div>

        <div class="sp-products">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="sp-product"
          >
            <div class="sp-product__img-wrap">
              <img :src="product.image" :alt="product.name" class="sp-product__img">
              <button @click="toggleLike(product.id)" class="sp-product__like">
                <svg width="16" height="16" viewBox="0 0 24 24" :fill="product.liked ? '#ef4444' : 'none'" :stroke="product.liked ? '#ef4444' : 'currentColor'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
              </button>
            </div>
            <div class="sp-product__body">
              <h3 class="sp-product__name">{{ product.name }}</h3>
              <p class="sp-product__weight">{{ product.weight }}</p>
              <span class="sp-product__badge">{{ product.category }}</span>
              <div class="sp-product__footer">
                <span class="sp-product__price">{{ formatPrice(product.price) }}</span>
                <button @click="addToCart(product)" class="sp-product__btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  Masukkan Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="currentView === 'checkout'" class="sp-content">
        <div class="sp-checkout">
          <div class="sp-checkout__header">
            <button @click="currentView = 'dashboard'" class="sp-checkout__back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <h1 class="sp-checkout__title">Checkout</h1>
          </div>

          <div class="sp-checkout__grid">
            <div class="sp-checkout__items">
              <div v-for="item in cartItems" :key="item.id" class="sp-checkout__item">
                <img :src="item.image" :alt="item.name" class="sp-checkout__item-img">
                <div class="sp-checkout__item-info">
                  <h3 class="sp-checkout__item-name">{{ item.name }}</h3>
                  <p class="sp-checkout__item-weight">{{ item.weight }}</p>
                  <div class="sp-checkout__item-row">
                    <span class="sp-checkout__item-price">{{ formatPrice(item.price) }}</span>
                    <div class="sp-qty">
                      <button @click="updateQty(item.id, -1)" class="sp-qty__btn">-</button>
                      <span class="sp-qty__val">{{ item.qty }}</span>
                      <button @click="updateQty(item.id, 1)" class="sp-qty__btn">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="sp-checkout__summary">
              <div class="sp-card">
                <div class="sp-card__header">
                  <h3 class="sp-card__title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Alamat
                  </h3>
                  <button @click="openLocationModal" class="sp-card__link">Ubah</button>
                </div>
                <p class="sp-card__text">{{ selectedAddress }}</p>
              </div>

              <div class="sp-card">
                <h3 class="sp-card__title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                  Detail Pembayaran
                </h3>
                <div class="sp-card__row">
                  <span>Subtotal</span>
                  <span>{{ formatPrice(cartTotal) }}</span>
                </div>
                <div class="sp-card__row">
                  <span>Ongkir</span>
                  <span>{{ formatPrice(shippingCost) }}</span>
                </div>
                <div class="sp-card__row">
                  <span>Diskon</span>
                  <span style="color: #22c55e">-{{ formatPrice(discount) }}</span>
                </div>
                <div class="sp-card__row sp-card__row--total">
                  <span>Total</span>
                  <span>{{ formatPrice(finalTotal) }}</span>
                </div>
              </div>

              <button @click="showPaymentModal = true" class="sp-btn sp-btn--primary sp-btn--full">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="currentView === 'orders'" class="sp-content">
        <h1 class="sp-page-title">Pesanan Saya</h1>
        <div class="sp-empty">
          <div class="sp-empty__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              <path d="M9 14h6"/><path d="M9 10h6"/>
            </svg>
          </div>
          <p>Belum ada pesanan</p>
        </div>
      </div>

      <div v-else-if="currentView === 'products'" class="sp-content">
        <h1 class="sp-page-title">Semua Produk</h1>
        <div class="sp-products">
          <div v-for="product in filteredProducts" :key="product.id" class="sp-product">
            <img :src="product.image" :alt="product.name" class="sp-product__img">
            <div class="sp-product__body">
              <h3 class="sp-product__name">{{ product.name }}</h3>
              <p class="sp-product__weight">{{ product.weight }}</p>
              <div class="sp-product__footer">
                <span class="sp-product__price">{{ formatPrice(product.price) }}</span>
                <button @click="addToCart(product)" class="sp-product__btn sp-product__btn--small">+ Keranjang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <aside
      :class="[
        'sp-cart',
        mobileCartOpen ? 'sp-cart--open' : 'sp-cart--closed'
      ]"
    >
      <div class="sp-cart__inner">
        <div class="sp-cart__header">
          <div class="sp-cart__title-wrap">
            <div class="sp-cart__title-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <h2 class="sp-cart__title">Keranjang</h2>
          </div>
          <button @click="mobileCartOpen = false" class="sp-cart__close sp-hidden-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <button
          v-if="cartItems.length > 0"
          @click="currentView = 'checkout'"
          class="sp-btn sp-btn--primary sp-btn--small sp-cart__top-btn"
        >
          Isi Keranjang
        </button>

        <div class="sp-cart__items">
          <div v-for="item in cartItems" :key="item.id" class="sp-cart__item">
            <img :src="item.image" :alt="item.name" class="sp-cart__item-img">
            <div class="sp-cart__item-info">
              <h4 class="sp-cart__item-name">{{ item.name }}</h4>
              <p class="sp-cart__item-weight">{{ item.weight }}</p>
              <div class="sp-cart__item-row">
                <span class="sp-cart__item-price">{{ formatPrice(item.price) }} x {{ item.qty }}</span>
                <span class="sp-cart__item-total">{{ formatPrice(item.price * item.qty) }}</span>
              </div>
            </div>
            <button @click="removeFromCart(item.id)" class="sp-cart__item-remove">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          <div v-if="cartItems.length === 0" class="sp-cart__empty">
            <div class="sp-cart__empty-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <p>Keranjang kosong</p>
          </div>
        </div>

        <div v-if="cartItems.length > 0" class="sp-cart__footer">
          <div class="sp-cart__footer-row">
            <span>Total Semua</span>
            <span>{{ formatPrice(cartTotal) }}</span>
          </div>
          <div class="sp-cart__footer-row">
            <span>Diskon</span>
            <span style="color: #22c55e">12%</span>
          </div>
          <div class="sp-cart__footer-row sp-cart__footer-row--total">
            <span>Total</span>
            <span>{{ formatPrice(cartTotal * 0.88) }}</span>
          </div>
          <button @click="currentView = 'checkout'; mobileCartOpen = false" class="sp-btn sp-btn--primary sp-btn--full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Checkout
          </button>
        </div>
      </div>
    </aside>

    <!-- ===== 1. LOCATION MODAL (PILIH LOKASI) ===== -->
    <Transition name="sp-fade">
      <div v-if="showLocationModal" class="sp-modal">
        <div class="sp-modal__backdrop" @click="showLocationModal = false"/>
        <div class="sp-modal__box sp-modal__box--sm">
          <div style="display: flex; align-items: center; padding-bottom: 16px; border-bottom: 1px solid #f3f4f6; margin-bottom: 16px;">
            <button @click="showLocationModal = false" style="background:none; border:none; cursor:pointer; color:#6b7280; padding:0;">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <h3 style="font-weight: 700; font-size: 16px; color: #1f2937; margin-left: 12px; margin-top: 0; margin-bottom: 0;">Pilih Lokasi</h3>
          </div>
          <div class="sp-modal__body">
            <button @click="getCurrentLocation" class="sp-btn sp-btn--primary sp-btn--full" style="padding: 14px;">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Pilih Lokasi Otomatis
            </button>
            <button @click="openMapModal" class="sp-btn sp-btn--primary sp-btn--full" style="padding: 14px;">
              <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
              </svg>
              Pilih Lokasi Manual
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ===== 2. MAP MODAL (MANUAL LEAFLET MAP) ===== -->
    <Transition name="sp-fade">
      <div v-if="showMapModal" class="sp-modal">
        <div class="sp-modal__backdrop" @click="showMapModal = false"/>
        <div class="sp-modal__box sp-modal__box--md">
          <div style="display: flex; align-items: center; padding: 20px; border-bottom: 1px solid #f3f4f6;">
             <button @click="showMapModal = false" style="background:none; border:none; cursor:pointer; color:#6b7280; padding:0;">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
             </button>
             <h3 style="font-weight: 700; font-size: 16px; margin-left: 16px; color: #1f2937; margin-top: 0; margin-bottom: 0;">Pilih Lokasi Manual</h3>
          </div>
          <div style="padding: 20px;">
            <!-- Ini wadah asli untuk Peta Interaktif (Leaflet JS) -->
            <div id="map-container" style="width: 100%; height: 350px; background: #f3f4f6; border-radius: 12px; z-index: 1;"></div>
          </div>
          <div class="sp-modal__foot" style="padding-top: 0;">
            <button @click="confirmMapLocation" class="sp-btn sp-btn--primary sp-btn--full">Gunakan Lokasi Ini</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ===== 3. LOADING MODAL (OTORISASI GPS) ===== -->
    <Transition name="sp-fade">
      <div v-if="showLoadingModal" class="sp-modal">
        <div class="sp-modal__backdrop"/>
        <div class="sp-modal__box sp-modal__box--sm sp-modal__box--center" style="max-width: 350px; padding: 40px 24px;">
          <button @click="showLoadingModal = false" class="sp-modal__close">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div class="sp-spinner" style="width: 64px; height: 64px; margin: 0 auto 20px;">
            <!-- Spinner Icon -->
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#1B4D3E" stroke-width="4" opacity="0.2"/>
              <path fill="#1B4D3E" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
          </div>
          <p style="font-weight: 700; color: #1B4D3E; font-size: 18px; margin: 0; line-height: 1.4;">Mengambil Lokasi Anda<br>Terkini</p>
        </div>
      </div>
    </Transition>

    <Transition name="sp-fade">
      <div v-if="showPaymentModal" class="sp-modal">
        <div class="sp-modal__backdrop" @click="showPaymentModal = false"/>
        <div class="sp-modal__box sp-modal__box--sm">
          <button @click="showPaymentModal = false" class="sp-modal__close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <h3 class="sp-modal__title">Pembayaran</h3>
          <div class="sp-pay-list">
            <button
              v-for="method in paymentMethods"
              :key="method.id"
              @click="selectedPayment = method.id"
              :class="['sp-pay-item', selectedPayment === method.id ? 'sp-pay-item--active' : '']"
            >
              <div class="sp-pay-item__logo">{{ method.logo }}</div>
              <span class="sp-pay-item__name">{{ method.name }}</span>
              <div class="sp-pay-item__radio">
                <div v-if="selectedPayment === method.id" class="sp-pay-item__radio-dot"/>
              </div>
            </button>
          </div>
          <button @click="processPayment" class="sp-btn sp-btn--primary sp-btn--full">Bayar Sekarang</button>
        </div>
      </div>
    </Transition>

    <Transition name="sp-slide-up">
      <div v-if="toast.show" class="sp-toast">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span>{{ toast.message }}</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'pengguna'
})

import { ref, computed, watch, nextTick } from 'vue'

// ==== IMPORT LIBRARY LEAFLET JS UNTUK PETA ====
useHead({
  link: [
    { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' }
  ],
  script: [
    { src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js' }
  ]
})

// ==== STATE MANAGEMENT ====
const currentView = ref('dashboard')
const mobileMenuOpen = ref(false)
const mobileCartOpen = ref(false)
const categoryOpen = ref(true)
const categoryDropdownOpen = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedAddress = ref('Jl. Raya No. 123, Kelurahan Mulyorejo, Kecamatan Sukun, Kota Malang, Jawa Timur')
const selectedPayment = ref('qris')

const showLocationModal = ref(false)
const showMapModal = ref(false)
const showLoadingModal = ref(false)
const showPaymentModal = ref(false)

const toast = ref({ show: false, message: '' })

// ==== DATA DUMMY ====
const categories = [
  { id: 'pakan-pokok', name: 'Pakan Pokok', count: 12, svgPath: '<path d="M11 20A7 7 0 0 1 4 13V6a2 2 0 0 1 2-2h7a7 7 0 0 1 7 7v7a2 2 0 0 1-2 2h-7z"/><path d="M11 20v-7a2 2 0 0 1 2-2h7"/>' },
  { id: 'pakan-penguat', name: 'Pakan Penguat', count: 8, svgPath: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' },
  { id: 'pakan-suplemen', name: 'Pakan Suplemen', count: 6, svgPath: '<path d="M10.5 20.5l-7-7a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z"/><path d="M8.5 8.5l7 7"/>' }
]

const products = ref([
  { id: 1, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, category: 'Pakan Pokok', categoryId: 'pakan-pokok', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop', liked: false },
  { id: 2, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, category: 'Pakan Pokok', categoryId: 'pakan-pokok', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop', liked: false },
  { id: 3, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, category: 'Pakan Pokok', categoryId: 'pakan-pokok', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop', liked: false },
  { id: 4, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, category: 'Pakan Pokok', categoryId: 'pakan-pokok', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop', liked: false },
  { id: 5, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, category: 'Pakan Pokok', categoryId: 'pakan-pokok', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop', liked: false },
  { id: 6, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, category: 'Pakan Pokok', categoryId: 'pakan-pokok', image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop', liked: false },
])

const cartItems = ref([
  { id: 1, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop' },
  { id: 2, name: 'Menir Jagung Super Halus', weight: '500 Gram', price: 23000, qty: 1, image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop' },
])

const paymentMethods = [
  { id: 'qris', name: 'QRIS', logo: 'QRIS' },
  { id: 'transfer', name: 'Transfer Bank', logo: 'BANK' },
  { id: 'ewallet', name: 'E-Wallet', logo: 'E-Wal' },
  { id: 'cod', name: 'Bayar di Tempat', logo: 'COD' }
]

// ==== COMPUTED PROPERTIES ====
const selectedCategoryLabel = computed(() => {
  const cat = categories.find(c => c.id === selectedCategory.value)
  return cat ? cat.name : 'Kategori'
})

const filteredProducts = computed(() => {
  let result = products.value
  if (selectedCategory.value !== 'all') {
    result = result.filter(p => p.categoryId === selectedCategory.value)
  }
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(p => p.name.toLowerCase().includes(q))
  }
  return result
})

const cartTotal = computed(() => cartItems.value.reduce((sum, item) => sum + (item.price * item.qty), 0))
const shippingCost = ref(15000)
const discount = computed(() => cartTotal.value * 0.12)
const finalTotal = computed(() => cartTotal.value + shippingCost.value - discount.value)

// ==== FUNGSI UMUM ====
function closeMobileOverlays() {
  mobileMenuOpen.value = false
  mobileCartOpen.value = false
}

function selectCategory(id) {
  selectedCategory.value = id
  categoryDropdownOpen.value = false
}

function formatPrice(price) {
  return 'Rp ' + price.toLocaleString('id-ID') + ',00'
}

function toggleLike(productId) {
  const product = products.value.find(p => p.id === productId)
  if (product) product.liked = !product.liked
}

function addToCart(product) {
  const existing = cartItems.value.find(item => item.id === product.id)
  if (existing) {
    existing.qty++
  } else {
    cartItems.value.push({ id: product.id, name: product.name, weight: product.weight, price: product.price, qty: 1, image: product.image })
  }
  showToast('Produk ditambahkan ke keranjang')
}

function removeFromCart(itemId) {
  cartItems.value = cartItems.value.filter(item => item.id !== itemId)
}

function updateQty(itemId, delta) {
  const item = cartItems.value.find(i => i.id === itemId)
  if (item) {
    item.qty += delta
    if (item.qty <= 0) removeFromCart(itemId)
  }
}

// ==== FUNGSI POP UP LOKASI ====
function openLocationModal() {
  showLocationModal.value = true
}

function getCurrentLocation() {
  showLocationModal.value = false
  showLoadingModal.value = true
  
  setTimeout(() => {
    showLoadingModal.value = false
    selectedAddress.value = 'Jl. Soekarno Hatta No. 45, Kelurahan Lowokwaru, Kota Malang'
    showToast('Lokasi GPS berhasil diambil!')
  }, 2500)
}

async function openMapModal() {
  showLocationModal.value = false
  showMapModal.value = true
  
  await nextTick()
  
  setTimeout(() => {
    if (window.L) {
      const container = window.L.DomUtil.get('map-container');
      if(container != null) { container._leaflet_id = null; }

      const map = window.L.map('map-container').setView([-6.200000, 106.816666], 13);

      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map);

      window.L.marker([-6.200000, 106.816666]).addTo(map);
    }
  }, 300)
}

function confirmMapLocation() {
  showMapModal.value = false
  selectedAddress.value = 'Titik Lokasi Manual yang Dipilih pada Peta'
  showToast('Lokasi manual berhasil disimpan')
}

// ==== FUNGSI PEMBAYARAN & NOTIFIKASI ====
function processPayment() {
  showPaymentModal.value = false
  showToast('Pembayaran berhasil! Pesanan diproses.')
  cartItems.value = []
  currentView.value = 'dashboard'
}

function showToast(message) {
  toast.value = { show: true, message }
  setTimeout(() => { toast.value.show = false }, 3000)
}

// ==== LISTENER UNTUK DROPDOWN ====
watch(categoryDropdownOpen, (val) => {
  if (val) {
    setTimeout(() => {
      const handler = () => {
        categoryDropdownOpen.value = false
        document.removeEventListener('click', handler)
      }
      document.addEventListener('click', handler)
    }, 0)
  }
})
</script>

<style scoped>
/* ===== CSS CUSTOM (TANPA TAILWIND CLASS DI SVG) ===== */

/* Wrapper */
.sp-wrapper {
  min-height: 100vh;
  background: #F0F7F4;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: #1f2937;
  position: relative;
}

/* Overlay */
.sp-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 40;
}
@media (min-width: 1024px) {
  .sp-overlay { display: none; }
}

/* ===== SIDEBAR ===== */
.sp-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 256px;
  background: #fff;
  z-index: 50;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sp-sidebar--closed { transform: translateX(-100%); }
.sp-sidebar--open { transform: translateX(0); }
@media (min-width: 1024px) {
  .sp-sidebar { transform: translateX(0) !important; }
}

.sp-sidebar__inner {
  padding: 24px;
  flex: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.sp-sidebar__inner::-webkit-scrollbar { display: none; }

/* Logo */
.sp-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}
.sp-logo__icon {
  width: 40px;
  height: 40px;
  background: #1B4D3E;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.sp-logo__icon svg {
  width: 24px;
  height: 24px;
  display: block;
}
.sp-logo__text {
  font-size: 20px;
  font-weight: 700;
  color: #1B4D3E;
}

/* Nav */
.sp-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.sp-nav__btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: #4b5563;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  text-align: left;
  font-family: inherit;
}
.sp-nav__btn:hover {
  background: #f3f4f6;
}
.sp-nav__btn--active {
  background: #1B4D3E !important;
  color: #fff !important;
}
.sp-nav__btn svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: block;
}

.sp-nav__group {
  display: flex;
  flex-direction: column;
}

.sp-nav__sub {
  margin-top: 4px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.sp-nav__sub-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  text-align: left;
  font-family: inherit;
}
.sp-nav__sub-btn:hover {
  color: #374151;
}
.sp-nav__sub-btn--active {
  color: #1B4D3E !important;
  font-weight: 600;
  background: #E8F5E9;
}
.sp-nav__sub-btn svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: block;
}

/* User */
.sp-user {
  padding: 16px;
  border-top: 1px solid #f3f4f6;
}
.sp-user__card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f9fafb;
  border-radius: 12px;
}
.sp-user__avatar {
  width: 36px;
  height: 36px;
  background: #1B4D3E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}
.sp-user__avatar svg {
  width: 18px;
  height: 18px;
  display: block;
}
.sp-user__name {
  font-weight: 600;
  color: #374151;
  flex: 1;
  font-size: 14px;
}
.sp-user__logout {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sp-user__logout:hover { color: #ef4444; }
.sp-user__logout svg {
  width: 18px;
  height: 18px;
  display: block;
}

/* ===== MAIN ===== */
.sp-main {
  min-height: 100vh;
}
@media (min-width: 1024px) {
  .sp-main {
    margin-left: 256px;
    margin-right: 320px;
  }
}

/* Header */
.sp-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(240,247,244,0.8);
  backdrop-filter: blur(12px);
  padding: 16px 24px;
}
.sp-header__inner {
  display: flex;
  align-items: center;
  gap: 16px;
}
.sp-header__menu-btn,
.sp-header__cart-btn {
  background: none;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sp-header__menu-btn:hover,
.sp-header__cart-btn:hover {
  background: #e5e7eb;
}
.sp-header__menu-btn svg,
.sp-header__cart-btn svg {
  width: 24px;
  height: 24px;
  display: block;
}
.sp-header__cart-btn {
  position: relative;
}
.sp-header__cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  background: #ef4444;
  color: #fff;
  font-size: 11px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

/* Search */
.sp-search {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 640px;
}
.sp-search__box {
  flex: 1;
  position: relative;
}
.sp-search__icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 18px;
  height: 18px;
  display: block;
}
.sp-search__input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  font-size: 14px;
  outline: none;
  transition: all 0.2s;
  font-family: inherit;
}
.sp-search__input:focus {
  border-color: #1B4D3E;
  box-shadow: 0 0 0 3px rgba(27,77,62,0.1);
}
.sp-search__dropdown-wrap {
  position: relative;
}
.sp-search__dropdown-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  white-space: nowrap;
  font-family: inherit;
}
.sp-search__dropdown-btn:hover {
  background: #f9fafb;
}
.sp-search__dropdown-btn svg {
  width: 16px;
  height: 16px;
  display: block;
  color: #6b7280;
}
.sp-search__dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 192px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  border: 1px solid #f3f4f6;
  padding: 8px 0;
  z-index: 50;
}
.sp-search__dropdown-item {
  width: 100%;
  text-align: left;
  padding: 8px 16px;
  border: none;
  background: none;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  font-family: inherit;
}
.sp-search__dropdown-item:hover {
  background: #f9fafb;
}

/* Content */
.sp-content {
  padding: 0 24px 24px;
}

/* Hero */
.sp-hero {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: linear-gradient(135deg, #1B4D3E 0%, #2D6A4F 100%);
  padding: 32px;
  margin-bottom: 24px;
}
.sp-hero__bg {
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  height: 200px;
  color: #fff;
  opacity: 0.1;
}
.sp-hero__bg svg {
  width: 100%;
  height: 100%;
  display: block;
}
.sp-hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
}

/* ===== CSS Baru untuk Logo PNG ===== */
.sp-hero__img-wrap {
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sp-hero__png {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
/* =================================== */

.sp-hero__title {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
}
.sp-hero__subtitle {
  font-size: 36px;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  line-height: 1.1;
}
.sp-hero__dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}
.sp-hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.4);
}
.sp-hero__dot--active {
  background: #fff;
}

/* Categories */
.sp-categories {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;
}
@media (min-width: 640px) {
  .sp-categories {
    grid-template-columns: repeat(3, 1fr);
  }
}
.sp-cat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-family: inherit;
}
.sp-cat-card:hover {
  border-color: rgba(27,77,62,0.5);
}
.sp-cat-card--active {
  border-color: #1B4D3E !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.sp-cat-card__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #E8F5E9;
  color: #1B4D3E;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sp-cat-card__icon svg {
  width: 24px;
  height: 24px;
  display: block;
}
.sp-cat-card__icon--active {
  background: #1B4D3E !important;
  color: #fff !important;
}
.sp-cat-card__name {
  font-weight: 700;
  color: #1f2937;
  font-size: 15px;
}
.sp-cat-card__count {
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
}

/* Products */
.sp-products {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 640px) {
  .sp-products {
    grid-template-columns: repeat(2, 1fr);
  }
}
.sp-product {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.sp-product:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}
.sp-product__img-wrap {
  position: relative;
}
.sp-product__img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}
.sp-product__like {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 32px;
  height: 32px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.sp-product__like svg {
  width: 16px;
  height: 16px;
  display: block;
}
.sp-product__body {
  padding: 16px;
}
.sp-product__name {
  font-weight: 600;
  color: #1f2937;
  font-size: 14px;
  margin-bottom: 4px;
}
.sp-product__weight {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 8px;
}
.sp-product__badge {
  display: inline-block;
  padding: 4px 10px;
  background: #E8F5E9;
  color: #1B4D3E;
  font-size: 12px;
  border-radius: 8px;
  font-weight: 500;
  margin-bottom: 12px;
}
.sp-product__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sp-product__price {
  font-size: 18px;
  font-weight: 700;
  color: #1B4D3E;
}
.sp-product__btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #52B788;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  font-family: inherit;
}
.sp-product__btn:hover {
  background: #40916C;
}
.sp-product__btn svg {
  width: 16px;
  height: 16px;
  display: block;
}
.sp-product__btn--small {
  padding: 6px 14px;
}

/* ===== CART SIDEBAR ===== */
.sp-cart {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 320px;
  background: #fff;
  z-index: 50;
  transition: transform 0.3s ease;
  box-shadow: -4px 0 20px rgba(0,0,0,0.08);
}
.sp-cart--closed { transform: translateX(100%); }
.sp-cart--open { transform: translateX(0); }
@media (min-width: 1024px) {
  .sp-cart { transform: translateX(0) !important; }
}

.sp-cart__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sp-cart__header {
  padding: 24px;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sp-cart__title-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sp-cart__title-icon {
  width: 40px;
  height: 40px;
  background: #E8F5E9;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1B4D3E;
}
.sp-cart__title-icon svg {
  width: 20px;
  height: 20px;
  display: block;
}
.sp-cart__title {
  font-size: 18px;
  font-weight: 700;
  color: #1B4D3E;
}
.sp-cart__close {
  background: none;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sp-cart__close:hover {
  background: #f3f4f6;
}
.sp-cart__close svg {
  width: 20px;
  height: 20px;
  display: block;
}
.sp-cart__top-btn {
  margin: 16px 24px 0;
}

.sp-cart__items {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
.sp-cart__item {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: #f9fafb;
  border-radius: 12px;
  margin-bottom: 12px;
}
.sp-cart__item-img {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
  display: block;
}
.sp-cart__item-info {
  flex: 1;
  min-width: 0;
}
.sp-cart__item-name {
  font-size: 13px;
  font-weight: 500;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sp-cart__item-weight {
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
}
.sp-cart__item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
}
.sp-cart__item-price {
  font-size: 13px;
  font-weight: 600;
  color: #1B4D3E;
}
.sp-cart__item-total {
  font-size: 13px;
  font-weight: 700;
  color: #1B4D3E;
}
.sp-cart__item-remove {
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
}
.sp-cart__item-remove:hover {
  color: #ef4444;
}
.sp-cart__item-remove svg {
  width: 14px;
  height: 14px;
  display: block;
}

.sp-cart__empty {
  text-align: center;
  padding: 32px 0;
}
.sp-cart__empty-icon {
  width: 64px;
  height: 64px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  color: #9ca3af;
}
.sp-cart__empty-icon svg {
  width: 28px;
  height: 28px;
  display: block;
}
.sp-cart__empty p {
  color: #6b7280;
  font-size: 14px;
}

.sp-cart__footer {
  padding: 24px;
  border-top: 1px solid #f3f4f6;
  background: #fff;
}
.sp-cart__footer-row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 8px;
}
.sp-cart__footer-row span:first-child {
  color: #6b7280;
}
.sp-cart__footer-row span:last-child {
  font-weight: 500;
}
.sp-cart__footer-row--total {
  border-top: 1px solid #f3f4f6;
  padding-top: 12px;
  margin-top: 12px;
  margin-bottom: 16px;
}
.sp-cart__footer-row--total span:first-child {
  font-weight: 600;
  color: #1f2937;
}
.sp-cart__footer-row--total span:last-child {
  font-size: 18px;
  font-weight: 700;
  color: #1B4D3E;
}

/* ===== BUTTONS ===== */
.sp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.sp-btn--primary {
  background: #1B4D3E;
  color: #fff;
}
.sp-btn--primary:hover {
  background: #143D32;
}
.sp-btn--full {
  width: 100%;
}
.sp-btn--small {
  padding: 8px 16px;
  font-size: 13px;
}
.sp-btn svg {
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
}

/* ===== CHECKOUT ===== */
.sp-checkout {
  max-width: 900px;
  margin: 0 auto;
}
.sp-checkout__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.sp-checkout__back {
  background: none;
  border: none;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sp-checkout__back:hover {
  background: #e5e7eb;
}
.sp-checkout__back svg {
  width: 20px;
  height: 20px;
  display: block;
}
.sp-checkout__title {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
}
.sp-checkout__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 1024px) {
  .sp-checkout__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.sp-checkout__item {
  display: flex;
  gap: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
}
.sp-checkout__item-img {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
  display: block;
}
.sp-checkout__item-info {
  flex: 1;
}
.sp-checkout__item-name {
  font-weight: 600;
  color: #1f2937;
  font-size: 14px;
}
.sp-checkout__item-weight {
  font-size: 13px;
  color: #6b7280;
  margin-top: 4px;
}
.sp-checkout__item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}
.sp-checkout__item-price {
  font-weight: 700;
  color: #1B4D3E;
}

.sp-qty {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sp-qty__btn {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: #374151;
  font-family: inherit;
}
.sp-qty__btn:hover {
  background: #f3f4f6;
}
.sp-qty__val {
  width: 28px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}

/* Card */
.sp-card {
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  margin-bottom: 16px;
}
.sp-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.sp-card__title {
  font-weight: 600;
  color: #1f2937;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sp-card__title svg {
  width: 18px;
  height: 18px;
  display: block;
  color: #1B4D3E;
}
.sp-card__link {
  font-size: 13px;
  color: #1B4D3E;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-family: inherit;
}
.sp-card__text {
  font-size: 13px;
  color: #4b5563;
  line-height: 1.5;
}
.sp-card__row {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 10px;
}
.sp-card__row span:first-child {
  color: #6b7280;
}
.sp-card__row span:last-child {
  font-weight: 500;
}
.sp-card__row--total {
  border-top: 1px solid #f3f4f6;
  padding-top: 12px;
  margin-top: 12px;
}
.sp-card__row--total span:first-child {
  font-weight: 600;
  color: #1f2937;
}
.sp-card__row--total span:last-child {
  font-size: 18px;
  font-weight: 700;
  color: #1B4D3E;
}

/* ===== MODALS ===== */
.sp-modal {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.sp-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
}
.sp-modal__box {
  position: relative;
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  width: 100%;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}
.sp-modal__box--sm {
  max-width: 400px;
}
.sp-modal__box--md {
  max-width: 500px;
  padding: 0;
  overflow: hidden;
}
.sp-modal__box--center {
  text-align: center;
}
.sp-modal__close {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: none;
  cursor: pointer;
  color: #6b7280;
  z-index: 2;
}
.sp-modal__close:hover {
  background: #f3f4f6;
}
.sp-modal__close svg {
  width: 20px;
  height: 20px;
  display: block;
}
.sp-modal__close--float {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.sp-modal__title {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 20px;
  margin-top: 8px;
}
.sp-modal__body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.sp-modal__foot {
  padding: 16px 24px 24px;
}
.sp-modal__desc {
  color: #6b7280;
  font-size: 14px;
}

/* Map */
.sp-map {
  height: 320px;
  background: #E8F5E9;
  position: relative;
  overflow: hidden;
}
.sp-map__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.sp-map__pin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
}
.sp-map__pin svg {
  width: 40px;
  height: 40px;
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

/* Spinner */
.sp-spinner {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
}
.sp-spinner svg {
  width: 100%;
  height: 100%;
  display: block;
  animation: sp-spin 1s linear infinite;
}
@keyframes sp-spin {
  to { transform: rotate(360deg); }
}

/* Payment */
.sp-pay-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
.sp-pay-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-family: inherit;
}
.sp-pay-item:hover {
  border-color: #d1d5db;
}
.sp-pay-item--active {
  border-color: #1B4D3E !important;
  background: #E8F5E9 !important;
}
.sp-pay-item__logo {
  width: 48px;
  height: 32px;
  background: #f3f4f6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #4b5563;
  flex-shrink: 0;
}
.sp-pay-item__name {
  font-weight: 500;
  color: #1f2937;
  font-size: 14px;
  flex: 1;
}
.sp-pay-item__radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sp-pay-item--active .sp-pay-item__radio {
  border-color: #1B4D3E;
}
.sp-pay-item__radio-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #1B4D3E;
}

/* Toast */
.sp-toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  background: #1B4D3E;
  color: #fff;
  padding: 12px 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
}
.sp-toast svg {
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
}

/* Page title */
.sp-page-title {
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 24px;
}

/* Empty state */
.sp-empty {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  padding: 48px;
  text-align: center;
}
.sp-empty__icon {
  width: 64px;
  height: 64px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: #9ca3af;
}
.sp-empty__icon svg {
  width: 28px;
  height: 28px;
  display: block;
}
.sp-empty p {
  color: #6b7280;
}

/* Utility */
.sp-hidden-lg {
  display: flex;
}
@media (min-width: 1024px) {
  .sp-hidden-lg {
    display: none !important;
  }
}

/* Transitions */
.sp-fade-enter-active,
.sp-fade-leave-active {
  transition: opacity 0.3s ease;
}
.sp-fade-enter-from,
.sp-fade-leave-to {
  opacity: 0;
}

.sp-slide-up-enter-active,
.sp-slide-up-leave-active {
  transition: all 0.3s ease;
}
.sp-slide-up-enter-from,
.sp-slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px) !important;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}
</style>