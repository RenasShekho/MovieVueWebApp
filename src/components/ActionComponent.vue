<template>
  <div class="HomeBody">
    <h1>Action</h1>
    <div class="MoviesContainer">
      <div class="movieCard" v-for="movie in movies" :key="movie.title">
        <button class="addToWishlist" @click="addToWishlist(movie)">
          Add to Wishlist
        </button>
        <router-link
          class="RouterLinkMovie"
          :to="{
            path: '/movieDetailsCom',
            query: { title: movie.title, description: movie.description },
          }"
        >
          <img class="MovieCardImg" :src="imageUrl" />
          <span class="title">{{ movie.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
  <script>
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  data() {
    return {
      movies: [],
      imageUrl: "/src/assets/Images/maxresdefault.jpg",
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    addToWishlist(movie) {
      const currentWishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];
      const alreadyInWishlist = currentWishlist.some(
        (item) => item.title === movie.title
      );
      try {
        if (!alreadyInWishlist) {
          currentWishlist.push(movie);
          localStorage.setItem("wishlist", JSON.stringify(currentWishlist));
        } else {
          //Display a message indicating the movie is already in the wishlist
          console.warn("Movie already exists in wishlist");
        }
      } catch {
        localStorage.removeItem;
      }
    },
    async fetchMovies() {
      try {
        const response = await axios.get(
          "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-20&byTags=genre:action&byYear=2017&byProgramType=movie"
        );
        const data = response.data;
        this.movies = data.entries.map((entry) => ({
          title: entry.title,
          description: entry.description,
        }));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
  },
};
</script>

  
  