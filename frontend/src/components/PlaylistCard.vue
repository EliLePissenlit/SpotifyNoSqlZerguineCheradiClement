<template>
    <div class="bg-white shadow-md rounded-lg p-4 w-60">
      <h3 class="text-lg font-bold mb-2">{{ playlist.name }}</h3>
      <p class="text-gray-500 mb-2">{{ playlist.tracks }} tracks</p>
      <div class="relative">
        <button
          @click="showMenu = !showMenu"
          class="text-gray-500 hover:text-gray-700"
        >
          ...
        </button>
        <div
          v-if="showMenu"
          class="absolute bg-white shadow-lg rounded-lg right-0 mt-2 py-2 w-32"
        >
          <button @click="editPlaylist" class="block px-4 py-2 text-left w-full hover:bg-gray-100">
            Modifier
          </button>
          <button @click="deletePlaylist" class="block px-4 py-2 text-left w-full hover:bg-gray-100">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'PlaylistCard',
    props: {
      playlist: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      editPlaylist() {
        alert(`Modifier la playlist : ${this.playlist.name}`);
      },
      deletePlaylist() {
        alert(`Supprimer la playlist : ${this.playlist.name}`);
      },
    },
  });
  </script>
  