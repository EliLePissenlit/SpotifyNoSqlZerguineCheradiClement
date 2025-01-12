<template>
  <div class="min-h-screen bg-gradient-to-r from-green-400 to-[#120726] flex items-center justify-center text-white">
    <!-- Conteneur principal -->
    <div class="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Titre -->
      <h1 class="text-3xl font-extrabold mb-6 text-center">Connexion</h1>

      <!-- Formulaire -->
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Champ Email -->
        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Entrez votre email"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <!-- Champ Mot de passe -->
        <div>
          <label for="password" class="block text-sm font-medium mb-1">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <!-- Bouton Connexion -->
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          Connexion
        </button>
      </form>

      <!-- Liens secondaires -->
      <div class="mt-6 text-center space-y-2">
        <a href="#" class="text-sm hover:underline text-white/70">Mot de passe oublié ?</a>
        <p class="text-sm">
          Pas encore inscrit ?
          <router-link to="/register" class="text-green-300 hover:underline">Créer un compte</router-link>
        </p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/AuthService";

export default defineComponent({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async handleLogin() {
      try {
        await AuthService.login(this.email, this.password);
        this.router.push("/playlists");
      } catch (err) {
        console.error("Erreur lors de la connexion :", err);
        alert("Échec de la connexion. Vérifiez vos identifiants.");
      }
    },
  },
});
</script>
