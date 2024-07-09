<template>
  <div class="HomeBody">
    <movie-component></movie-component>
    <action-component></action-component>
  </div>
</template>
<script>
import ActionComponent from "./ActionComponent.vue";
import MovieComponent from "./MovieComponent.vue";
export default {
  components: { MovieComponent, ActionComponent },
};
</script>

