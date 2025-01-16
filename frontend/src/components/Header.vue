<template>
  <header style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #ddd;">
    <div style="display: flex; align-items: center;">
      <img src="../assets/spotiflylogo.webp" alt="Logo Spotifly" style="height: 70px; margin-right: 10px;" />
      <span style="font-size: 30px; font-weight: bold;">Spotifly</span>
    </div>

    <div style="flex-grow: 1; margin: 0 20px;">
      <SearchBar />
    </div>

    <div>
      <template v-if="isLoggedIn">
        <button @click="logout" style="padding: 8px 16px; background-color: red; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Se déconnecter
        </button>
      </template>

      <router-link v-else to="/login" style="padding: 8px 16px; background-color: green; color: white; text-decoration: none; border-radius: 4px;">
        Login
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAuthStore } from '../stores/auth';
import SearchBar from './SearchBar.vue';

export default defineComponent({
  name: 'Header',
  components: {
    SearchBar,
  },
  setup() {
    const authStore = useAuthStore();

    const isLoggedIn = computed(() => authStore.user !== null);

    const logout = () => {
      authStore.logout();
      alert('Déconnecté avec succès !');
    };

    return {
      isLoggedIn,
      logout,
    };
  },
});
</script>
