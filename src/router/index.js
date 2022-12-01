import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import CadastroView from '@/views/CadastroView.vue';
import ListaView from '@/views/ListaView.vue';
import ProdutoView from '@/views/ProdutoView.vue';
import MercadoView from '@/views/MercadoView.vue';
import PerfilView from '@/views/PerfilView.vue';
import EditView from '@/views/EditView.vue';

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/FullView.vue"),
    meta: {
      auth: true
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: HomeView,
      },
      
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
      {
        path: "/listas",
        name: "Listas",
        component: ListaView,
      },
      {
        path: "/mercados",
        name: "Mercados",
        component: MercadoView,
      },
      {
        path: "/edit",
        name: "edit",
        component: EditView,
      },
      {
        path: "/produtos",
        name: "Produtos",
        component: ProdutoView,
      },
      {
        path: "/perfil",
        name: "/perfil",
        component: PerfilView,
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/BlankView.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "/login",
        name: "/login",
        component: LoginView
      },
      {
        path: "/cadastro",
        name: "/cadastro",
        meta: {
          auth: false,
        },
        component: CadastroView
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
