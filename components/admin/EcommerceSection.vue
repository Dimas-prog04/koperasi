<!-- components/admin/EcommerceSection.vue -->
<template>
  <section class="page-section active" id="page-ecommerce">
    <!-- Kategori Produk -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Kategori Produk</h3>
      </div>
      <div class="kas-toolbar">
        <div class="search-box"><input type="text" placeholder="Masukkan Nama Produk..."></div>
        <div class="search-box"><input type="text" placeholder="Masukkan Nomor..."></div>
        <button class="btn-blue"><i class="fas fa-plus"></i> TAMBAH</button>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>NOMOR</th><th>NAMA PRODUK</th><th>AKSI</th></tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td class="text-bold">01</td>
              <td>Mie Sedap Goreng</td>
              <td>
                <!-- Tombol Edit memicu Modal Edit -->
                <button class="action-btn edit" @click="showEditModal = true"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Banner -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Banner</h3>
      </div>
      <div class="kas-toolbar">
        <div class="search-box"><input type="text" placeholder="Masukkan Nama Produk..."></div>
        <div class="search-box"><input type="text" placeholder="Masukkan Nomor..."></div>
        <button class="btn-blue"><i class="fas fa-plus"></i> TAMBAH</button>
      </div>
      <button class="btn-dark-full"><i class="fas fa-image"></i> Masukan Gambar</button>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th>NOMOR</th><th>NAMA PRODUK</th><th>GAMBAR</th><th>AKSI</th></tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td class="text-bold">01</td>
              <td>Mie Sedap Goreng</td>
              <td><a href="#" class="link-blue">Mie_Sedap.jpg</a></td>
              <td>
                <!-- Tombol View dan Edit -->
                <button class="action-btn view" @click="showBannerModal = true"><i class="fas fa-eye"></i></button>
                <button class="action-btn edit" @click="showEditModal = true"><i class="fas fa-pen"></i></button>
                <button class="action-btn delete"><i class="fas fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- MODAL BANNER (Gambar 2) -->
    <div v-if="showBannerModal" class="modal-overlay active" @click.self="showBannerModal = false">
      <div class="modal modal-lg" style="background: white; border-radius: 16px; padding: 24px; max-width: 600px; position: relative;">
        <!-- Header -->
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
          <button @click="showBannerModal = false" style="background: none; border: none; font-size: 28px; font-weight: 800; cursor: pointer; color: #000; line-height: 1;">&times;</button>
          <h3 style="color: #1b4332; font-weight: 800; font-size: 20px; margin: 0;">Banner</h3>
        </div>

        <!-- Body Image -->
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://placehold.co/400x250/fff/333?text=Gambar+Mie+Sedaap" alt="Mie Sedaap" style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); max-width: 100%; height: auto;">
          <h3 style="color: #1b4332; font-size: 22px; font-weight: 800; margin-top: 16px;">Mie Sedap Goreng</h3>
        </div>

        <!-- Inputs Info -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div>
            <label style="font-size: 11px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">Kode Produk</label>
            <input type="text" value="TX-076-01" readonly style="width: 100%; padding: 12px; border: 1px solid #f1f5f9; border-radius: 8px; font-weight: 700; color: #333; background: #f8fafc; outline: none; text-align: center;">
          </div>
          <div>
            <label style="font-size: 11px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">Jenis Produk</label>
            <input type="text" value="Makanan" readonly style="width: 100%; padding: 12px; border: 1px solid #f1f5f9; border-radius: 8px; font-weight: 700; color: #333; background: #f8fafc; outline: none; text-align: center;">
          </div>
          <div>
            <label style="font-size: 11px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">Stok</label>
            <input type="text" value="30 Pcs" readonly style="width: 100%; padding: 12px; border: 1px solid #f1f5f9; border-radius: 8px; font-weight: 700; color: #333; background: #f8fafc; outline: none; text-align: center;">
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL EDIT (Gambar 3) -->
    <div v-if="showEditModal" class="modal-overlay active" @click.self="showEditModal = false">
      <div class="modal modal-sm" style="background: white; border-radius: 16px; padding: 24px; max-width: 400px; position: relative;">
        <!-- Header -->
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 30px;">
          <button @click="showEditModal = false" style="background: none; border: none; font-size: 28px; font-weight: 800; cursor: pointer; color: #000; line-height: 1;">&times;</button>
          <h3 style="color: #1b4332; font-weight: 800; font-size: 20px; margin: 0;">Edit</h3>
        </div>

        <!-- Body -->
        <div style="text-align: center;">
          <h4 style="color: #1b4332; font-size: 16px; font-weight: 800; margin-bottom: 20px;">Mengedit Informasi</h4>
          <button @click="showEditModal = false" style="background: #1b4332; color: white; width: 100%; padding: 14px; border: none; border-radius: 8px; font-weight: 800; font-size: 14px; cursor: pointer; letter-spacing: 0.5px;">SIMPAN</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

// State untuk mengatur popup modal banner dan modal edit
const showBannerModal = ref(false)
const showEditModal = ref(false)
</script>