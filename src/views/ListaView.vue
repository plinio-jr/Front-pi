<script>
import ListasApi from "@/api/lista";
const listasApi = new ListasApi();
export default {
  data() {
    return {
      listas: [],
      lista: {},
    };
  },
  async created() {
    this.listas = await listasApi.buscarTodasAsListas();
  },
  methods: {
    async salvar() {
      if (this.lista.id) {
        
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
  <div class="all">
    <hr />
    <div class="form">
      <div class="title">
        <h1>Listas:</h1>
      </div>
      <input type="text" v-model="lista.nome" placeholder="Titulo" />
      <input type="text" v-model="lista.descricao" placeholder="Descrição" />
      <input type="file" model="lista.capa" placeholder="Imagem" />
      <button class="button is-success" @click="salvar">Salvar</button>
      
      <ul>
        <li v-for="lista in listas" :key="lista.id">
          <span @click="editar(lista)">
            {{ lista.nome }}
            {{ lista.descricao }}
            {{ lista.capa }}
          </span>
          <button class="button is-warning" @click="editar(lista)">Editar</button>
          <button class="button is-danger" @click="excluir(lista)">Excluir</button>
        </li>
      </ul>
    </div>
    <hr />
  </div>
</template>

<style scoped>
h1 {
  text-transform: uppercase;
  font-size: 30pt;
  font-weight: 900;
  background: -webkit-linear-gradient(45deg, #0044ff, #00eeff, #00ffdd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

ul{
  margin-top: 3rem;
}

.all {
  margin-top: 10rem;
  width: 100%;
  height: 100vh;
}

li{
  display: flex;
  align-items: center;
  justify-content:center ;
  flex-direction: column;
}

h1 {
  margin-top: 20px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button.is-success {
  margin-top: 20px;
  width: 200px;
  background-color: hsl(153deg, 53%, 53%);
  border-color: transparent;
  color: #fff;
}

input {
  margin-top: 10px;
}
</style>
