<template>
  <div>
    <div v-for="skin in skins.data" :key="skin.id">
      <p>{{ skin.price }}</p>
      <img :src="skin.img" alt="" />
      <p>{{ skin.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const skins = ref<any>()

onMounted(async () => {
  const data = await fetch('http://localhost:8081/')
  skins.value = await data.json()
})
</script>

<style scoped></style>
