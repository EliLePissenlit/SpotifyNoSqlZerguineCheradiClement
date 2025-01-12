import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; 

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Artists",
    name: "artists",
    component: () => import("../views/Artist.vue"),
  },
  {
    path: "/Playlists",
    name: "Playlists",
    component: () => import("../views/Playlist.vue"),
  },
  {
    path: "/Tracks",
    name: "tracks",
    component: () => import("../views/Tracks.vue"),
  },
  {
    path: "/Login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/Register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router;
