<script setup></script>
<template>
  <div class="hero-container">
    <img
      class="theater"
      src="https://images.pond5.com/film-background-footage-050676340_iconl.jpeg"
    />
    <div class="overlay"></div>
    <p class="text">
      Welcome to the Retail Movie Site! Browse the trending movies of the week and
      purchase them for the best prices!
    </p>
  </div>
</template>
<style scoped>
.hero-container {
  position: absolute;
  top: 20vh;
  width: 100vw;
  height: 60vh;
}
.text {
  position: absolute;
  top: 13%;
  left: 2%;
  font-size: 4rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: aliceblue;
  background: none;
}
.theater {
  position: absolute;
  height: 60vh;
  width: 100vw;
}
.overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.553);
  height: 60vh;
  width: 100vw;
}
</style>
