<template>
  <div class="HomeBody">
    <h1>Details</h1>
    <div class="movieDetailsContainer">
      <button>
        <img :src="imageUrl" />
        <div class="detailsBtnContainer">
          <div>
            <h1 class="h1Title">Title:</h1>
            <h1>{{ $route.query.title }}</h1>
          </div>
          <div>
            <h2>Description:</h2>
            <h2>{{ $route.query.description }}</h2>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
    <script>
export default {
  data() {
    console.log(this.$route.query);
    return {
      imageUrl: "/src/assets/Images/maxresdefault.jpg",
    };
  },
};
</script>
  
    
    