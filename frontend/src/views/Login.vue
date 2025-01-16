<template>
  <div class="min-h-screen bg-gradient-to-r from-green-400 to-[#120726] flex items-center justify-center text-white">
    <div class="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-3xl font-extrabold mb-6 text-center">Connexion</h1>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium mb-1">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Mot de passe"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          Se connecter
        </button>
      </form>

      <div class="mt-6 text-center">
        <router-link to="/" class="text-sm text-green-300 hover:underline mr-4">
          Retour à l'accueil
        </router-link>
        <p class="text-sm mt-2">
          Pas encore de compte ?
          <router-link to="/register" class="text-green-300 hover:underline">
            Créer un compte
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/auth'; 

export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      console.log('Tentative de connexion...');
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      try {
        const authStore = useAuthStore();
        const success = await authStore.login(this.email, this.password);

        if (success) {
          console.log('Connexion réussie, redirection vers la page d\'accueil.');
          alert('Connexion réussie');
          this.$router.push('/'); 
        } else {
          console.warn('Connexion échouée : identifiants incorrects.');
          alert('Erreur de connexion. Veuillez vérifier vos identifiants.');
        }
      } catch (error) {
        console.error('Erreur inattendue lors de la connexion:', error);
        alert('Erreur de connexion. Une erreur inattendue est survenue.');
      }
    },
  },
});
</script>
