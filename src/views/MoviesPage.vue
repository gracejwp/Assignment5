<script setup>
import SiteModal from "../components/SiteModal.vue";
import { useStore } from "../store/index";
import { ref } from "vue";

const store = useStore();
const showModal = ref(false);
const selectedId = ref(0);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

await store.getMovies();
</script>
<template>
  <div class="movies-container">
    <p class="title">Trending Movies:</p>
    <div class="parent">
      <img
        class="posters"
        v-for="movie in store.movies"
        :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
        @click="openModal(movie.id)"
      />
    </div>
    <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId"> </SiteModal>
    <RouterLink to="/purchase" custom v-slot="{ navigate }">
      <font-awesome-icon
        icon="fa-solid fa-cart-shopping"
        class="cart"
        @click="navigate"
        role="link"
      />
    </RouterLink>
  </div>
</template>

<style scoped>
.movies-container {
  background-color: rgb(21, 21, 26);
  width: 100vw;
}

.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 9vh;
  width: 100%;
  background-color: rgb(21, 21, 26);
}

.title {
  background: none;
  height: 10vh;
}

.posters {
  height: 50vh;
}

.cart {
  position: absolute;
  top: 2vh;
  left: 93vw;
  height: 5vh;
  background: none;
  color: aliceblue;
  cursor: pointer;
}
</style>
