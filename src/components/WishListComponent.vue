<template>
  <div v-if="wishlist.length">
    <h1>Wishlist</h1>
    <div>
      <div v-for="movie in wishlist" :key="movie.id">
        <router-link
          :to="{
            path: '/movieDetailsCom',
            query: { title: movie.title, description: movie.description },
          }"
        >
          <img class="MovieCardImg" :src="imageUrl" />
          <span class="title">{{ movie.title }}</span>
        </router-link>
        <button class="removeButton" @click="removeFromWishlist(movie)">
          Remove
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Wishlist</h1>
    <p>Your wishlist is currently empty.</p>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
      imageUrl: "/src/assets/Images/maxresdefault.jpg",
    };
  },
  methods: {
    removeFromWishlist(movie) {
      const updatedWishlist = this.wishlist.filter(
        (item) => item.title !== movie.title
      );
      this.wishlist = updatedWishlist;
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    },
  },
  created() {
    const wishlistData = JSON.parse(localStorage.getItem("wishlist"));
    if (wishlistData && Array.isArray(wishlistData)) {
      this.wishlist = wishlistData;
    } else {
      this.wishlist = [];
      localStorage.setItem("wishlist", JSON.stringify([])); // Set empty array
    }
  },
};
</script>