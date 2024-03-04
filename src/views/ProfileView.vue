<template>
  <div>
    <div class="user-container">
      <div class="user">
        <div class="user-main">
          <img :src="activeUser?.img" alt="" class="avatar" />
          <div class="user-name">{{ activeUser?.name }}</div>
        </div>
        <div class="user-bottom">
          <div class="moneyy">
            <div class="cash">{{ activeUser?.money.toFixed(2) }}₸</div>
            <div class="bonus">
              {{ activeUser?.bonus }} <img src="/public/header/egida.png" alt="" />
            </div>
            <button>Пополнить баланс</button>
          </div>
        </div>
      </div>
      <div class="user-input">
        <label class="trade" for="trade">
          <input
            id="trade"
            class="input"
            type="text"
            placeholder="Введите сюда ссылку на обмен"
            v-model="trade"
          />
          <a
            href="https://steamcommunity.com/profiles/76561199482206514/tradeoffers/privacy/#trade_offer_access_url"
            v-if="trade.length == 0"
            >Узнать
          </a>
        </label>
        <label class="login" for="login">
          <input
            id="login"
            class="input"
            type="text"
            placeholder="Введите сюда логин Steam"
            v-model="steam"
          />
          <a
            href="https://store.steamphttps://store.steampowered.com/account/owered.com/account/"
            v-if="steam.length == 0"
            >Узнать
          </a>
        </label>
      </div>
    </div>

    <div class="drop-container">
      <div class="drop" v-for="(skin, index) in activeUser?.loot" :key="skin.id">
        <p>{{ skin.title }}</p>
        <img :src="skin.img" alt="" />
        <p>{{ skin.price }}</p>
        <button @click="confirmSellIndex = index">Продать</button>
        <div v-if="confirmSellIndex === index">
          <p>Вы уверены?</p>
          <button @click="sellConfirmed(index)">Продать</button>
          <button @click="cancelSell()">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUsers } from '@/stores/users'

const activeUser = useUsers().activeUser
const trade = ref('')
const steam = ref('')
const confirmSellIndex = ref(-1)

const sellConfirmed = (index) => {
  const skin = activeUser.loot[index]
  sell(skin)
  confirmSellIndex.value = -1
}

const cancelSell = () => {
  confirmSellIndex.value = -1
}

const sell = (skin) => {
  const index = activeUser.loot.findIndex((item) => item.title === skin.title)
  if (index !== -1) {
    activeUser.money += skin.price
    activeUser.loot.splice(index, 1)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;

  margin: auto;
}
.drop-container {
  color: white;
}
.input {
  background-color: #15072b;
  color: #703dd1;
  border: 2px solid #703dd1;
  padding: 10px;
  width: 300px;
}

.user-input {
  width: 335px;
  display: flex;
  padding: 10px;
  height: 150px;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;
  background-color: rgb(72, 18, 122);
}

.moneyy {
  width: 100px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgb(72, 18, 122);
}
.user {
  height: 150px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(72, 18, 122);
}
.avatar {
  padding: 2px;
  border: 3px solid gray;
  border-radius: 5px;
  height: 100px;
}
.user-main {
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
.user img {
  width: 100px;
}
.user-name {
  color: white;
  padding-left: 10px;
}
.user-header {
  padding-top: 5px;
}
.user-bottom {
  display: flex;
  flex-direction: column;
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
.trade {
  position: relative;
  display: flex;
  align-items: center;
}

.login {
  position: relative;
  display: flex;
  align-items: center;
}
.login a {
  position: absolute;
  right: 10px;
  color: yellow;
}
.trade a {
  position: absolute;
  right: 10px;
  color: yellow;
}
</style>
