<template>
  <div>
    <header>
      <nav>
        <router-link :to="{ name: 'home' }" class="logo"
          ><img src="/public/logo.png" alt=""
        /></router-link>
        <ul>
          <li class="upgrate">
            <router-link :to="{ name: 'upgrade' }">
              <img src="/public/header/upgrade.png" alt="" />
            </router-link>
          </li>
          <li class="contract">
            <router-link :to="{ name: 'contract' }">
              <img src="/public/header/contract.png" alt="" />
            </router-link>
          </li>
          <li class="gift">
            <router-link :to="{ name: 'gift' }">
              <img src="/public/header/gift.png" alt="" />
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="user">
        <router-link :to="{ name: 'profile' }" class="avatar">
          <img :src="activeUser.img" alt="" />
        </router-link>
        <div class="user-main">
          <router-link :to="{ name: 'profile' }" class="user-header">
            <div class="user-name">{{ activeUser.name }}</div>
          </router-link>
          <div class="user-bottom">
            <div class="money">
              <div class="cash">{{ activeUser.money }}₸</div>
              <div class="bonus">
                {{ activeUser.bonus }} <img src="/public/header/egida.png" alt="" />
              </div>
            </div>

            <div class="exit"><img src="/public/header/exit.png" alt="" /></div>
          </div>
        </div>
      </div>
    </header>

    <router-view class="main"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useUsers } from '@/stores/users'
const users = useUsers()
const activeUser = users.users.active
</script>

<style scoped>
.main {
  padding-top: 80px;
}
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: hsl(270, 77%, 15%);
  padding: 10px 0 10px 20px;
  position: fixed;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  height: 65px;
}
.logo:hover {
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
header nav ul li:hover {
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
</style>
@/stores/users
