<script>
import MercadosApi from "@/api/mercado";
const mercadosApi = new MercadosApi();
export default {
  data() {
    return {
      mercados: [],
      mercado: {},
    };
  },
  async created() {
    this.mercados = await mercadosApi.buscarTodosOsMercados();
  },
  methods: {
    async salvar() {
      if (this.mercados.id) {
        await mercadosApi.atualizarMercado(this.mercado);
      } else {
        await mercadosApi.adicionarMercado(this.mercado);
      }
      this.mercado = {};
      this.mercados = await mercadosApi.buscarTodosOsMercados();
    },
    editar(mercado) {
      Object.assign(this.mercado, mercado);
    },
    async excluir(mercado) {
      await mercadosApi.excluirMercado(mercado.id);
      this.mercados = await mercadosApi.buscarTodosOsMercados();
    },
  },
};
</script>

<template>
<div class="logo">
                    <img src="@/assets/image8.jpg" />
                  </div>
  <h1>Mercados</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="mercado.nome" placeholder="Nome" />
    <input type="text" v-model="mercado.rua" placeholder="Rua" />
    <input type="text" v-model="mercado.bairro" placeholder="Bairro" />
    <input type="text" v-model="mercado.cidade" placeholder="Cidade" />
    <input type="text" v-model="mercado.avaliacao" placeholder="avaliação">
    <button class="button is-success" @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="mercado in mercados" :key="mercado.id">
      <span @click="editar(mercado)">
       {{ mercado.nome }} - {{ mercado.rua }} -{{ mercado.bairro }} - {{ mercado.cidade }} - {{ mercado.avaliacao }}
      </span>
      <button class="button is-warning" @click="editar(mercado)">Editar</button>
      <button class="button is-danger" @click="excluir(mercado)">Excluir</button>
    </li>
  </ul>
</template>

<style>
.logo img{
  width: 100vw;
  height: 100vh;
}
.logo {
  width: 100vw;
  height: 10vw;
}
</style>