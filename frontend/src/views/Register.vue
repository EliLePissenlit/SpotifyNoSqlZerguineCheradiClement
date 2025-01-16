<template>
  <div>
    <h1>Inscription</h1>
    <form @submit.prevent="handleRegister">
      <input type="text" v-model="username" placeholder="Nom d'utilisateur" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Mot de passe" required />
      <button type="submit">Créer un compte</button>
    </form>
    <router-link to="/">Retour à l'accueil</router-link>
    <router-link to="/login">Retour à la connexion</router-link>
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
