<template>
  <div class="hp-view animate-fade">
    <div class="hp-card">
      <div class="hp-card__header"><h3 class="hp-card__title"><span class="hp-dot hp-dot--dark"></span> Transaksi</h3></div>
      <div class="hp-table-wrap">
        <table class="hp-table">
          <thead><tr><th>ID TRANSAKSI</th><th>TANGGAL</th><th>METODE</th><th>QUANTITY</th><th>TOTAL TRANSAKSI</th><th>JENIS TRANSAKSI</th></tr></thead>
          <tbody>
            <tr v-for="(item, i) in transaksiData" :key="i">
              <td><strong>{{ item.id }}</strong></td>
              <td><strong>{{ item.tanggal }}</strong></td>
              <td><span :class="['hp-badge', item.metode === 'Kasir Offline' ? 'hp-badge--yellow-light' : 'hp-badge--blue-light']">{{ item.metode }}</span></td>
              <td><strong>{{ item.qty }}</strong></td>
              <td><strong>{{ item.total }}</strong></td>
              <td><span :class="['hp-badge', item.jenis === 'Cash' ? 'hp-badge--yellow-light' : 'hp-badge--blue-light']">{{ item.jenis }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ transaksiData: Array })
</script>