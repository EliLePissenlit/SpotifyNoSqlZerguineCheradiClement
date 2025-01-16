<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
    <router-link to="/">Retour à l'accueil</router-link>
    <p>
      Pas encore de compte ?
      <router-link to="/register">Créer un compte</router-link>
    </p>
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
