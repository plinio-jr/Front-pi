import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia } from "pinia";
import { useAuthStore } from "./stores/auth";

const app = createApp(App);

app.use(router);
app.use(createPinia());

axios.defaults.baseURL = "https://pliniojr.pythonanywhere.com/";

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore.token !== "") {
    config.headers["Authorization"] = `Bearer ${authStore.token}`;
  }
  return config;
});

app.mount("#app");

// createApp(App).use(createPinia).use(store).use(router, axios).mount("#app");
