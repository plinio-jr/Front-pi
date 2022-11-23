import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import CadastroView from '@/views/CadastroView.vue';
import ListaView from '@/views/ListaView.vue';
import ProdutoView from '@/views/ProdutoView.vue';
import MercadoView from '@/views/MercadoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView
  },
  {
    path: '/listas',
    name: 'listas',
    component: ListaView
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: ProdutoView
  },
  {
    path: '/mercados',
    name: 'mercados',
    component: MercadoView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
