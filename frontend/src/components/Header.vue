<template>
  <header class="bg-gray-900 text-white shadow-md">
    <Navbar />

    <div class="p-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <img src="../assets/spotiflylogo.webp" alt="Logo Spotifly" class="h-14" />
        <span class="text-2xl font-bold">Spotifly</span>
      </div>

      <div class="flex-grow mx-4">
        <SearchBar />
      </div>

      <div>
        <template v-if="isLoggedIn">
          <button
            @click="logout"
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
          >
            Se déconnecter
          </button>
        </template>

        <router-link
          v-else
          to="/login"
          class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
        >
          Login
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useAuthStore } from "../stores/auth";
import SearchBar from "./SearchBar.vue";
import Navbar from "./Navbar.vue"; 

export default defineComponent({
  name: "Header",
  components: {
    SearchBar,
    Navbar,
  },
  setup() {
    const authStore = useAuthStore();
    const isLoggedIn = computed(() => authStore.user !== null);

    const logout = () => {
      authStore.logout();
      alert("Déconnecté avec succès !");
    };

    return {
      isLoggedIn,
      logout,
    };
  },
});
</script>
