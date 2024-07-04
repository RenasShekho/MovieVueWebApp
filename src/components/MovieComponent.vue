<template>
  <div class="HomeBody">
    <h1>All series</h1>
    <div class="MoviesContainer">
      <div class="movieCard" v-for="movie in movies" :key="movie.title">
        <router-link :to="{ path: '/movieDetailsCom', query:{ title: movie.title, description:movie.description} }">        <!-- <router-link :to="`/MovieDetailsCom/${movie.title}${movie.description}`" > -->
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
    async fetchMovies() {
      try {
        const response = await axios.get(
          "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series"
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

  
  