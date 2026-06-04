<!-- components/admin/AktifitasSection.vue -->
<template>
  <section class="page-section active" id="page-aktifitas">
    <!-- Employee Cards -->
    <div class="employee-grid">
      <div class="employee-card" v-for="i in 3" :key="i">
        <div class="employee-avatar"><i class="fas fa-user"></i></div>
        <div class="employee-info">
          <h4>Dashboard Karyawan {{ i }}</h4>
          <span class="badge-status online"><span class="status-dot-blue"></span> STATUS ONLINE</span>
        </div>
      </div>
      <div class="employee-card">
        <div class="employee-avatar"><i class="fas fa-user"></i></div>
        <div class="employee-info">
          <h4>Dashboard Karyawan 4</h4>
          <span class="badge-status offline"><span class="status-dot-red"></span> Status Offline</span>
        </div>
      </div>
    </div>

    <!-- Activity Table -->
    <div class="content-card">
      <div class="card-header">
        <h3 class="card-title"><span class="bullet"></span> Aktifitas</h3>
      </div>
      <div class="kas-toolbar">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Cari Hash...">
        </div>
        <div class="select-box">
          <select><option>Kategori</option></select>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>JUDUL AKTIFITAS</th>
              <th>HASH</th>
              <th>TANGGAL</th>
              <th>WAKTU PENCATATAN</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i">
              <td>Penghapusan Tabel</td>
              <td>768789654I83YFHVB J6R5E</td>
              <td>12-04-2026</td>
              <td>09.00 AM</td>
              <!-- Tombol Mata untuk memicu Modal -->
              <td><button class="action-btn view" @click="showDetailModal = true"><i class="fas fa-eye"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- MODAL DETAIL LOG AKTIFITAS -->
    <div v-if="showDetailModal" class="modal-overlay active" @click.self="showDetailModal = false">
      <div class="modal modal-lg" style="background: white; border-radius: 16px; max-width: 750px; width: 95%; max-height: 90vh; overflow-y: auto; padding-bottom: 20px;">
        
        <!-- Header Modal -->
        <div style="padding: 24px 30px; display: flex; align-items: center; gap: 16px; position: sticky; top: 0; background: white; z-index: 10; border-bottom: 1px solid #f1f5f9;">
          <button @click="showDetailModal = false" style="background: none; border: none; font-size: 28px; font-weight: 800; cursor: pointer; color: #000; line-height: 1;">&times;</button>
          <h3 style="color: #1b4332; font-weight: 800; font-size: 20px; margin: 0;">Detail Log Aktifitas</h3>
        </div>

        <div style="padding: 0 30px;">
          <!-- INFORMASI UTAMA -->
          <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 20px; background: #fcfcfc;">
            <div style="font-size: 11px; font-weight: 800; color: #2d6a4f; margin-bottom: 16px;">&#8226; INFORMASI UTAMA</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">JUDUL AKTIFITAS</label>
                <input type="text" value="Penghapusan Tabel" readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 700; color: #333; background: white; outline: none;">
              </div>
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">TABEL TERDAMPAK</label>
                <input type="text" value="Tabel_Produk" readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 700; color: #333; background: white; outline: none;">
              </div>
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">NAMA PENGGUNA</label>
                <input type="text" value="Giska678" readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 700; color: #333; background: white; outline: none;">
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 16px;">
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">DESKRIPSI LENGKAP</label>
                <textarea readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 600; color: #333; background: white; outline: none; height: 60px; resize: none;">Tabel data produk TX-678-01 Telah di hapus</textarea>
              </div>
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">TIPE AKSI</label>
                <span style="display: inline-block; padding: 6px 12px; border: 1px solid #f59e0b; color: #f59e0b; border-radius: 4px; font-size: 12px; font-weight: 800;">UPDATED</span>
              </div>
            </div>
          </div>

          <!-- JEJAK KREDENSIAL & LOKASI -->
          <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 16px; background: #fcfcfc;">
            <div style="font-size: 11px; font-weight: 800; color: #2d6a4f; margin-bottom: 16px;">&#8226; JEJAK KREDENSIAL & LOKASI</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">IP ADDRESS</label>
                <input type="text" value="192.168.1.1" readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 700; color: #333; background: white; outline: none;">
              </div>
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">KORDINAT LOKASI (LAT)</label>
                <input type="text" value="-0.502106" readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 700; color: #333; background: white; outline: none;">
              </div>
              <div>
                <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">KORDINAT LOKASI (LONG)</label>
                <input type="text" value="117.153709" readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 700; color: #333; background: white; outline: none;">
              </div>
            </div>
            <div>
              <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">USER AGENT (BROWSER/OS)</label>
              <input type="text" value="CHROME,2342343, LINUX" readonly style="width: 100%; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 700; color: #333; background: white; outline: none;">
            </div>
          </div>

          <!-- PERBANDINGAN DATA (JSON) -->
          <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 16px; background: #fcfcfc;">
            <div style="font-size: 11px; font-weight: 800; color: #2d6a4f; margin-bottom: 16px;">&#8226; PERBANDINGAN DATA (JSON)</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div>
                <label style="font-size: 11px; font-weight: 700; color: #333; display: block; margin-bottom: 8px;">Data Lama (Old)</label>
                <table style="width: 100%; border-collapse: collapse; font-size: 12px; background: white; border: 1px solid #e2e8f0;">
                  <thead style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <tr><th style="padding: 8px; text-align: left; font-weight: 600;">Key</th><th style="padding: 8px; text-align: left; font-weight: 600;">Value</th></tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px;">status</td><td style="padding: 8px;">Pending</td></tr>
                    <tr><td style="padding: 8px;">updated_at</td><td style="padding: 8px;">2026-05-23T03:31:45.000000Z</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <label style="font-size: 11px; font-weight: 700; color: #333; display: block; margin-bottom: 8px;">Data Baru (New)</label>
                <table style="width: 100%; border-collapse: collapse; font-size: 12px; background: white; border: 1px solid #e2e8f0;">
                  <thead style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
                    <tr><th style="padding: 8px; text-align: left; font-weight: 600;">Key</th><th style="padding: 8px; text-align: left; font-weight: 600;">Value</th></tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px;">status</td><td style="padding: 8px;">Diterima</td></tr>
                    <tr><td style="padding: 8px;">updated_at</td><td style="padding: 8px;">2026-05-23 06:12:33</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- INTEGRITAS KEAMANAN -->
          <div style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 16px; background: #fcfcfc;">
            <div style="font-size: 11px; font-weight: 800; color: #2d6a4f; margin-bottom: 12px;">&#8226; INTEGRITAS KEAMANAN</div>
            <label style="font-size: 10px; font-weight: 800; color: #1b4332; display: block; margin-bottom: 6px;">TRANSACTION HASH</label>
            <input type="text" value="768789654I83YFHVB J6R5E" readonly style="width: 100%; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-weight: 800; color: #333; background: white; outline: none; font-family: monospace; font-size: 14px;">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// State untuk membuka/menutup modal detail
const showDetailModal = ref(false)
</script>