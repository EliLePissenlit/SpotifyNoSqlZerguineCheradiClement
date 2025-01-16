<template>
    <div class="bg-gradient-to-r from-green-400 to-[#120726] min-h-screen text-white">
      <Header />
  
      <div class="container mx-auto px-6 py-8">
        <h1 class="text-3xl font-extrabold tracking-wide mb-6">Artistes</h1>
  
        <div class="flex items-center mb-8">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Recherchez un artiste..."
            class="w-full max-w-lg bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
  
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="artist in filteredArtists"
            :key="artist.id"
            class="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition flex flex-col items-center text-center"
          >
            <img
              :src="artist.image || defaultImage"
              :alt="artist.name"
              class="w-24 h-24 object-cover rounded-full mb-3"
            />
            <h3 class="font-bold text-lg">{{ artist.name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  ---
  
 
  <script lang="ts">
  import { defineComponent, ref, computed, onMounted } from "vue";
  import apiClient from "../services/api";
  import Header from "../components/Header.vue";
  
  export default defineComponent({
    name: "Artists",
    components: {
      Header, 
    },
    setup() {
      const searchQuery = ref("");
      const artists = ref<{ id: string; name: string; image?: string }[]>([]);
      const defaultImage = "./src/assets/defaultArtist.webp"; 
  
      const fetchArtists = async () => {
        try {
          const response = await apiClient.get("/api/artists");
          artists.value = response.data.slice(0, 8).map((artist: any) => ({
            id: artist._id,
            name: artist.name,
            image: artist.image || defaultImage,
          }));
        } catch (error) {
          console.error("Erreur lors de la récupération des artistes :", error);
        }
      };
  
      const filteredArtists = computed(() => {
        return artists.value.filter((artist) =>
          artist.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      onMounted(fetchArtists);
  
      return {
        searchQuery,
        artists,
        filteredArtists,
        defaultImage,
      };
    },
  });
  </script>
  