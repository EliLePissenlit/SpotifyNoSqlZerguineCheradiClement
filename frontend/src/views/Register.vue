<template>
    <div>
      <h1>Créer un compte</h1>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="username" placeholder="Nom d'utilisateur" />
        <br />
        <input type="email" v-model="email" placeholder="Email" />
        <br />
        <input type="password" v-model="password" placeholder="Mot de passe" />
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
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
          const response = await axios.post('http://localhost:3000/users', {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          alert('Compte créé : ' + response.data.message);
        } catch (error) {
          alert('Erreur : ' + error.response.data.message);
        }
      },
    },
  };
  </script>
  