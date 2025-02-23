import { defineStore } from 'pinia';
import apiClient from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as { id: string; username: string; email: string } | null,
    token: '' as string,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await apiClient.post('/api/user/login', { email, password });

        this.user = {
          id: response.data.user._id,  
          username: response.data.user.username,
          email: response.data.user.email,
        };
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
    async checkAuth() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        
        try {
          const response = await apiClient.get('/api/user/me', {
            headers: { Authorization: `Bearer ${token}` }
          });
    
          this.user = {
            id: response.data.user._id,
            username: response.data.user.username,
            email: response.data.user.email
          };
        } catch (error) {
          console.error("Erreur lors de la récupération de l'utilisateur :", error);
          this.logout();
        }
      }
    }
    
  },
});
