<template>
  <div class="MovieDetails">
    <h1>{{ movie.title }}</h1>
    <!-- <img :src="movie.imageUrl" alt="Movie" /> -->
    <p v-if="movie.description">{{ movie.description }}</p>
    <p v-else>No description available.</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
  movieId: {
    type: Number,
    required: true,
  },
},  data() {
    return {
      movie: {},
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`https://feed.product.theplatform.eu/f/jGxigC/bb-da-products?form=json&fields=id,scopeIds,pricingPlan,scopes,title,productTags,offerStartDate,offerEndDate&byScopeIds=http://data.entertainment.tv.theplatform.eu/entertainment/data/Program/guid/2693468579/program_4280002765`);
      this.movie = response.data; 
      } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  },
};
</script>