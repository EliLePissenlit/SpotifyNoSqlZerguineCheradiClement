<template>
  <div class="min-h-screen bg-gradient-to-r from-green-400 to-[#120726] text-white">
    <Header />
    <main class="text-center mt-5">
      <h1 v-if="isLoggedIn" class="text-3xl font-extrabold">
        Bonjour, {{ username }} !
      </h1>
      <h1 v-else class="text-3xl font-extrabold">
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
