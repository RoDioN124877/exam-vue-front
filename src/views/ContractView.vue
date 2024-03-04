<template>
  <div>
    <div class="contract">
      <div v-if="contract.length != 0" v-for="skin in contract" :key="skin.id">
        <p>{{ skin.price }}</p>
        <img :src="skin.img" alt="" />
        <p>{{ skin.title }}</p>
      </div>
      <div></div>
    </div>
    <div>
      <div
        @click="addContract(skin, index)"
        v-for="(skin, index) in activeUser.loot"
        :key="skin.id"
      >
        <p>{{ skin.price }}</p>
        <img :src="skin.img" alt="" />
        <p>{{ skin.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsers } from '@/stores/users'
const activeUser = useUsers().activeUser
const contract = ref([])
const addContract = (skin: any) => {
  if (!contract.value.some((item) => item._id === skin._id)) {
    console.log("21");
    
    contract.value.push(skin)
  }
}
</script>

<style scoped>
.contract {
  display: flex;
}
</style>
