<template>

  <div class="min-h-screen bg-gradient-to-r from-green-400 to-[#120726] flex items-center justify-center text-white">
    
     
 
    <div class="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
      
   
      <h1 class="text-3xl font-extrabold mb-6 text-center">Inscription</h1>


      <form @submit.prevent="handleRegister" class="space-y-6">


        <div>
          <label for="username" class="block text-sm font-medium mb-1">Nom d'utilisateur</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="Nom d'utilisateur"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 
                   focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>


        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 
                   focus:outline-none focus:ring-2 focus:ring-green-300"
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
            class="w-full px-4 py-3 rounded-full bg-white/10 placeholder-white/70 
                   focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>


        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 
                 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          Créer un compte
        </button>
      </form>


      <div class="mt-6 text-center">
        <router-link to="/" class="text-sm text-green-300 hover:underline mr-4">
          Retour à l'accueil
        </router-link>
        <router-link to="/login" class="text-sm text-green-300 hover:underline">
          Retour à la connexion
        </router-link>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../services/api';

export default defineComponent({
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await apiClient.post('/api/user/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });

        alert('Inscription réussie  ');
        this.$router.push('/login'); 
      } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    },
  },
});
</script>
