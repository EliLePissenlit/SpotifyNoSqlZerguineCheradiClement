<template>
    <div style="position: fixed; bottom: 0; width: 100%; background-color: black; color: white; text-align: center; padding: 10px;">
      <p v-if="currentSong">
        {{ currentSong.title }} - {{ currentSong.artist }}
      </p>
      <img src="../assets/player.png" alt="Player" style="width: 100%; height: auto;" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'Player',
    props: {
      currentSong: {
        type: Object as PropType<{ title: string; artist: string } | null>,
        default: null,
      },
    },
  });
  </script>
  