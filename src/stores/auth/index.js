import { defineStore } from "pinia";
import { ref } from "vue";

import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  async function login(user) {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/registration/", this.auth);
      token.value = data.access;
      return Promise.resolve();
    } catch (e) {
      user.value = {};
      return Promise.reject();
    }
  }

  return { token, login };
});
