<template>
  <div>
    <section class="rulet">
      <div>
        <div class="select-skin">
          <p>{{ select.price }}</p>
          <img :src="select.img" alt="" />
          <p>{{ select.title }}</p>
        </div>
      </div>
      <div class="dram-contauner">
        <div class="dram">
          <div class="s">↑</div>
          <p>{{ (select.price / (change.price / 100)).toFixed(2) }}%</p>
        </div>
        <button @click="start">начать</button>
      </div>
      <div>
        <div class="change-skin">
          <p>{{ change.price }}</p>
          <img :src="change.img" alt="" />
          <p>{{ change.title }}</p>
        </div>
      </div>
    </section>
    <section class="action">
      <div class="select-skins">
        <div
          @click="selectSkin(skin)"
          class="select-skin"
          v-for="skin in activeUser.loot"
          :key="skin.id"
        >
          <p>{{ skin.price }}</p>
          <img :src="skin.img" alt="" />
          <p>{{ skin.title }}</p>
        </div>
      </div>
      <div class="change-skins">
        <div
          @click="changeSkins(skin)"
          class="change-skin"
          v-for="skin in filteredSkins"
          :key="skin.id"
        >
          <div v-show="select.price < skin.price">
            <p>{{ skin.price }}</p>
            <img :src="skin.img" alt="" />
            <p>{{ skin.title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useUsers } from '@/stores/users'

const skins = ref<any>([])
const activeUser = useUsers().activeUser
const select = ref<any>({
  price: undefined,
  img: undefined,
  title: undefined
})
const change = ref<any>({
  price: undefined,
  img: undefined,
  title: undefined
})

const filteredSkins = computed(() => {
  return skins.value.filter((skin) => skin.price > select.value.price)
})

const selectSkin = (skin: any) => {
  select.value = skin
}
const changeSkins = (skin: any) => {
  change.value = skin
}
const start = () => {
  const selectedSkinIndex = activeUser.loot.findIndex((skin) => skin.title === select.value.title)

  if (selectedSkinIndex !== -1) {
    activeUser.loot.splice(selectedSkinIndex, 1)
  }
  const chance = (Math.random() * 100).toFixed(2)

  if ((select.value.price / (change.value.price / 100)).toFixed(2) > chance) {
    activeUser.loot.push(change.value)
  }
  select.value.title = undefined
  select.value.img = undefined
  select.value.price = undefined
}
onMounted(async () => {
  const data = await fetch('http://localhost:8081/')
  const res = await data.json()
  skins.value = res.data
})
</script>

<style scoped>
.dram-contauner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.select-skins {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 500px;
  overflow-y: scroll;
  height: 200px;
}
.select-skin {
  width: 150px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}
.change-skins {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 200px;
  overflow-y: scroll;
}
.change-skin {
  width: 150px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}
.action {
  display: flex;
  justify-content: center;
  align-items: center;
}
.rulet {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 1440px;
  height: 200px;
}
.dram {
  border: 10px solid slateblue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  line-height: 44px;
}
.dram::before {
  content: '';
  position: absolute;
  width: 50px;
  height: calc(100%);
  border-width: 10px 10px 10px 0;
  border-style: solid solid solid none;
  border-color: red;
  border-radius: 0 50px 50px 0;
  transform-origin: 0 25px;
  display: block;
  position: absolute;
  top: -10px;
  left: 30px;
}
.s {
  position: absolute;
  top: 0px; /* Располагаем стрелку над .dram */
}

.rotate {
  transform: rotate(360deg); /* Конечный угол вращения */
}
</style>
