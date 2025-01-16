<template>
  <div>
    <Header />

    <main style="text-align: center; margin-top: 20px;">
      <h1 v-if="isLoggedIn">
        Bonjour, {{ username }} !
      </h1>
      <h1 v-else>
        Bienvenue sur Spotifly
      </h1>
    </main>

    <Player :currentSong="currentSong" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import Header from '../components/Header.vue';
import Player from '../components/Player.vue';
import { useAuthStore } from '../stores/auth';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Player,
  },
  setup() {
    const authStore = useAuthStore();

    const isLoggedIn = computed(() => authStore.user !== null);
    const username = computed(() => authStore.user?.username || '');

    const currentSong = ref<{ title: string; artist: string } | null>(null);

    return {
      isLoggedIn,
      username,
      currentSong,
    };
  },
});
</script>
