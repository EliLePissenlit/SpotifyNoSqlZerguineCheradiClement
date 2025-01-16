<template>


  
        <ul class="flex space-x-6 text-lg font-semibold">
          <li>
            <router-link to="/" class="nav-link">Accueil</router-link>
          </li>
          <li>
            <router-link to="/artists" class="nav-link">Artistes</router-link>
          </li>
          <li>
            <router-link to="/playlists" class="nav-link">Playlistes</router-link>
          </li>
          <li>
            <router-link to="/tracks" class="nav-link">Musiques</router-link>
          </li>
        </ul>
  
        
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useAuthStore } from "../stores/auth";
  
  export default defineComponent({
    name: "Navbar",
    setup() {
      const authStore = useAuthStore();
      const isLoggedIn = computed(() => authStore.user !== null);
  
      const logout = () => {
        authStore.logout();
        window.location.href = "/";
      };
  
      return { isLoggedIn, logout };
    },
  });
  </script>
  
  <style scoped>
  .nav-link {
    position: relative;
    padding-bottom: 5px;
  }
  
  .nav-link::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: white;
    left: 0;
    bottom: -2px;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  
  .nav-link:hover::after {
    transform: scaleX(1);
  }
  </style>
  