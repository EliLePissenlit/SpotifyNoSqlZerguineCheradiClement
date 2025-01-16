import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Artists from '../views/Artist.vue';  
import Playlists from '../views/Playlist.vue';  
import Tracks from '../views/Tracks.vue'; 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/artists', name: 'Artists', component: Artists },  
  { path: '/playlists', name: 'Playlists', component: Playlists }, 
  { path: '/tracks', name: 'Tracks', component: Tracks },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
