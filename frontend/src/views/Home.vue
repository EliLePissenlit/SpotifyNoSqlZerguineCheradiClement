<template>
  <div>
    <h1>Bienvenue sur Spotifly</h1>
    <router-link to="/register">Créer un compte</router-link> |
    <router-link to="/login">Se connecter</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script> 