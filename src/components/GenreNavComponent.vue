<template>
  <header>
    <div class="GenreNav" >
      <nav>
        <RouterLink to="/ActionCom">Action | (20)</RouterLink>
        <RouterLink to="/MovieCom">All series </RouterLink>
        <RouterLink to="/MovieCom">Comedy</RouterLink>
        <RouterLink to="/ActionCom">Thriller</RouterLink>
        <RouterLink to="/ActionCom">War</RouterLink>
        <RouterLink to="/ActionCom">Romance</RouterLink>
        <RouterLink to="/ActionCom">Drama</RouterLink>
        <RouterLink to="/ActionCom">Crime</RouterLink>
        <RouterLink to="/ActionCom">Documentary</RouterLink>
        <RouterLink to="/ActionCom">Horror</RouterLink>
      </nav>
    </div>
  </header>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default{
}
</script>