<template>
  <footer class="bg-gradient-to-r from-green-400 to-[#120726] text-white py-6">
    <div class="container mx-auto px-6">
      <!-- Logo and Description -->
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <img src="../assets/spotiflylogo.webp" alt="Spotifly Logo" class="h-10 w-auto" />
          <span class="text-xl font-extrabold tracking-wider">Spotifly</span>
        </div>

        <!-- Quick Links -->
        <ul class="flex space-x-6 text-sm font-medium">
          <li>
            <a
              href="#"
              class="hover:text-green-300 transition"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#"
              class="hover:text-green-300 transition"
            >
              Artistes
            </a>
          </li>
          <li>
            <a
              href="#"
              class="hover:text-green-300 transition"
            >
              Playlists
            </a>
          </li>
          <li>
            <a
              href="#"
              class="hover:text-green-300 transition"
            >
              Tracks
            </a>
          </li>
        </ul>
      </div>

      <!-- Separator -->
      <div class="border-t border-white/30 my-4"></div>

      <!-- Copyright -->
      <div class="text-center text-sm text-white/80">
        © 2025 Spotifly. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Ajout d'animations ou styles supplémentaires si nécessaire */
</style>
