import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GenreNav from "@/components/GenreNavComponent.vue";
import ActionComponent from "@/components/ActionComponent.vue";
import MovieComponent from "@/components/MovieComponent.vue";
import MocieDetailsComponent from "@/components/MovieDetailsComponent.vue";
import WishListComponent from "@/components/WishListComponent.vue";
import GenreNavView from "@/views/GenreNavView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/GenreNav", // GenreNav component
      name: "genreNav",
      component: GenreNav,
    },
    {
      path: "/ActionCom", //Action Component
      name: "actionComponent",
      component: ActionComponent,
    },
    {
      path: "/MovieCom", //Movie component
      name: "movieComponent",
      component: MovieComponent,
      props: true, // To make route parameters available as props
    },
    {
      path: "/MovieDetailsCom",
      name: "movieDetailsComponent",
      component: MocieDetailsComponent,
    },
    {
      path: "/WishListCom",
      name: "wishLisatComponent",
      component: WishListComponent,
    },
    {
      path: "/GenreNavView",
      name: "genreNavView",
      component: GenreNavView,
    },
  ],
});

export default router;
