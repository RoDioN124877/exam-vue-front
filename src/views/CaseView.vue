<template>
  <div>
    <section class="ss">
      <div v-for="skin in skins" :key="skin.id">
        <p>{{ skin.price }}</p>
        <img :src="skin.img" alt="" />
        <p>{{ skin.title }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const skins = ref<any>([])

onMounted(async () => {
  const data = await fetch('http://localhost:8081/')
  const res = await data.json()
  skins.value = res.data
})
</script>

<style scoped>
.ss {
  display: flex;
  flex-wrap: wrap;
}
.ss div {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
