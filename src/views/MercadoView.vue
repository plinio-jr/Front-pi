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
  <h1>Mercados</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="mercado.nome" placeholder="Nome" />
    <input type="text" v-model="mercado.rua" placeholder="Rua" />
    <input type="text" v-model="mercado.bairro" placeholder="Bairro" />
    <input type="text" v-model="mercado.cidade" placeholder="Cidade" />
    <input type="text" v-model="mercado.avaliacao" placeholder="avaliação">
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="mercado in mercados" :key="mercado.id">
      <span @click="editar(mercado)">
       {{ mercado.nome }} - {{ mercado.rua }} -{{ mercado.bairro }} - {{ mercado.cidade }} - {{ mercado.avaliacao }}
      </span>
      <button @click="excluir(mercado)">X</button>
    </li>
  </ul>
</template>

<style></style>