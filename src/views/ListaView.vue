<script>
import Delete from 'vue-material-design-icons/Delete.vue';
import ListasApi from "@/api/lista";
const listasApi = new ListasApi();
export default {
  data() {
    return {
      listas: [],
      lista: {},
      components: [Delete]
    };
  },
  async created() {
    this.listas = await listasApi.buscarTodasAsListas();
  },
  methods: {
    async salvar() {
      if (this.listas.id) {
        await listasApi.atualizarLista(this.lista);
      } else {
        await listasApi.adicionarLista(this.lista);
      }
      this.lista = {};
      this.listas = await listasApi.buscarTodasAsListas();
    },
    editar(lista) {
      Object.assign(this.lista, lista);
    },
    async excluir(lista) {
      await listasApi.excluirLista(lista.id);
      this.listas = await listasApi.buscarTodasAsLista();
    },
  },
};
</script>

<template>
  <h1>Listas</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="lista.nome" placeholder="Titulo" />
    <input type="text" v-model="lista.descricao" placeholder="Descrição" />
    <input type="file" placeholder="Imagem" />
    <button class="button is-success" @click="salvar">Salvar</button>
  </div>
  <hr>
  <ul>
    <li v-for="lista in listas" :key="lista.id">
      <span @click="editar(lista)">
       {{ lista.nome }} 
       <hr>
       {{ lista.descricao }} 
       {{ lista.capa}}
      </span>
      <button class="button is-warning" @click="editar(lista)">Editar</button>
      <button class="button is-danger"  @click="excluir(lista)">Excluir</button> 
    </li>
  </ul>
</template>

<style></style>