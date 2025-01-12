<template>
  <div class="bg-gradient-to-r from-green-400 to-[#120726] min-h-screen text-white">
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-extrabold tracking-wide mb-6">Spotifly</h1>

      <!-- Barre de recherche -->
      <div class="flex items-center mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Recherchez des playlists, musiques ou artistes..."
          class="w-full max-w-lg bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <button
          @click="search"
          class="ml-4 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          Rechercher
        </button>
      </div>

      <!-- Résultats -->
      <div class="space-y-6">
        <div v-if="results.length === 0">Aucun résultat trouvé</div>
        <div v-for="item in results" :key="item._id" class="p-4 bg-white/10 rounded-lg">
          <h3 class="font-bold text-lg">{{ item.title || item.name }}</h3>
          <p v-if="item.artist" class="text-sm text-white/70">{{ item.artist }}</p>
          <p v-if="item.description" class="text-sm text-white/70">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      searchQuery: "",
      results: [] as Array<any>,
    };
  },
  methods: {
    async search() {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/playlists/musics/artists`, {
          params: { query: this.searchQuery },
        });
        this.results = data;
      } catch (err) {
        console.error("Erreur lors de la recherche :", err);
      }
    },
  },
});
</script>
