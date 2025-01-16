<template>
  <div>
    <!-- Input de recherche -->
    <input
      v-model="searchQuery"
      @input="performSearch"
      type="text"
      placeholder="Rechercher une musique, un artiste ou une playlist..."
      style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"
    />
    <ul v-if="results.length" style="list-style: none; padding: 0; margin-top: 10px;">
      <li
        v-for="result in results"
        :key="result.id"
        @click="handleResultClick(result)"
        style="cursor: pointer; padding: 5px 0; border-bottom: 1px solid #ccc;"
      >
        <template v-if="result.type === 'Chanson'">
          🎵 {{ result.title }}
        </template>
        <template v-if="result.type === 'Playlist'">
          📋 Playlist: {{ result.name }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import apiClient from '../services/api';

type SearchResult =
  | { id: string; title: string; artist: string; type: 'Chanson' }
  | { id: string; name: string; songs: { title: string; artist: { name: string } }[]; type: 'Playlist' };

export default defineComponent({
  name: 'SearchBar',
  emits: ['play-song'],
  setup(_, { emit }) {
    const searchQuery = ref('');
    const results = ref<SearchResult[]>([]); // Utilisation du type défini

    // Fonction de recherche
    const performSearch = async () => {
      if (!searchQuery.value.trim()) {
        results.value = [];
        return;
      }

      try {
        const response = await apiClient.get(`/api/search?q=${searchQuery.value}`);
        results.value = [
          ...response.data.songs.map((song: any) => ({
            id: song._id,
            title: song.title,
            type: 'Chanson',
          })),
          ...response.data.playlists.map((playlist: any) => ({
            id: playlist._id,
            name: playlist.name,
            songs: playlist.songs,
            type: 'Playlist',
          })),
        ];
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
      }
    };

    const handleResultClick = (result: SearchResult) => {
      if (result.type === 'Chanson') {
        emit('play-song', { title: result.title, artist: result.artist });
      } else if (result.type === 'Playlist' && result.songs.length > 0) {
        const firstSong = result.songs[0];
        emit('play-song', {
          title: firstSong.title,
          artist: firstSong.artist?.name || 'Inconnu',
        });
      }
    };

    return { searchQuery, results, performSearch, handleResultClick };
  },
});
</script>
