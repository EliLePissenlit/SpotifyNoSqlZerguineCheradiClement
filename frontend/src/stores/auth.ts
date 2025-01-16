import { defineStore } from 'pinia';
import apiClient from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as { username: string; email: string } | null, 
    token: '' as string, 
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await apiClient.post('/api/user/login', { email, password });

        this.user = response.data.user; 
        this.token = response.data.token;

        localStorage.setItem('token', this.token);

        return true;
      } catch (error) {
        console.error('Erreur de connexion', error);
        return false;
      }
    },
    logout() {
      this.user = null;
      this.token = '';
      localStorage.removeItem('token'); 
    },
    checkAuth() {
       const token = localStorage.getItem('token');
       if (token) {
         this.token = token;
 
         
         this.user = { username: 'Utilisateur', email: 'user@example.com' };
       }
     },
   },
 });