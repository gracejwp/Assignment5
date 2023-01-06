import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      movies: [],
      shoppingCart: [],
    }
  },
  actions: {
    async getMovies() {
      let data = (await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
        params: {
          api_key: "68f5971cdc0e94319f3db2ad6d9c8204",
        }
      })).data.results;
      
      this.movies = data.map((movie) => {
        return {
          id: movie.id,
          poster: movie.poster_path,
          title: movie.title,
        }
      });
    },
    addToCart(item) {
      const checkMovie = this.shoppingCart.find(movie => movie.id === item.id);
      if (!checkMovie) {
        this.shoppingCart.push(item);
      }
    },
    removeFromCart(movie) {
      this.shoppingCart = this.shoppingCart.filter(i => i !== movie);
    },
  } 
});

