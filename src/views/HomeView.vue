<template>
  <div>
    <header>
      <nav>
        <div class="logo"><img src="/public/logo.png" alt="" /></div>
        <ul>
          <li class="upgrate">
            <a href="">
              <img src="/public/upgrade.png" alt="" />
            </a>
          </li>
          <li class="contract">
            <a href="">
              <img src="/public/contract.png" alt="" />
            </a>
          </li>
          <li class="gift">
            <a href="">
              <img src="/public/gift.png" alt="" />
            </a>
          </li>
        </ul>
      </nav>
      <div class="user">
        <div class="avatar">
          <img
            src="https://i.pinimg.com/564x/a6/f4/ca/a6f4ca53c8d505b3014256de67ccd547.jpg"
            alt=""
          />
        </div>
        <div class="user-main">
          <div class="user-header">
            <div class="user-name">{{ user.name }}</div>
          </div>
          <div class="user-bottom">
            <div class="money">
              <div class="cash">{{ user.money }}₸</div>
              <div class="bonus">{{ user.bonus }} <img src="/public/egida.png" alt="" /></div>
            </div>

            <div class="exit"><img src="/public/exit.png" alt="" /></div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div v-for="skin in skins" :key="skin.id">
        <p>{{ skin.price }}</p>
        <img :src="skin.img" alt="" />
        <p>{{ skin.title }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
const user = reactive({
  name: 'mode:Ян Брагин',
  money: 2000,
  bonus: 0
})

const skins = ref<any>([])

onMounted(async () => {
  const data = await fetch('http://localhost:8081/')
  const res = await data.json()
  skins.value = res.data
})
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: hsl(270, 77%, 15%);
  padding: 10px 0 10px 20px;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  height: 65px;
}
.logo:hover{
  opacity: 0.9; 
  transition: 0.2s;
  cursor: pointer;
}
header nav {
  display: flex;
  gap: 10px;
}
header nav ul {
  display: flex;
  gap: 20px;
}
header nav ul li {
  display: flex;
  align-items: center;
  justify-content: center;
}
header nav ul li a img {
  width: 30px;
  height: 30px;
}
header nav ul li:hover{
  transform: scale(1.3);
  transition: 0.3s;
}
.user {
  height: 58px;
  width: 300px;
  display: flex;
}
.avatar {
  padding: 2px;
  border: 3px solid gray;
  border-radius: 5px;
  height: 58px;
}
.user-main {
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
.user img {
  width: 50px;
}
.user-name {
  color: white;
  padding-left: 10px;
}
.user-header {
  padding-top: 5px;
}
.user-bottom {
  background-color: rgb(72, 18, 122);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
}
.money {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
.cash {
  color: rgb(255, 255, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
.bonus img {
  width: 20px;
}
.bonus {
  color: rgb(238, 0, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
.exit {
  display: flex;
  justify-content: center;
  align-items: center;
}
.exit img {
  width: 20px;
}

main{
  display: flex;
  flex-wrap: wrap;
  
}
main div{
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
