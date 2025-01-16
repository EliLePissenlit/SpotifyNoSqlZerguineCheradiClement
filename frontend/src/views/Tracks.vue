<template>
    <div class="bg-gradient-to-r from-green-400 to-[#120726] min-h-screen text-white">
      <Header />
  
      <div class="container mx-auto px-6 py-8">
        <h1 class="text-3xl font-extrabold tracking-wide mb-6">Musiques</h1>
  
        <div class="flex items-center mb-8">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Recherchez un morceau..."
            class="w-full max-w-lg bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
  
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="track in filteredTracks"
            :key="track.id"
            class="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition flex flex-col items-center text-center"
          >
            <img
              :src="track.image || defaultImage"
              :alt="track.title"
              class="w-24 h-24 object-cover rounded-lg mb-3"
            />
            <h3 class="font-bold text-lg">{{ track.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed, onMounted } from "vue";
  import apiClient from "../services/api";
  import Header from "../components/Header.vue";
  
  export default defineComponent({
    name: "Tracks",
    components: {
      Header,
    },
    setup() {
      const searchQuery = ref(""); 
      const tracks = ref<{ id: string; title: string; image?: string }[]>([]);
      const defaultImage = "./src/assets/defaultMusic.webp"; 
  
      const fetchTracks = async () => {
        try {
          const response = await apiClient.get("/api/songs");
          tracks.value = response.data.map((track: any) => ({
            id: track._id,
            title: track.title,
            image: track.image || defaultImage, 
          }));
        } catch (error) {
          console.error("Erreur lors de la récupération des musiques :", error);
        }
      };
  
      const filteredTracks = computed(() => {
        return tracks.value.filter((track) =>
          track.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
  
      onMounted(fetchTracks);
  
      return {
        searchQuery,
        tracks,
        filteredTracks,
        defaultImage,
      };
    },
  });
  </script>
  