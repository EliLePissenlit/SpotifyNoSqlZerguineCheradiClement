<template>
  <div class="bg-gradient-to-r from-green-400 to-[#120726] min-h-screen text-white">
    <!-- Titre de la page -->
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-extrabold tracking-wide mb-6">Playlists</h1>

      <!-- Barre de recherche -->
      <div class="flex items-center mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Recherchez une playlist..."
          class="w-full max-w-lg bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      <!-- Liste des playlists -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="playlist in filteredPlaylists"
          :key="playlist.id"
          class="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition"
        >
          <!-- Image de la playlist -->
          <img
            :src="playlist.image"
            :alt="playlist.title"
            class="w-full h-40 object-cover rounded-md mb-4"
          />
          <!-- Titre et description -->
          <h3 class="font-bold text-lg">{{ playlist.title }}</h3>
          <p class="text-white/70 text-sm mb-4">{{ playlist.description }}</p>
          <!-- Bouton Explorer -->
          <button
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            Explorer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import AuthService from "../services/AuthService";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      playlists: [] as Array<any>,
    };
  },
  async mounted() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      alert("Veuillez vous connecter.");
      this.$router.push("/login");
      return;
    }
    try {
      const { data } = await axios.get("http://localhost:5000/api/playlists", {
        headers: { Authorization: `Bearer ${currentUser.token}` },
      });
      this.playlists = data;
    } catch (err) {
      console.error("Erreur lors de la récupération des playlists :", err);
    }
  },
});
</script>
