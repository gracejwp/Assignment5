<script setup></script>

<template>
  <div class="header-container">
    <p>Retail Movie Site</p>
    <RouterLink to="/login" custom v-slot="{ navigate }">
      <button class="security" @click="navigate" role="link">Login</button>
    </RouterLink>
  </div>
</template>
<style scoped>
.header-container {
  position: absolute;
  width: 100vw;
  height: 30vh;
  color: rgb(255, 255, 255);
  background-color: rgb(21, 21, 26);
}
.security {
  position: absolute;
  left: 88vw;
  width: 10vw;
  height: 5vh;
  color: aliceblue;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: none;
  background-color: rgb(44, 42, 48);
  cursor: pointer;
}
p {
  position: absolute;
  top: 2vh;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 80px;
  left: 4vw;
  background: none;
}
</style>
