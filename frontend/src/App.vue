<template>
  <div>
    <NavBar />
    <router-view /> 
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBare.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
