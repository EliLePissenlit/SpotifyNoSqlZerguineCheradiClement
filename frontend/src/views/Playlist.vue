<template>
    <div>
      <h1>Mes Playlists</h1>
      <ul>
        <li v-for="playlist in playlists" :key="playlist.id">{{ playlist.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Playlists',
    data() {
      return {
        playlists: [],
      };
    },
    created() {
      this.fetchPlaylists();
    },
    methods: {
      async fetchPlaylists() {
        try {
          const response = await axios.get('http://localhost:3000/playlists');
          this.playlists = response.data;
        } catch (error) {
          console.error('Erreur lors du chargement des playlists :', error);
        }
      },
    },
  };
  </script>
  