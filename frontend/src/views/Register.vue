<template>
  <div class="min-h-screen bg-gradient-to-r from-green-400 to-[#120726] flex items-center justify-center text-white">
    <!-- Conteneur principal -->
    <div class="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Titre -->
      <h1 class="text-3xl font-extrabold mb-6 text-center">Créer un compte</h1>

      <!-- Formulaire -->
      <form @submit.prevent="handleRegister" class="space-y-6">
        <!-- Champ Nom -->
        <div>
          <label for="name" class="block text-sm font-medium mb-1">Nom</label>
          <input
            id="name"
            v-model="name"
            type="text"
            placeholder="Entrez votre nom"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

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
            placeholder="Entrez un mot de passe"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <!-- Champ Confirmation Mot de passe -->
        <div>
          <label for="confirmPassword" class="block text-sm font-medium mb-1">Confirmez le mot de passe</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirmez votre mot de passe"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        <!-- Bouton Inscription -->
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          S'inscrire
        </button>
      </form>

      <!-- Lien vers Connexion -->
      <div class="mt-6 text-center">
        <p class="text-sm">
          Déjà inscrit ?
          <router-link to="/login" class="text-green-300 hover:underline">Se connecter</router-link>
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
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert("Les mots de passe ne correspondent pas !");
        return;
      }
      try {
        await AuthService.register(this.username, this.email, this.password);
        alert("Inscription réussie !");
        this.router.push("/login");
      } catch (err) {
        console.error("Erreur lors de l'inscription :", err);
        alert("Échec de l'inscription.");
      }
    },
  },
});
</script>
