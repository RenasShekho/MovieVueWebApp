<script>
import { RouterLink, RouterView } from 'vue-router'
import GenreNavView from './views/GenreNavView.vue'
export default{
  components:{GenreNavView},
}

</script>

<!-- <genre-nav-component @ShowGenreNav="ShowGenreNavi"></genre-nav-component> -->
<template>
  <genre-nav-view></genre-nav-view>
  <div class="AppcContainer">
    <header class="AppHeader">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <router-link to="/WishListCom" >Wish List</router-link>
      </nav>
    </header>
  </div>
<RouterView class="AppRouterView"/>
</template>
