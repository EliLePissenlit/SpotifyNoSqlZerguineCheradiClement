<template>
  <div class="bg-gradient-to-r from-green-400 to-[#120726] min-h-screen text-white">
    <Header />

    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-extrabold tracking-wide mb-6">Créer une Playlist</h1>

      <form @submit.prevent="createPlaylist" class="space-y-6">
        <div>
          <label for="playlistName" class="block text-sm font-medium mb-1">Nom de la Playlist</label>
          <input
            id="playlistName"
            v-model="playlistName"
            type="text"
            placeholder="Entrez le nom de la playlist"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-medium mb-1">Description</label>
          <input
            id="description"
            v-model="description"
            type="text"
            placeholder="Entrez une description"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <div>
          <label for="songs" class="block text-sm font-medium mb-1">Ajouter des chansons</label>
          <select
            v-model="selectedSongs"
            multiple
            class="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option v-for="song in songs" :key="song.id" :value="song.id">
              {{ song.title }} - {{ song.artist }}
            </option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          Créer Playlist
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Header from "../components/Header.vue";
import { useAuthStore } from "../stores/auth";
import apiClient from "../services/api";

export default defineComponent({
  name: "Playlist",
  components: { Header },
  setup() {
    const authStore = useAuthStore();
    const playlistName = ref("");
    const description = ref("");
    const songs = ref<{ id: string; title: string; artist: string }[]>([]);
    const selectedSongs = ref<string[]>([]);

    // Récupérer les chansons depuis l'API
    const fetchSongs = async () => {
      try {
        const response = await apiClient.get("/api/songs");
        songs.value = response.data.map((song: any) => ({
          id: song._id,
          title: song.title,
          artist: song.artist?.name || "Inconnu",
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des chansons :", error);
      }
    };

    // Fonction pour créer la playlist
    const createPlaylist = async () => {
      try {
        if (!authStore.user || !authStore.user.id) {
          alert("Vous devez être connecté pour créer une playlist !");
          return;
        }

        const payload = {
          name: playlistName.value,
          description: description.value,
          userId: authStore.user.id,
          songs: selectedSongs.value,
        };

        await apiClient.post("/api/playlists", payload);
        alert("Playlist créée avec succès !");
        
        // Réinitialisation des champs
        playlistName.value = "";
        description.value = "";
        selectedSongs.value = [];
      } catch (error) {
        console.error("Erreur lors de la création de la playlist :", error);
      }
    };

    onMounted(fetchSongs);

    return {
      playlistName,
      description,
      songs,
      selectedSongs,
      createPlaylist,
    };
  },
});
</script>
