<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("./movies");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="login-container">
    <p class="title">Login Page</p>
    <form @submit.prevent="login()">
      <input v-model="username" class="username" type="text" placeholder="Username" />
      <input v-model="password" class="password" type="password" placeholder="Password" />
      <input type="submit" class="login" value="Login" />
    </form>
    <div v-if="error">
      <p class="wrong">Incorrect Username/Password!</p>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(21, 21, 26);
}
.title {
  position: absolute;
  top: 12vh;
  left: 42vw;
  background: none;
  font-size: 4vw;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.wrong {
  position: absolute;
  top: 45vh;
  left: 42vw;
  background: none;
}
.login {
  position: absolute;
  top: 31vh;
  left: 56vw;
  height: 12vh;
  width: 7vw;
  border: none;
  background-color: rgb(44, 42, 48);
  cursor: pointer;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.username {
  position: absolute;
  height: 6vh;
  width: 15vw;
  top: 31vh;
  left: 40vw;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: none;
}
.password {
  position: absolute;
  height: 6vh;
  width: 15vw;
  top: 37vh;
  left: 40vw;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: none;
}
</style>
