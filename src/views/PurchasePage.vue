<script setup>
import { useStore } from "../store/index";

const store = useStore();
</script>
<template>
  <div class="purchase-container">
    <div class="background">
      <p class="header">Shopping Cart:</p>
      <div class="cart-content" v-for="movie in store.shoppingCart">
        <p class="title">{{ movie.title }}</p>
        <img class="posters" :src="`https://image.tmdb.org/t/p/w500${movie.poster}`" />
        <button class="remove" @click="store.removeFromCart(movie)">Remove Movie</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.purchase-container {
  background-color: rgb(21, 21, 26);
  width: 100vw;
}

.background {
  background-color: rgb(21, 21, 26);
  height: 100vh;
  width: 100vw;
}

.header {
  background: none;
  height: 7vh;
}

.cart-content {
  position: relative;
  width: 100vw;
  background-color: rgb(21, 21, 26);
}

.posters {
  height: 20vh;
}

.title {
  position: absolute;
  background: none;
  top: 1vh;
  left: 9vw;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
}

.remove {
  position: absolute;
  background: rgb(48, 58, 125);
  border: none;
  top: 10vh;
  left: 9vw;
  width: 12vw;
  height: 7vh;
  cursor: pointer;
}
</style>
