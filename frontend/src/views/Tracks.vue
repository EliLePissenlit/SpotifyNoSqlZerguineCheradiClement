<template>
  <div class="bg-gradient-to-r from-green-400 to-[#120726] min-h-screen text-white">
    <!-- Titre de la page -->
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-extrabold tracking-wide mb-6">Tracks</h1>

      <!-- Barre de recherche -->
      <div class="flex items-center mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Recherchez un morceau..."
          class="w-full max-w-lg bg-white/10 text-white placeholder-white/70 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
        />
      </div>

      <!-- Liste des morceaux -->
      <div class="space-y-6">
        <div
          v-for="track in filteredTracks"
          :key="track.id"
          class="flex items-center justify-between bg-white/10 rounded-lg p-4 hover:bg-white/20 transition"
        >
          <!-- Informations du morceau -->
          <div class="flex items-center space-x-4">
            <!-- Image de la piste -->
            <img
              :src="track.image"
              :alt="track.title"
              class="w-16 h-16 object-cover rounded-md"
            />
            <!-- Détails de la piste -->
            <div>
              <h3 class="font-bold text-lg">{{ track.title }}</h3>
              <p class="text-white/70 text-sm">{{ track.artist }}</p>
            </div>
          </div>
          <!-- Durée et bouton -->
          <div class="flex items-center space-x-4">
            <span class="text-white/70 text-sm">{{ track.duration }}</span>
            <button
              class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              Écouter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tracks",
  data() {
    return {
      searchQuery: "",
      tracks: [
        {
          id: 1,
          image: "../assets/track1.jpg",
          title: "Dreamscape",
          artist: "John Doe",
          duration: "3:45",
        },
        {
          id: 2,
          image: "../assets/track2.jpg",
          title: "Energy Burst",
          artist: "Jane Smith",
          duration: "4:10",
        },
        {
          id: 3,
          image: "../assets/track3.jpg",
          title: "Sunset Chill",
          artist: "DJ Electro",
          duration: "5:02",
        },
        {
          id: 4,
          image: "../assets/track4.jpg",
          title: "Jazz Vibes",
          artist: "The Jazz Band",
          duration: "6:15",
        },
        {
          id: 5,
          image: "../assets/track5.jpg",
          title: "Party Starter",
          artist: "DJ Party",
          duration: "2:58",
        },
      ],
    };
  },
  computed: {
    filteredTracks() {
      return this.tracks.filter((track) =>
        track.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
