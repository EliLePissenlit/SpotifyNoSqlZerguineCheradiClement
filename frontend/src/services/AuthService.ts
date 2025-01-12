import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export default {
  async register(username: string, email: string, password: string) {
    return axios.post(`${API_URL}/register`, { username, email, password });
  },

  async login(email: string, password: string) {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  },

  logout() {
    localStorage.removeItem("user");
  },

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },
};
