<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="Email" />
        <br />
        <input type="password" v-model="password" placeholder="Mot de passe" />
        <br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:3000/users/login', {
            email: this.email,
            password: this.password,
          });
          alert('Connexion réussie : ' + response.data.message);
        } catch (error) {
          alert('Erreur : ' + error.response.data.message);
        }
      },
    },
    
  };
  </script>
  