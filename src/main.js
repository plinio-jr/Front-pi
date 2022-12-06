import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import {createPinia} from 'pinia'

const app = createApp(App).use(store);

app.use(router);
app.use(createPinia());
app.mount("#app")

axios.defaults.baseURL = 'http://127.0.0.1:8000'

createApp(App).use(store).use(createPinia).use(store).use(router, axios).mount('#app')
