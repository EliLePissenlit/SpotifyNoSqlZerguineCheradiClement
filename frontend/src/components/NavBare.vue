<template>
  <nav class="bg-gradient-to-r from-green-400 to-[#120726] text-white shadow-lg sticky top-0 z-50  h-28">
    <div class="container mx-auto px-6 py-3 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img src="../assets/spotiflylogo.webp" alt="Spotifly Logo" class="h-10 w-auto animate-pulse" />
        <span class="text-2xl font-extrabold tracking-wider drop-shadow-lg">Spotifly</span>
      </div>

<ul class="flex space-x-6 text-lg font-semibold">
  <li>
    <router-link
      to="/"
      class="relative after:absolute after:w-full after:h-1 after:bg-white after:rounded-lg after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      Accueil
    </router-link>
  </li>
  <li>
    <router-link
      to="/Artists"
      class="relative after:absolute after:w-full after:h-1 after:bg-white after:rounded-lg after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      Artistes
    </router-link>
  </li>
  <li>
    <router-link
      to="/Playlists"
      class="relative after:absolute after:w-full after:h-1 after:bg-white after:rounded-lg after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      Playlists
    </router-link>
  </li>
  <li>
    <router-link
      to="/Tracks"
      class="relative after:absolute after:w-full after:h-1 after:bg-white after:rounded-lg after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      Tracks
    </router-link>
  </li>
</ul>


      <button
        @click="logout"
        class="bg-gradient-to-r from-[#F00020] to-[#2E2F3A] text-white px-5 py-2 font-bold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 hover:from-[#2E2F3A] hover:to-[#F00020]"
      >
        Déconnexion
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/AuthService";

export default defineComponent({
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    handleLogout() {
      AuthService.logout(); // Supprime les informations utilisateur
      this.router.push("/login"); // Redirige vers la page de connexion
    },
  },
});
</script>

<style scoped>
/* Animations de lien */
a::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}
a:hover::after {
  transform: scaleX(1);
}
</style>
