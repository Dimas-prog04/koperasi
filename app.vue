<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Isi 'superadmin' secara default untuk bypass login saat coding/testing
const userRole = useState('userRole', () => 'superadmin')
const adminPage = useState('adminPage', () => 'dashboard')
</script>