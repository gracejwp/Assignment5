<script setup>
import axios from "axios";
import { useStore } from "../store/index";
import { ref } from "vue";

const store = useStore();
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);
const movies = ref(null);

const getMovie = async () => {
  movies.value = (
    await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
      params: {
        api_key: "68f5971cdc0e94319f3db2ad6d9c8204",
      },
    })
  ).data;
};
const addItem = () => {
  store.addToCart({
    id: props.id,
    title: movies.value.title,
    poster: `https://image.tmdb.org/t/p/w500${movies.value.poster_path}`,
  });
};
await getMovie();
console.log(movies);
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <div v-if="movies">
          <img
            class="poster"
            :src="`https://image.tmdb.org/t/p/w500${movies.poster_path}`"
          />
          <div class="descBox">
            <h1 class="title">{{ movies.title }}</h1>
            <p class="release">Release date: {{ movies.release_date }}</p>
            <p class="overview">Overview: {{ movies.overview }}</p>
          </div>
        </div>
        <button class="purchase" @click="addItem()">Purchase</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}
.modal-outer-container .modal-inner-container {
  background-color: #1f2123;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}
.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1f2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
.poster {
  position: absolute;
  left: 60%;
  top: 10px;
  height: 380px;
}
.descBox {
  position: absolute;
  width: 400px;
  height: 35vh;
  top: 5%;
  left: 3%;
  background: #1f2123;
}
.title {
  position: relative;
  left: 2%;
  background: #1f2123;
  color: azure;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
}
.release {
  position: relative;
  left: 3%;
  top: 10px;
  background: #1f2123;
  color: azure;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
}
.overview {
  position: relative;
  top: 30px;
  left: 3%;
  background: #1f2123;
  color: azure;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
}
.purchase {
  position: absolute;
  top: 80%;
  left: 10%;
  width: 300px;
  height: 50px;
  border: none;
  background: rgb(48, 58, 125);
  color: azure;
  cursor: pointer;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
}
</style>
