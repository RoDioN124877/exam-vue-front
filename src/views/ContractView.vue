<template>
  <div>
    <div class="contract">
      <div class="contract-skins">
        <div
          v-if="contract.length != 0"
          v-for="(skin, index) in contract"
          :key="skin.id"
          @click="removeContract(index)"
        >
          <p>{{ skin.price }}</p>
          <img :src="skin.img" alt="" />
          <p>{{ skin.title }}</p>
        </div>
      </div>

      <button v-if="contract.length >= 3" @click="start()">Start</button>
      <div></div>
    </div>
    <div class="skins">
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
import { ref, onMounted } from 'vue'
import { useUsers } from '@/stores/users'
const activeUser = useUsers().activeUser
const skins = ref<any>([])
const contract = ref([])
const addContract = (skin: any) => {
  if (contract.value.length === 10) return

  if (!contract.value.some((item) => item._id === skin._id)) {
    console.log('21')
    contract.value.push(skin)
  }
}
const removeContract = (index: number) => {
  contract.value.splice(index, 1)
}
const start = () => {
  if (contract.value.length === 0) return

  let totalPrice = 0
  contract.value.forEach((element) => {
    totalPrice += element.price
  })

  const newPrice = totalPrice * (0.5 + Math.random())

  let closestSkin = skins.value[0]
  let minDiff = Math.abs(skins.value[0].price - newPrice)
  skins.value.forEach((skin) => {
    const diff = Math.abs(skin.price - newPrice)
    if (diff < minDiff) {
      minDiff = diff
      closestSkin = skin
    }
  })

  activeUser.loot = activeUser.loot.filter(
    (skin) => !contract.value.some((contractSkin) => contractSkin._id === skin._id)
  )

  const currentDate = new Date()
  const milliseconds = currentDate.getTime()
  closestSkin._id += milliseconds
  activeUser.loot.push(closestSkin)
  contract.value = []
}

onMounted(async () => {
  const data = await fetch('http://localhost:8081/')
  const res = await data.json()
  skins.value = res.data
})
</script>

<style scoped>
.contract-skins {
  display: flex;
  color: white;
}
.skins {
  display: flex;
  width: 500px;
  flex-wrap: wrap;
  color: white;
}
</style>
