<template>
  <div class="bg-gradient-to-r from-green-400 to-[#120726] min-h-screen text-white">
    <!-- Titre de la page -->
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-extrabold tracking-wide mb-6">Artistes</h1>

      <!-- Barre de recherche -->
      <div class="flex items-center mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Recherchez un artiste..."
          class="w-full max-w-lg bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      <!-- Liste des artistes en ligne verticale -->
      <div
        class="flex flex-col space-y-6"
      >
        <div
          v-for="artist in filteredArtists"
          :key="artist.id"
          class="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition"
        >
          <div class="flex items-center space-x-4">
            <!-- Image de l'artiste -->
            <img
              :src="artist.image"
              :alt="artist.name"
              class="w-20 h-20 object-cover rounded-md"
            />
            <!-- Détails de l'artiste -->
            <div>
              <h3 class="font-bold text-lg">{{ artist.name }}</h3>
              <p class="text-white/70 text-sm">{{ artist.genre }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Artists",
  data() {
    return {
      searchQuery: "",
      artists: [
        {
          id: 1,
          image: "../assets/artist1.jpg",
          name: "John Doe",
          genre: "Pop",
        },
        {
          id: 2,
          image: "../assets/artist2.jpg",
          name: "Jane Smith",
          genre: "Rock",
        },
        {
          id: 3,
          image: "../assets/artist3.jpg",
          name: "DJ Electro",
          genre: "Électro",
        },
        {
          id: 4,
          image: "../assets/artist4.jpg",
          name: "The Jazz Band",
          genre: "Jazz",
        },
        {
          id: 5,
          image: "../assets/artist5.jpg",
          name: "Soul Singer",
          genre: "Soul",
        },
      ],
    };
  },
  computed: {
    filteredArtists() {
      return this.artists.filter((artist) =>
        artist.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
